import prisma from "@/lib/prisma";
import extractDomain from "extract-domain";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    // Get identifier from request parameters (email address)
    const { searchParams } = new URL(req.url);
    const identifier = searchParams.get("identifier");

    if (!identifier) {
        return NextResponse.json({ error: "No identifier provided" }, { status: 400 });
    }

    try {
        const emailDomain = extractDomain(identifier.toLowerCase())?.toString();

        // Check if there is a domain in the Schools table that matches the domain of the email address
        const school = await prisma.school.findFirst({
            where: {
                domain: emailDomain,
            },
        });

        // If there is a school with the same domain, add the schoolId to the token
        if (!school) {
            return NextResponse.json({ error: "School not found" }, { status: 404 });
        }

        return NextResponse.json({ schoolId: school.id, whitelisted: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}

