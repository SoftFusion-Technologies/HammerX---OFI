import React from 'react';
import '../styles/Loading.css';
import { logo } from "../images/svg/index";

const Loading = () => {

    return (
        <>
          
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
            
            {/* <h1
                Acomodar este texto y aplicarle TIPOGRAFIA: BIG NOODLE TITLING
                className="text-simple"
            >
                VIVÍ SENSACIONES POSITIVAS SIEMPRE
            </h1>
             */}
              <img src={logo} alt="logo" className="mt-20" /> 
          
        </>
    );
};

export default Loading;
