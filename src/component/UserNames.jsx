import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function UserNames({ name, index }) {
  const { randomColor } = useContext(ThemeContext);

  return (
    <div
      className="inline-flex justify-center items-center w-[15px] h-[15px] rounded-full text-[0.5rem] font-normal text-white relative "
      style={{ backgroundColor: randomColor }}
    >
      <div>
        <div key={index}>
          {name
            ?.split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()}
        </div>
      </div>

      <div className="bg-[#808080] absolute bottom-0 right-0 w-[5px] h-[5px] rounded-full outline-1 outline-white "></div>
    </div>
  );
}

export default UserNames;
