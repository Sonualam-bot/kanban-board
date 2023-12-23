import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import loadingIcon from "../assets/loading.svg";

function ColumnCard() {
  return (
    <div className="flex flex-col gap-[0.2rem]">
      {/* //main contaner  */}
      <div className="flex justify-between items-center h-[8vh] py-0 px-[0.4rem] ">
        {/* //left  */}
        <div className="flex gap-[7px] justify-between items-center ">
          <div className="text-[1rem] flex items-center ">
            <div>
              <img src={loadingIcon} className="text-gray-500" alt="/loading" />
            </div>
          </div>
          <span className="text-[1rem] font-semibold text-[#373737] dark:text-[#ebebeb] ">
            Backlog
          </span>
          <span className="text-[#808080] ">2</span>
        </div>
        {/* right */}
        <div className="flex gap-[6px] justify-between items-center ">
          <div className="text-[1rem] ">
            {" "}
            <GoPlus />
          </div>
          <div className="text-[1rem] ">
            <BsThreeDots />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2"></div>
    </div>
  );
}

export default ColumnCard;
