import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="dark:bg-[#161B22] ">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#F4F5F8]  dark:bg-[#010409]">
        <Home />
      </div>
    </div>
  );
}

export default App;
