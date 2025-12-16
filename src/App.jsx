import { useContext } from "react";
import { Navbar } from "./components";
import { contextProvider } from "./Context/MainContext";
import Grid from "./components/Grid";

function App() {
  const { darkMode } = useContext(contextProvider);

  return (
    <div
      className={`${
        darkMode.theme ? "bg-gray-800 text-white" : "bg-white text-black"
      } h-screen`}
    >
      <Navbar />
      <Grid />
    </div>
  );
}

export default App;
