import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {image, name, description, amount} = await req.json()

        if(!image || !name || !description || !amount) {
            return NextResponse.json({statusCode: 400, message: 'All fields are required', status: false})
        }

        const auction = await prisma.auction.create({
            data: {
                image,
                name,
                description,
                amount
            }
        })

        if(!auction) {
            return NextResponse.json({statusCode: 500, message: 'Unable to add in auction', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'Auction added successfully', status: true})
        
    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to add in auction(controller)', status: false})
    }
}
