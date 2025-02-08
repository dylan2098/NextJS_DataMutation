import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    data: ['Testing'],
    statusCode: 200,
  });
}

// handle method post
export async function POST(request, context) {
  const body = await request.json();

  return NextResponse.json({
    data: [body],
    statusCode: 201,
  });
}
