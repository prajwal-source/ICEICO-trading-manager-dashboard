import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import UtipPopup from "../popups/utipPopup/UtipPopup";


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
  const [utipOpen,setUtipOpen]=useState(false);
  const navigate = useNavigate();
  const location = useLocation(); //  ACTIVE ROUTE

  const handleNavigate = (path) => {
    navigate(path);
    
  };

  return (
    <header className="sticky top-0 z-50 bg-[#e0dfc6]">
      <div className="pl-4 pr-3">
        <div className="flex items-center h-12">

          {/* Logo */}
          <div
            onClick={() => setUtipOpen(true)}
            className="mr-6 py-1 px-3 font-semibold cursor-pointer
                       bg-[#eee1b8] hover:bg-[#f6f5dc]
                       text-gray-800 border rounded"
          >
            Utip
          </div>
           <UtipPopup isOpen={utipOpen} onClose={() => setUtipOpen(false)} />
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

        </div>
      </div>

    </header>
  );
}

export default TopNavbar;
