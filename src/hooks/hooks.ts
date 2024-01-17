import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppActions, MyDispatch } from "../services/action-types/app-actions";
import { RootState } from "../services/store";

import type {} from "redux-thunk/extend-redux";
export const useTypedDispatch = () => useDispatch<MyDispatch>();
export const TypedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
