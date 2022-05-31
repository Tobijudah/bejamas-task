import { useContext } from "react";
import { Store } from "../context/store";

const useStore = () => useContext(Store);

export default useStore;
