import React, { useState } from "react";
import ControlIcon from "../../assets/control.png";
import { FaBusAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <FaChartLine />, gap: true },
    { title: "Routes", icon: <FaMapMarkedAlt />, path: "/add-road-routes" },
    { title: "Buses", icon: <FaBusAlt /> },
    { title: "Schedule ", icon: <FaCalendarAlt /> },
    { title: "Accounts", icon: <FaUserFriends /> },
    { title: "Setting", icon: <FaCog /> },
  ];

  return (
    <div
      className={` ${
        open ? "w-64" : "w-20 "
      }  bg-gray-800 h-screen p-5  relative duration-300 pt-20 border-r-[4px] border-red-500`}
    >
      <img
        src={ControlIcon}
        className={`absolute cursor-pointer -right-5 top-24 w-9 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            onClick={() => navigate(Menu.path)}
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm sm:text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-4"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            {Menu.icon}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
