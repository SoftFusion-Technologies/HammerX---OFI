import React from 'react'

const Alerta = ({ children }) => {
    return (
        <div className="my-4">
            <div className='flex text-orange-500 font-semibold font-messina text-[14px]'>
            <p>* &nbsp;</p>
            {children}
            </div>
            {/* en alerta recibimos como children el mensaje de error */}
        </div>
    )
}

export default Alerta