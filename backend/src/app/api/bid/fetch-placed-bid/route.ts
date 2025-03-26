import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        // Fetch all bids from the Bid table
        const response = await prisma.bid.findMany({});

        // Check if any bids were found
        if (response.length === 0) {
            return NextResponse.json({
                statusCode: 404,
                message: 'No bids found',
                status: false
            });
        }

        // Return successful response with bid data
        return NextResponse.json({
            statusCode: 200,
            message: 'Bids fetched successfully',
            status: true,
            data: response
        });

    } catch (error) {
        // Handle any errors that occur during the fetch
        return NextResponse.json({
            statusCode: 500,
            message: 'Unable to fetch bids (controller)',
            status: false
        });
    }
}