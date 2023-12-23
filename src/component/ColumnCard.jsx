import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext";
import UserTicketDetailCard from "./UserTicketDetailCard";
import { ThemeContext } from "../context/ThemeContext";

function ColumnCard({ title, icon }) {
  const { data } = useContext(KanbanContext);
  const { randomColor } = useContext(ThemeContext);

  const { selectedDropdownOrdering, selectedGroupingDropDown } =
    useContext(KanbanContext);

  console.log(selectedGroupingDropDown);

  const filterTicketsForStatusCount = data?.tickets?.filter(
    (ticket) => ticket.status === title
  );

  const sortFunction = (a, b) => {
    const order = selectedDropdownOrdering.ordering;
    if (order === "priority") {
      return b.priority - a.priority;
    } else if (order === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  };

  const sortedTickets = filterTicketsForStatusCount?.sort(sortFunction);

  return (
    <div className="flex flex-col gap-[0.2rem]">
      {/* //main contaner  */}
      <div className="flex justify-between items-center h-[8vh] py-0 px-[0.4rem] ">
        {/* //left  */}
        <div className="flex gap-[7px] justify-between items-center ">
          <div className="text-[1rem] flex items-center ">
            <div>
              <img src={icon} className="text-gray-500" alt="/loading" />
            </div>
          </div>
          <span className="text-[1rem] font-semibold text-[#373737] dark:text-[#ebebeb] ">
            {title}
          </span>
          <span className="text-[#808080] ">
            {" "}
            {filterTicketsForStatusCount?.length}{" "}
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
      {sortedTickets?.map((user) => {
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
