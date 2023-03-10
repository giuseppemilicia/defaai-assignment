import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import SideBar from "./components/SideBar";
import {Outlet, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./utils/PrivateRoute";
import VideoArchive from "./pages/VideoArchive";
import VideoEditor from "./pages/VideoEditor";
import User from "./pages/User";

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/archive" element={
                <PrivateRoute>
                    <VideoArchive />
                </PrivateRoute>
            } />
            <Route path="/editor/*" element={
                <PrivateRoute>
                    <VideoEditor />
                </PrivateRoute>
            } />
            <Route path="/user/*" element={
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            } />
            <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
  );
}

const Layout = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <SideBar/>
          <div className="col-sm p-3 min-vh-100">
            <Outlet />
          </div>
        </div>
      </div>
  );
}

export default App;
