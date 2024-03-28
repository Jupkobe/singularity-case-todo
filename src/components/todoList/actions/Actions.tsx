"usse ";

// Icons
import { PencilSquare, XCircle } from "react-bootstrap-icons";

export default function Actions({ handleEdit }) {
  return (
    <>
      <div className="actions d-flex gap-2 align-self-baseline">
        <button className="btn text-primary p-0" href="#" onClick={handleEdit}>
          <PencilSquare />
        </button>
        <button className="btn text-primary p-0" href="#" onClick={handleEdit}>
          <XCircle />
        </button>
      </div>
    </>
  );
}
