import React from 'react';
import '../styles/Loading.css';
import Logo2  from "../images/imagenLogoSpinner.jpg";

const Loading = () => {

    return (
        <div>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            <div className="container-logo">
                <img src={Logo2} alt="logo" className="logo-centered" />
            </div>
        </div>
    );
};

export default Loading;
