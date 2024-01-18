import { useAppSelector } from "../../hooks/hooks";
import { Navigate, useLocation } from "react-router";
import React,{ ReactElement, ReactNode } from "react";


interface IProtectedRoute{
  onlyUnAuth?:boolean;
  component:ReactElement
}
const ProtectedRoute = ({ onlyUnAuth = false, component }:IProtectedRoute):ReactElement|null => {
  const isAuth = useAppSelector((state) => state.userLogicReducer.isAuth);
  const user = useAppSelector((state) => state.userLogicReducer.user);
  const location = useLocation();

  if (!isAuth) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};
export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({ component }:IProtectedRoute) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
