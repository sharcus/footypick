import { useState } from "react";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { MENU, SCREEN_TITLES } from "../constants/constants";
import { User, Menu } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const title = SCREEN_TITLES[location.pathname] ?? "";

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center">
      <div className="w-full max-w-[1280px]">
        {/* Toolbar */}
        <header className="h-14 flex items-center justify-between px-4 border-b border-gray-800">
          {isMobile ? (
            <>
              <button onClick={() => navigate("/profile")}>
                {" "}
                <User />{" "}
              </button>
              <div className="font-semibold">{title}</div>
              <button onClick={() => setMobileMenuOpen((v) => !v)}>
                {" "}
                <Menu />{" "}
              </button>
            </>
          ) : (
            <>
              <div className="font-bold">⬢ LOGO</div>
              <nav className="flex gap-6">
                {MENU.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-yellow-400" : "text-gray-400"
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <button onClick={() => navigate("/profile")}>
                {" "}
                <User />{" "}
              </button>
            </>
          )}
        </header>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="bg-gray-800 border-b border-gray-700">
            {MENU.map((item) => (
              <div
                key={item.path}
                className="px-4 py-3 border-t border-gray-700"
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
