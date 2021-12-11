import { useContext } from "react";
import UserContext from "../store/contexts/UserContext";

export default function useUser() {
  const { state } = useContext(UserContext)

  return { user: state }
}