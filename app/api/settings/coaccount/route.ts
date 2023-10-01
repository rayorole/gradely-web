import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { ApiJsonResponse } from "@/types/api";

// Create a coaccount
export async function POST(req: Request) {
  const { name, email } = await req.json();
  const session = await getServerSession(authOptions);

  // If the user is not authenticated, return a 401
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" } as ApiJsonResponse, {
      status: 401,
    });
  }

  // If the user already has a coaccount, return a 400
  const existingCoaccount = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (existingCoaccount) {
    return NextResponse.json(
      {
        error: "This user already has a an account",
      } as ApiJsonResponse,
      { status: 400 }
    );
  }

  await prisma.user
    .create({
      data: {
        name,
        email,
        role: "COACCOUNT",
        userId: session.user.id,
      },
    })
    .catch((error) => {
      console.log(error);
      return NextResponse.json(
        {
          error: "Something went wrong creating the coaccount",
        } as ApiJsonResponse,
        { status: 500 }
      );
    });

  return NextResponse.json({
    message: "Co-account created successfully",
  } satisfies ApiJsonResponse);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const session = await getServerSession(authOptions);

  // If the user is not authenticated, return a 401
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" } as ApiJsonResponse, {
      status: 401,
    });
  }

  // If the user already has a coaccount, return a 400
  const existingCoaccount = await prisma.user.findFirst({
    where: {
      id,

      AND: {
        role: "COACCOUNT",
      },
    },
  });

  if (!existingCoaccount) {
    return NextResponse.json(
      {
        error: "This user does not have a coaccount",
      } as ApiJsonResponse,
      { status: 400 }
    );
  }

  await prisma.user
    .delete({
      where: {
        id,
      },
    })
    .catch((error) => {
      console.log(error);
      return NextResponse.json(
        {
          error: "Something went wrong deleting the coaccount",
        } as ApiJsonResponse,
        { status: 500 }
      );
    });

  return NextResponse.json({
    message: "Co-account deleted successfully",
  } satisfies ApiJsonResponse);
}
