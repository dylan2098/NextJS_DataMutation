import { NextResponse } from 'next/server';


// handle method get with params and query
export async function GET(request, context) {
  const { params } = context;

  const searchParams = request.nextUrl.searchParams;

  return NextResponse.json({
    data: [
      {
        param: [params.id],
        query: [
          {
            param: searchParams.keys().next().value,
            value: searchParams.get('hl')
          }
        ],
      },
    ],
    statusCode: 200,
  });
}
