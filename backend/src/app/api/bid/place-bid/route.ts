import {NextResponse, NextRequest} from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendBidMail} from '@/utils/BidMail'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        
        const {customerName, name, email, amount} = await req.json()

        if(!customerName || !name || !email || !amount) {
            return NextResponse.json({statusCode: 400, message: 'All fields are required', status: false})
        }

        const bid = await prisma.bid.create({
            data: {
                email,
                customerName,
                name,
                amount
            }
        })

        if(!bid) {
            return NextResponse.json({statusCode: 500, message: 'Unable to place big', status: false})
        }

        // send email to customer
        await sendBidMail({
            customerEmail: email,
            customerName,
            bidAmount: amount,
            bidName: name
        })

        return NextResponse.json({statusCode: 200, message: 'Bid placed successfully', status: true})
        
    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'Unable to place bid(controller)', status: false})
    }
}