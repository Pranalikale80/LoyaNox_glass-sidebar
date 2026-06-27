import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ icon, title }) {

  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full gap-2 p-2 rounded hover:bg-black/30"
      >
        {icon}
        <span>{title}</span>

        <ChevronDown
          className={`ml-auto transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* List */}
      {open && (
        <div className="ml-6 mt-1 space-y-1">
          <p className="hover:bg-black/30 p-2 rounded">Option 1</p>
          <p className="hover:bg-black/30 p-2 rounded">Option 2</p>
          <p className="hover:bg-black/30 p-2 rounded">Option 3</p>
        </div>
      )}
    </div>
  );
}