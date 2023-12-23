import ColumnCard from "../component/ColumnCard";

function Home() {
  return (
    <div className=" grid grid-cols-5 gap-[15px] w-[97%] m-auto h-[92vh] px-0 py-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
      <ColumnCard />

      {/* 22222222222222222 */}

      <ColumnCard />
      {/* 3333333333333333333333 */}
      <ColumnCard />

      {/* 444444444444444444444444444444? */}
      <ColumnCard />

      {/* 55555555555555555555555555555555555 */}
      <ColumnCard />
    </div>
  );
}

export default Home;
