import React from 'react';
import MainPage from "./MainPage";
import ListPage from "./ListPage";
import {Route, Routes} from "react-router-dom";
import CreatePage from "./CreatePage";
import Error from "./NotFoundPage";
import EditPage from "./EditPage";

const Routing = () => {
    return (

        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/list" element={<ListPage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
            <Route path="/edit/:id" element={<EditPage/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    );
};

export default Routing;