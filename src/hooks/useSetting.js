import { useContext } from "react";
import SettingContext from "../context/SettingContext";

const useSetting = () => {
  const context = useContext(SettingContext);
  if (!context) throw Error("Please use useSetting in SettingProvider");

  return context;
};

export default useSetting;
