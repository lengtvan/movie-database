import { useContext } from "react";
import { MovContext } from "../contexts/MovieContext";

const useMov = () => {
  return useContext(MovContext);
};

export default useMov;