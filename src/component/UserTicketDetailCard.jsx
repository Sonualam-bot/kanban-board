import { useContext } from "react";
import bottomIcon from "../assets/bottomSvg.svg";
import greyCircle from "../assets/greyCircle.svg";
import { KanbanContext } from "../context/KanbanContext";

function UserTicketDetailCard({ randomColor, user }) {
  const { id, title, tag, userId } = user;
  const { data } = useContext(KanbanContext);

  const getUser = data?.users?.filter((user) => user.id === userId);

  const getUsersName = getUser?.map((user) => user.name);

  return (
    <div className="flex flex-col gap-3">
      {/* user Card starts here  */}
      <div className="flex flex-col gap-2 px-[1.2rem] py-[0.8rem] w-full rounded-md bg-[#ffff] dark:bg-[#161B22] shadow-lg border-1 border-[#e6e7eb] dark:border-[#4a4a4a] ">
        {/* first starts here */}
        <div className="flex justify-between items-center w-full">
          <span className="text-[1rem] text-[#8D8D8D] ">{id}</span>
          <div
            className="inline-flex justify-center items-center w-[15px] h-[15px] rounded-full text-[0.5rem] font-normal text-white relative "
            style={{ backgroundColor: randomColor }}
          >
            <div>
              {getUsersName?.[0]
                ?.split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()}
            </div>
            <div className="bg-[#808080] absolute bottom-0 right-0 w-[5px] h-[5px] rounded-full outline-1 outline-white "></div>
          </div>
        </div>
        {/* first ends here */}

        {/* middle starts here */}
        <div className="flex items-start gap-[5px] ">
          <p className="text-[1rem] text-[#373737] dark:text-[#ebebeb] font-medium leading-[102%] ">
            {title}
          </p>
        </div>
        {/* middle ends here */}
        {/* bottom starts here  */}
        <div className="flex items-center mt-[3px]">
          <div className="border-1 border-[#e6e7eb] dark:border-[#4a4a4a] rounded-[3px] p-[2px] ">
            <img
              src={bottomIcon}
              alt="/imp"
              className=" bg-[#808080] dark:bg-transparent  block "
            />
          </div>
          <div className="text-[0.85rem] py-[1px] px-0 text-[#8D8D8D] ">
            <div className="flex gap-[5px] items-center border-1 border-[#e6e7eb] dark:border-[#4a4a4a] rounded-[3px] px-[5px] py-[1px] ">
              <div>
                <img
                  className="block text-gray-500 "
                  src={greyCircle}
                  alt="/"
                />
              </div>
              <span>{tag}</span>
            </div>
          </div>
        </div>
        {/* bottom ends here  */}
      </div>
      {/* user Card ends here  */}
    </div>
  );
}

export default UserTicketDetailCard;
