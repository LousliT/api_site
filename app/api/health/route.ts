import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      mensagem: "Student Planner API funcionando!",
      status: "ONLINE"
    },
    { status: 200 }
  );
}