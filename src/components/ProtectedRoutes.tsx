import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const ProtectedRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {

  return (
    <>
      {isAuthenticated ?
        (
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <Outlet />
          </div>
        )
        :
        <Navigate to="/" />
      }
    </>
  );
};