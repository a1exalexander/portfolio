import { redis } from '@/lib/redis';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const views = (await redis.get<number>(`views:${slug}`)) ?? 0;

  return NextResponse.json({ views });
}

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const views = await redis.incr(`views:${slug}`);

  return NextResponse.json({ views });
}
