import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext";
import UserTicketDetailCard from "./UserTicketDetailCard";
import { ThemeContext } from "../context/ThemeContext";

function ColumnCard({ status, icon, userKiId }) {
  const { data } = useContext(KanbanContext);
  const { randomColor } = useContext(ThemeContext);

  const { selectedDropdownOrdering, selectedGroupingDropDown } =
    useContext(KanbanContext);

  const filterTicketsForStatusCount = data?.tickets?.filter(
    (ticket) => ticket.status === status
  );

  const filterUserById = data?.tickets?.filter(
    (ticket) => ticket.userId === userKiId
  );

  const sortOrderValue = selectedDropdownOrdering.ordering;
  const sortGroupValue = selectedGroupingDropDown.grouping;

  const sortFunctionOrder = (a, b) => {
    const order = sortOrderValue;
    if (order === "priority") {
      return b.priority - a.priority;
    } else if (order === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };
  const sortFunctionGroup = (a, b) => {
    const order = sortGroupValue;
    if (order === "priority") {
      return a.priority - b.priority;
    } else if (order === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const sortedTicketsStatus =
    filterTicketsForStatusCount?.sort(sortFunctionOrder);

  const sortedTicketsGroup = filterUserById?.sort(sortFunctionGroup);

  return (
    <div className="flex flex-col gap-[0.2rem]">
      {/* //main contaner  */}
      <div className="flex justify-between items-center h-[8vh] py-0 px-[0.4rem] ">
        {/* //left  */}
        <div className="flex gap-[7px] justify-between items-center ">
          {/* // status starts here  */}
          {selectedGroupingDropDown.grouping === "status" && (
            <div className="text-[1rem] flex items-center ">
              <div>
                <img src={icon} className="text-gray-500" alt="/loading" />
              </div>
            </div>
          )}
          {/* // status ends here  */}

          {/* // users starts here  */}
          {selectedGroupingDropDown.grouping === "user" && (
            <div
              className="inline-flex justify-center items-center w-[15px] h-[15px] rounded-full text-[0.5rem] font-normal text-white relative "
              style={{ backgroundColor: randomColor }}
            >
              <div>
                {status?.[0]
                  ?.split(" ")
                  .map((word) => word.charAt(0))
                  .join("")
                  .toUpperCase()}
              </div>

              <div className="bg-[#808080] absolute bottom-0 right-0 w-[5px] h-[5px] rounded-full outline-1 outline-white "></div>
            </div>
          )}
          {/* // user ends here  */}

          <span className="text-[1rem] font-semibold text-[#373737] dark:text-[#ebebeb] ">
            {status}
          </span>
          <span className="text-[#808080] ">
            {" "}
            {selectedGroupingDropDown.grouping === "status" &&
              filterTicketsForStatusCount?.length}{" "}
            {selectedGroupingDropDown.grouping === "user" &&
              filterUserById?.length}{" "}
          </span>
        </div>
        {/* right */}
        <div className="flex gap-[6px] justify-between items-center dark:text-white ">
          <div className="text-[1rem] ">
            {" "}
            <GoPlus />
          </div>
          <div className="text-[1rem] ">
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* <div> */}
      {selectedGroupingDropDown.grouping === "status" &&
        sortedTicketsStatus?.map((user) => {
          return (
            <UserTicketDetailCard
              key={user.id}
              user={user}
              randomColor={randomColor}
            />
          );
        })}
      {/* </div> */}
      {/* <div> */}
      {selectedGroupingDropDown.grouping === "user" &&
        sortedTicketsGroup?.map((user) => {
          return (
            <UserTicketDetailCard
              key={user.id}
              user={user}
              randomColor={randomColor}
            />
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default ColumnCard;
