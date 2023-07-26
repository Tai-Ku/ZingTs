import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import { Public, Home, Album, Search, SearchAll } from "./pages/public";
import path from "./untils/path";
import { useEffect } from "react";
import * as api from "./api";
import React from "react";
import { useStore } from "./untils/useStore";
import { observer } from "mobx-react-lite";
const App: React.FC = () => {
  const {
    rootStore: { homeStore },
  } = useStore();
  useEffect(() => {
    homeStore.fetchHome();
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.ALBUM__TITLE_PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE_PID} element={<Album />} />
            <Route path={path.SEARCH_PLAYLIST__TITLE_PID} element={<Album />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
            </Route>
            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default observer(App);
