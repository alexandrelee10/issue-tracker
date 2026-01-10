import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'

// 1. We need to validate our request to make sure it doesnt have any bad data. For data validation we use ZOD
    // a. If you look at the body of the model in prisma. Everything is default except title and description. So we will include that here 
    // b. We'll store it inside const schema. when you are working with more data remmeber to name it to be specific
// 2. Now that we have this schema we can use it to validate the body of this request
const createIssueSchema = z.object ({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    
}
