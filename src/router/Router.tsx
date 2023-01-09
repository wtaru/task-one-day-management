// default models
import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
// my create models
import { Top } from "../components/pages/Top";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Top />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/www" element={<Login />}></Route>
        </Routes>
    );
});