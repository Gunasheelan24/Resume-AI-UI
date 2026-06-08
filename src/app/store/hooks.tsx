import { useSelector, useDispatch } from "react-redux";
import type { AppDispatchType, AppStoreType } from "./Store";

export const useAppSelector = useSelector.withTypes<AppStoreType>();
export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
