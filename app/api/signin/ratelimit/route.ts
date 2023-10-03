import { NextResponse } from "next/server";
import Redis from "ioredis";

export async function GET(req: Request) {
  // Get identifier from request parameters (email address)
  const { searchParams } = new URL(req.url);
  const identifier = searchParams.get("identifier");

  try {
    const redis = new Redis(
      process.env.REDIS_URL!
    );
    const result = await redis.get(`magic_link:${identifier}`);

    if (result) {
      // Return a 429 response if the user has exceeded the rate limit
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 }
      );
    } else {
      return NextResponse.json(
        {
          status: "ok",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Get identifier from request body (email address)
  const body = await req.json();
  const identifier = body.identifier;

  try {
    const redis = new Redis(process.env.REDIS_URL!);

    redis.set(`magic_link:${identifier}`, "1");
    redis.expire(`magic_link:${identifier}`, 60);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  return NextResponse.json(
    {
      status: "ok",
    },
    { status: 200 }
  );
}
