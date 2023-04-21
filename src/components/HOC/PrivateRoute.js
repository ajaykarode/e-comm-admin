import React from "react";
import { Navigate, Route } from "react-router-dom";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const token = window.localStorage.getItem("token");

  if (!token) {
    // not logged in so redirect to login page with the return url
    return <Navigate to={`/signin`} />;
  }

  // authorized so return child components
  return children;
}




























// const PrivateRoute = ({component : Component, ...rest}) => {
//   const token = window.localStorage.getItem('token');
//   if(token){
//     // return <Component {...props} />
//     return {component : Component, ...rest}
//   }else{
//     return <Navigate to={`/signin`} />
//   }

//   return <Route { ...rest } component={(props)=>{
//   if(token){
//     return <Component {...props} />
//   }else{
//     return <Navigate to={`/signin`} />
//   }
// }}/>
// }

// const PrivateRoute = ({component : Component, ...rest}) => {
//     const token = window.localStorage.getItem('token');
//   return <Route { ...rest } component={(props)=>{
//     if(token){
//       return <Component {...props} />
//     }else{
//       return <Navigate to={`/signin`} />
//     }
//   }}/>
// }

// const PrivateRoute = (props) => {
//   return <Route {...props} />
// }

export default PrivateRoute;
