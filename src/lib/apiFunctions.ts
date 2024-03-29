// Types
import { Todo } from "@/types/types";

export const getData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo`,
      {
        cache: "no-cache",
      }
    );

    if (response.status === 200) {
      const body = await response.json();
      return body.data;
    }
  } catch (error) {
    console.log("Can't reach todos list", error);
    return null;
  }
};

export const postData = async (text: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }
    );

    if (response.status === 200) {
      const body = await response.json();
      return body.data;
    }
  } catch (error) {
    console.log("Can't reach todos list", error);
    return null;
  }
};

export const putData = async (todo: Todo) => {
  try {
    const id = todo.id;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: todo.text,
          isCompleted: todo.isCompleted,
          createdAt: todo.createdAt,
        }),
      }
    );

    if (response.status === 200) {
      const body = await response.json();
      return body.data;
    }
  } catch (error) {
    console.log("Can't reach todos list", error);
    return null;
  }
};

export const deleteData = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const body = await response.json();
      return body.data;
    }
  } catch (error) {
    console.log("Can't reach todos list", error);
    return null;
  }
};

export const patchData = async (todo: Todo) => {
  try {
    const id = todo.id;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/todo/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: todo.text,
          isCompleted: !todo.isCompleted,
          createdAt: todo.createdAt,
        }),
      }
    );

    if (response.status === 200) {
      const body = await response.json();
      return body.data;
    }
  } catch (error) {
    console.log("Can't reach todos list", error);
    return null;
  }
};
