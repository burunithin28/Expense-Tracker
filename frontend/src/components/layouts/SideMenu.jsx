import React, { useContext, useState } from "react";
import { SIDE_MENU_DATA } from "../../utils/data.js";
import { UserContext } from "../../context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../cards/CharAvatar.jsx";
import toast from "react-hot-toast";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      clearUser();
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      clearUser();
      navigate("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return (
      <div className="w-64 h-[calc(100vh-61px)] bg-red-500 border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
        <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
          <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-full h-12 bg-gray-200 rounded-lg mb-3 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-20 h-20 bg-slate-400 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            styles="text-xl"
          />
        )}

        {user?.profileImageUrl && (
          <div style={{ display: "none" }}>
            <CharAvatar
              fullName={user?.fullName}
              width="w-20"
              height="h-20"
              styles="text-xl"
            />
          </div>
        )}

        <h5 className="text-gray-950 font-medium leading-6 text-center">
          {user?.fullName || "User"}
        </h5>
        <p className="text-gray-500 text-sm text-center">{user?.email}</p>
      </div>

      <nav className="space-y-2">
        {SIDE_MENU_DATA.map((item, index) => {
          const isLogoutItem = item.label === "Logout";
          const isActiveMenu = activeMenu === item.label;

          return (
            <button
              key={`menu_${index}`}
              className={`w-full flex items-center gap-4 text-[15px] transition-all duration-200 py-3 px-6 rounded-lg
                ${
                  isActiveMenu
                    ? "text-white bg-primary shadow-md"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                }
                ${
                  isLogoutItem && isLoggingOut
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
              `}
              onClick={isLogoutItem ? handleLogout : () => navigate(item.path)}
              disabled={isLogoutItem && isLoggingOut}
            >
              <item.icon className="text-xl flex-shrink-0" />
              <span className="flex-1 text-left">
                {isLogoutItem && isLoggingOut ? "Logging out..." : item.label}
              </span>
              {isLoggingOut && isLogoutItem && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideMenu;
