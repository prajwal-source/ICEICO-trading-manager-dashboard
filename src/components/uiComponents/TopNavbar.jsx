import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Registrations", path: "/registration" },
  { label: "Online", path: "/online" },
  { label: "Accounts", path: "/accounts" },
  { label: "Reports", path: "/reports" },
  { label: "Symbols", path: "/symbols" },
  { label: "Risk Management", path: "/risk_management" },
  { label: "Administrator", path: "/administrator" },
];

function TopNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); //  ACTIVE ROUTE

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#e0dfc6]">
      <div className="pl-4 pr-3">
        <div className="flex items-center h-12">

          {/* Logo */}
          <div
            onClick={() => handleNavigate("/dashboard")}
            className="mr-6 py-1 px-3 font-semibold cursor-pointer
                       bg-[#eee1b8] hover:bg-[#f6f5dc]
                       text-gray-800 border rounded"
          >
            Utip
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`
                    px-3 py-1 rounded border transition cursor-pointer
                    ${isActive
                      ? "bg-amber-100 border text-gray-900 font-semibold"
                      : "bg-white hover:bg-amber-100"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto text-gray-700"
          >
            {open ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-3 space-y-2 text-sm">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`
                    text-left px-3 py-2 rounded transition
                    ${isActive
                      ? "bg-amber-100 font-semibold"
                      : "hover:bg-gray-100"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

export default TopNavbar;
