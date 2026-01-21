import { redis } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const likes = (await redis.get<number>(`likes:${slug}`)) ?? 0;

  return NextResponse.json({ likes });
}

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const likes = await redis.incr(`likes:${slug}`);

  return NextResponse.json({ likes });
}
