import React from "react";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };

  return (
    <>
      <Header>
        <button onClick={goBack}>뒤로가기</button>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
