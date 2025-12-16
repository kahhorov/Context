import { useContext } from "react";
import { contextProvider } from "../../Context/MainContext";

function Grid() {
  const { darkMode } = useContext(contextProvider);
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center w-full mt-10 px-5">
      <div
        className={`${
          darkMode.theme
            ? "border-gray-400/40 border"
            : "border-gray-800 border"
        } col-span-1 row-span-3 py-5 px-4 h-full rounded-md`}
      >
        Grid-1
      </div>
      <div
        className={`${
          darkMode.theme
            ? "border-gray-400/40 border"
            : "border-gray-800 border"
        } py-5 px-4 rounded-md`}
      >
        Grid-2
      </div>
      <div
        className={`${
          darkMode.theme
            ? "border-gray-400/40 border"
            : "border-gray-800 border"
        } py-5 px-4 rounded-md`}
      >
        Grid-3
      </div>
      <div
        className={`${
          darkMode.theme
            ? "border-gray-400/40 border"
            : "border-gray-800 border"
        } py-5 px-4 col-span-2 rounded-md`}
      >
        Grid-4
      </div>
      <div
        className={`${
          darkMode.theme
            ? "border-gray-400/40 border"
            : "border-gray-800 border"
        } py-5 px-4 row-start-1 rounded-md`}
      >
        Grid-5
      </div>
    </div>
  );
}

export default Grid;
