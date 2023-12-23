import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext";

function Dropdown() {
  const {
    selectedDropdownOrdering,
    setSelectedDropdownOrdering,
    selectedGroupingDropDown,
    setSelectedGroupingDropDown,
  } = useContext(KanbanContext);

  const handleOrderingDropValue = (e) => {
    const { name, value } = e.target;
    setSelectedDropdownOrdering({ ...selectedDropdownOrdering, [name]: value });
  };
  const handleGroupingDropValue = (e) => {
    const { name, value } = e.target;
    setSelectedGroupingDropDown({ ...selectedGroupingDropDown, [name]: value });
  };
  return (
    <div className="absolute  top-[140%] left-0 rounded-[8px] overflow-hidden transition-normal duration-300 ease-in-out delay-0 p-6   bg-[#ffff] dark:bg-[#161B22] dark:border-[#4a4a4a] border-1 border-[#e6e7eb] shadow-lg z-10 flex flex-col gap-6 ">
      {/* /group  starts here */}
      <div className="flex items-center gap-20 justify-between text-[1rem]  cw:gap-8 ">
        <span className="text-[#8D8D8D]">Grouping</span>
        <select
          name="grouping"
          onClick={(e) => handleGroupingDropValue(e)}
          className="bg-[#ffff] dark:bg-[#161B22] dark:text-white dark:border-2 dark:border-[#373737] rounded-lg  text-uppercase  cursor-pointer text-[1rem] text-[#373737] py-[0.2rem] pl-[0.2rem] pr-[0.5rem] cw:pl-[1rem] "
        >
          <option value="status">status</option>
          <option value="user">user</option>
          <option value="priority">priority</option>
        </select>
      </div>
      {/* /group  ends here */}
      {/* ordering starts here  */}
      <div className="flex items-center gap-20 justify-between text-[1rem]  cw:gap-8 ">
        <span className="text-[#8D8D8D]">Ordering</span>
        <select
          name="ordering"
          onClick={(e) => handleOrderingDropValue(e)}
          className="bg-[#ffff] dark:bg-[#161B22] dark:text-white dark:border-2 dark:border-[#373737] rounded-lg  text-uppercase  cursor-pointer text-[1rem] text-[#373737] py-[0.2rem] pl-[0.2rem] pr-[0.5rem] cw:pl-[1rem] "
        >
          <option value="priority">priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      {/* ordering ends here  */}
    </div>
  );
}

export default Dropdown;
