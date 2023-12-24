import ColumnCard from "../component/ColumnCard";
import backlog from "../assets/backlog.svg";
import cancel from "../assets/cancel.svg";
import todo from "../assets/todo.svg";
import inprogress from "../assets/inprogress.svg";
import done from "../assets/done.svg";
import { useContext } from "react";
import { KanbanContext } from "../context/KanbanContext";

function Home() {
  const { selectedGroupingDropDown, data } = useContext(KanbanContext);

  return (
    <div className=" grid grid-cols-5 gap-[15px] w-[97%] m-auto  px-0 py-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
      {selectedGroupingDropDown.grouping === "status" && (
        <>
          <ColumnCard status="Backlog" icon={backlog} />

          <ColumnCard status="Todo" icon={todo} />

          <ColumnCard status="In progress" icon={inprogress} />

          <ColumnCard status="Done" icon={done} />

          <ColumnCard status="Cancelled" icon={cancel} />
        </>
      )}
      {selectedGroupingDropDown.grouping === "user" && (
        <>
          {data.users.map((user) => {
            return (
              <ColumnCard
                key={user.id}
                status={user.name}
                icon={""}
                userKiId={user.id}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
