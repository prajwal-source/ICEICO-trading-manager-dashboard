import {
  Edit,
  UserPlus,
  UserLock,
  UserRoundX,
} from "lucide-react";
import { useEffect } from "react";

export default function ContextMenu({
  x,
  y,
  visible,
  onClose,
  onCreateAccount,
  onEdit,
}) {
  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  if (!visible) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />

      {/* MENU */}
      <div
        className="fixed z-[9999] w-48 rounded-md
                   border border-gray-300 bg-[#f9f8f2]
                   shadow-lg text-sm py-1"
        style={{ top: y, left: x }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuItem
          label="New account"
          icon={<UserPlus size={16} className="text-green-700" />}
          onClick={onCreateAccount}
        />

        <MenuItem
          label="Edit"
          icon={<Edit size={16} />}
          onClick={onEdit}
        />

        <MenuItem
          label="Report"
          icon={<UserLock size={16} />}
          onClick={onClose}
        />

        <Divider />

        <MenuItem
          label="Delete"
          icon={<UserRoundX size={16} className="text-red-700" />}
          onClick={() => {
            onClose();
            console.log("Delete clicked");
          }}
        />
      </div>
    </>
  );
}

/* ===================== MENU ITEM ===================== */

const MenuItem = ({ label, icon, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 px-3 py-1.5
               cursor-pointer select-none
               text-gray-800 hover:bg-amber-100"
  >
    <span className="w-5 flex justify-center text-gray-600">
      {icon}
    </span>
    <span className="whitespace-nowrap">{label}</span>
  </div>
);

/* ===================== DIVIDER ===================== */

const Divider = () => (
  <div className="my-1 border-t border-gray-300" />
);
