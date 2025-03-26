import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendBidAcceptanceMail } from "@/utils/BidPlacedMail"; 

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    // Validate bid ID
    if (!id) {
      return NextResponse.json({
        statusCode: 400,
        message: "Bid ID is required",
        status: false,
      });
    }

    // Fetch the bid from database
    const bid = await prisma.bid.findUnique({
      where: { id },
    });

    if (!bid) {
      return NextResponse.json({
        statusCode: 404,
        message: "Bid not found",
        status: false,
      });
    }

    // // Here you might want to update the bid status in the database
    // // For example:
    // await prisma.bid.update({
    //   where: { id },
    //   data: { 
    //     // Add status field to your Bid model if needed
    //     // status: "ACCEPTED" 
    //   },
    // });

    // Send acceptance email
    await sendBidAcceptanceMail({
      customerEmail: bid.email,
      customerName: bid.customerName,
      bidItemName: bid.name,
    });

    return NextResponse.json({
      statusCode: 200,
      message: "Bid accepted and email sent successfully",
      status: true,
      data: {
        id: bid.id,
        customerName: bid.customerName,
        email: bid.email,
        bidItemName: bid.name,
      },
    });

  } catch (error) {
    console.error("Error in accept-bid API:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Failed to accept bid or send email",
      status: false,
    });
  } finally {
    await prisma.$disconnect();
  }
}