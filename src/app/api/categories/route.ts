import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse as res } from "next/server";
import { z } from "zod";
import { zfd } from "zod-form-data";

export async function GET() {
  try {
    const result = await prisma.category.findMany({
      omit: {
        id: true,
      },
    });

    return res.json(result, { status: 200 })

  } catch (e) {
    return res.json(e, { status: 500 })
  }


}

export async function POST(req: NextRequest) {
  
  const schema = zfd.formData({
    title: zfd.text(),
    slug: zfd.text(z.string())
  });
  
  try {
    const bodyData: any = schema.parse(await req.json());

    const result = await prisma.category.create({
      data: bodyData,
      omit: {
        id: true,
      },
    });

    return res.json(result, { status: 201 })

  } catch (e) {
    return res.json(e, { status: 500 })
  }
  


  
}