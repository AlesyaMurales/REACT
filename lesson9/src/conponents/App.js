import {useDispatch, useSelector} from "react-redux";
import {errorSelector, loadingSelector, userSelector} from "../redux/reducers/userReducer/selectors";
import {useEffect} from "react";
import {loadUsers} from "../redux/reducers/userReducer/userReducer";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";


function App() {


  return (
    <Routes>
        <Route path={'/'} element={<Home/>} />
       <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />}/>
    </Routes>
  );
}

export default App;
