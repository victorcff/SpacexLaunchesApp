import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export const login = useSelector((state: RootState) => state.auth.signedIn)
export const loading = useSelector((state: RootState) => state.loading.isLoading)
export const dispatch = useDispatch()