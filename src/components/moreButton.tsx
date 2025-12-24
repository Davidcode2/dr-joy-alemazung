import { MoveRightIcon } from "lucide-react";

export default function MoreButton() {
  return (
      <button className="flex gap-x-4 mt-4 hover:text-(--accent)/80 transition">
        Mehr
        <MoveRightIcon strokeWidth={1}/>
      </button>
  );
}
