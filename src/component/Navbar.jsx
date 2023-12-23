//icon
import { useContext, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import Dropdown from "./Dropdown";

function Navbar() {
  const [light, setLight] = useState(false);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);

  const { handleThemeSwitch } = useContext(ThemeContext);

  const handleDisplayClick = () => {
    setRotateArrow(!rotateArrow);
    setShowDisplayModal(!showDisplayModal);
  };

  const handleSwitch = () => {
    handleThemeSwitch();
    setLight(!light);
  };

  return (
    <div className="flex justify-center items-center h-[8vh]  shadow-sm ">
      <nav className="w-[97%] m-auto flex justify-between items-center ">
        {/* starts here first div  */}
        <div className="relative z-40  " onClick={handleDisplayClick}>
          <div className="flex items-center justify-between gap-3 rounded-lg px-2 py-1 border-2 border-[#e6e7eb] dark:border-gray-500  cursor-pointer text-[#373737] shadow-sm dark:text-white ">
            <div className="text-[#8D8D8D] text-xs ">
              <GiSettingsKnobs className="dark:text-white" />
            </div>
            <p>Display</p>
            <div
              className={`text-xs text-[#8D8D8D] flex items-center transition-transform transform ${
                rotateArrow ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown className="dark:text-white" />
            </div>
          </div>
        </div>
        {showDisplayModal && (
          <div className="absolute">
            <Dropdown />
          </div>
        )}
        {/* starts here first div  */}
        {/* 2 */}
        <div className="bg-transparent border-none outline-none cursor-pointer text-lg light:text-[#373737] dark:text-white ">
          <button onClick={handleSwitch}>
            {light ? <MdDarkMode /> : <CiLight />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
