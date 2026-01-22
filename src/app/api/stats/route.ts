import { redis } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slugsParam = request.nextUrl.searchParams.get('slugs');

  if (!slugsParam) {
    return NextResponse.json({ error: 'Slugs are required' }, { status: 400 });
  }

  const slugs = slugsParam.split(',').filter(Boolean);

  if (slugs.length === 0) {
    return NextResponse.json({ stats: {} });
  }

  const pipeline = redis.pipeline();

  for (const slug of slugs) {
    pipeline.get(`views:${slug}`);
    pipeline.get(`likes:${slug}`);
  }

  const results = await pipeline.exec();

  const stats: Record<string, { views: number; likes: number }> = {};

  slugs.forEach((slug, index) => {
    const views = (results[index * 2] as number) ?? 0;
    const likes = (results[index * 2 + 1] as number) ?? 0;
    stats[slug] = { views, likes };
  });

  return NextResponse.json({ stats });
}
