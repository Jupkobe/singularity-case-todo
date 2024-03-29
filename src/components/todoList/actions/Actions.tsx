"use client";

// Types
import { ActionHandlers } from "@/types/types";

// Icons
import { PencilSquare, XCircle } from "react-bootstrap-icons";

export default function Actions({ handleEdit, handleDelete }: ActionHandlers) {
  return (
    <div className="actions d-flex gap-2 align-self-baseline">
      <button className="btn text-primary p-0" onClick={handleEdit}>
        <PencilSquare />
      </button>
      <button className="btn text-primary p-0" onClick={handleDelete}>
        <XCircle />
      </button>
    </div>
  );
}
