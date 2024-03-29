// Types
import { Todo } from "@/types/types";

// Libraries
import { db, todosCollection } from "@/lib/firebase";

// Functions
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const q = query(todosCollection);

  try {
    const data: Todo[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let tempData = doc.data();
      tempData.id = doc.id;

      data.push(tempData as Todo);
    });

    return NextResponse.json({ status: 200, data });
  } catch (error) {
    return NextResponse.json({ status: 500, data: error });
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const docRef = await addDoc(todosCollection, {
      ...body,
      isCompleted: false,
      createdAt: new Date(),
    });

    return NextResponse.json({ status: 200, data: docRef });
  } catch (error) {
    console.log("An error occured while posting", error);
    return NextResponse.json({ status: 500, data: error });
  }
}
