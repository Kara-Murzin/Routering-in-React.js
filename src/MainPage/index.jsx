import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>ZhaSa</h1>
            <h3>Жұмыстарды оңай басқару</h3>
            <Link to="/list">
                <button>Kettik!</button>
            </Link>
        </div>
    );
};

export default MainPage;