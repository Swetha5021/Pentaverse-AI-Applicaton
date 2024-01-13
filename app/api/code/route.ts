
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";\
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
const instructionMessage: OpenAI.ChatCompletionMessage = {
  role: "assistant",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}

export async function POST(
    req: Request
) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
          }
      
          if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key not configured.", { status: 500 });
          }
      
          if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
          }

          const freeTrial = await checkApiLimit();

          if (!freeTrial ) {
            return new NextResponse("Free trial has expired.", { status: 403 });
          }

          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
          });

          await incrementApiLimit();

          return NextResponse.json(response.choices[0].message);

    } catch (error){
        console.log("[CODE_ERROR]",error);
        return new NextResponse("Internal error", {status:500});
    }
}