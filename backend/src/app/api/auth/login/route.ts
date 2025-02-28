import {PrismaClient} from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json()

        const checkUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!checkUser) {
            return NextResponse.json({statusCode: 400, message: 'User not found', status: false})
        }

        if(!(password === checkUser.password)) {
            return NextResponse.json({statusCode: 400, message: 'Password incorrect', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'User login successfully', data: checkUser, status: true})

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'unable to login(controller)', status: false})
    }
}