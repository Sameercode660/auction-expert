import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const response = await prisma.auction.findMany({})

        if(response.length === 0) {
            return NextResponse.json({statusCode: 404, message: 'No bid found', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Bid fetched successfully', status: true, data: response})

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to fetch bid(controller)', status: false})
    }
}