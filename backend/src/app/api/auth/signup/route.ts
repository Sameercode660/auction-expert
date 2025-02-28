import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const {name, email, password} = await req.json()

        
        const checkUser = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(checkUser) {
            return NextResponse.json({statusCode: 400, message: 'User already exists', status: false})
        }
        
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        if(!user) {
            return NextResponse.json({statusCode: 400, message: 'unable to create the user', status: false})
        }

        return NextResponse.json({statusCode: 200, message: 'User created successfully', data: user, status: true})

    } catch (error) {
        return NextResponse.json({statusCode: 500, message: 'unable to signup(controller)', status: false})
    }
}