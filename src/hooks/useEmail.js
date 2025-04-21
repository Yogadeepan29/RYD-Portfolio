import { useContext } from "react";
import { EmailContext } from "../Components/context/EmailContext";

const useEmail = () => {
  return useContext(EmailContext);
};

export default useEmail;
