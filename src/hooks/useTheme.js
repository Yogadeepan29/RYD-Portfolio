import { useContext } from "react";
import { ThemeContext } from "../Components/context/ThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
