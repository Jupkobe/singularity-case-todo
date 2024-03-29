// Libraries
import { db, todosCollection } from "@/lib/firebase";

// Functions
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: any) {
  const body = await req.json();
  const { params } = context;

  try {
    await setDoc(doc(db, "todos", params.id), {
      ...body,
    });

    return NextResponse.json({ status: 200, data: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}

export async function DELETE(req: Request, context: any) {
  const { params } = context;

  try {
    const response = await deleteDoc(doc(db, "todos", params.id));

    return NextResponse.json({ status: 200, data: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}

export async function PATCH(req: Request, context: any) {
  const body = await req.json();
  const { params } = context;

  try {
    await setDoc(doc(db, "todos", params.id), {
      ...body,
    });

    return NextResponse.json({ status: 200, data: "Success" });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}
