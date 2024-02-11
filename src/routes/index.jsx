import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Users from '../pages/users';
import Warnings from '../pages/warns';
import CreateUsers from '../pages/createUsers';
import CreateWarns from '../pages/createWarns';


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/create-user" element={<CreateUsers />}/>
          <Route path="/notifications" element={<Warnings />}/>
          <Route path="/create-notification" element={<CreateWarns />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router;