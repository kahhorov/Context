import { useContext } from "react";
import { contextProvider } from "../../Context/MainContext";
// icons
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
// components
function Navbar() {
  const { darkMode, dispatch } = useContext(contextProvider);

  const changeTheme = () => {
    dispatch({ type: "Change_Theme" });
  };

  return (
    <ul
      className={`${
        darkMode.theme
          ? "bg-gray-800 shadow-gray-700/60 shadow-2xl"
          : "bg-white shadow-gray-200 shadow-2xl"
      } flex justify-between py-3 px-10 items-center`}
    >
      <li>Navbar</li>
      <li>
        <button
          onClick={changeTheme}
          type="button"
          className={`${
            darkMode.theme && " text-white rotate-180"
          } flex rounded-md text-3xl cursor-pointer duration-200`}
        >
          {darkMode.theme ? <CiLight /> : <CiDark />}
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
