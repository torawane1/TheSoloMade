import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    const player = await prisma.player.findUnique({
      where: { id },
      include: {
        currentTeam: true,
        awards: true,
        matchStats: {
          orderBy: { match: { matchDate: 'desc' } },
          take: 10,
          include: { match: true }
        }
      },
    });

    if (!player) {
      return NextResponse.json({ error: 'Player not found' }, { status: 404 });
    }

    return NextResponse.json(player);
  } catch (error) {
    console.error('Error fetching player profile:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
