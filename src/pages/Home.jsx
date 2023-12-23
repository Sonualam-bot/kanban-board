import ColumnCard from "../component/ColumnCard";
import backlog from "../assets/backlog.svg";
import cancel from "../assets/cancel.svg";
import todo from "../assets/todo.svg";
import inprogress from "../assets/inprogress.svg";
import done from "../assets/done.svg";

function Home() {
  return (
    <div className=" grid grid-cols-5 gap-[15px] w-[97%] m-auto  px-0 py-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
      <ColumnCard title="Backlog" icon={backlog} />

      {/* 22222222222222222 */}

      <ColumnCard title="Todo" icon={todo} />
      {/* 3333333333333333333333 */}
      <ColumnCard title="In progress" icon={inprogress} />

      {/* 444444444444444444444444444444? */}
      <ColumnCard title="Done" icon={done} />

      {/* 55555555555555555555555555555555555 */}
      <ColumnCard title="Cancelled" icon={cancel} />
    </div>
  );
}

export default Home;
