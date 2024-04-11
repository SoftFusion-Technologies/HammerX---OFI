/*
 * Programador: Rafael Peralta
 * Fecha Cración: 08 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción: Página de pautas hammer.
 *  
 *
 *  Tema: Pautas
 *  Capa: Frontend
 */


import React from 'react'
import whats from '../../src/images/redes/whatsapp.png'
import insta from '../../src/images/redes/instagram.png'
import facebook from '../../src/images/redes/facebook.png'

const Contacto = () => {
  return (
    <div className='h-screen bg-[#fc4b08] py-16'>
      <h1 className="text-white max-md:text-[40px] text-[50px] text-center font-bignoodle ">Contacto</h1><hr />
      <h2 className="pt-10 text-white max-md:text-[40px] text-[34px] text-center font-bignoodle ">WhatsApp</h2>
      <div className='flex flex-col justify-center items-center gap-5'>
        <a className='h-10 w-[40%] bg-white rounded-xl' href="https://api.whatsapp.com/send?phone=543863564651" target='_blank'>
          <div>
            <div className='flex justify-center items-center gap-1 pt-1'>
              <img src={whats} alt="WhatsApp" />
              <p className='text-xl font-bignoodle text-[#fc4b08]'>Concepción</p>
            </div>
          </div>
        </a>
        <a className='h-10 w-[40%] bg-white rounded-xl' href="https://api.whatsapp.com/send?phone=543863564651" target='_blank'>
          <div>
            <div className='flex justify-center items-center gap-1 pt-1'>
              <img src={whats} alt="WhatsApp" />
              <p className='text-xl font-bignoodle text-[#fc4b08]'>Monteros</p>
            </div>
          </div>
        </a>
      </div>
      <h2 className="pt-10 text-white max-md:text-[40px] text-[34px] text-center font-bignoodle ">Instagram</h2>
      <div className='flex justify-center items-center'>
        <a className='h-10 w-[40%] bg-white rounded-xl' href="https://instagram.com/hammer.ok" target='_blank'>
          <div>
            <div className='flex justify-center items-center gap-1 pt-1'>
              <img src={insta} alt="WhatsApp" />
              <p className='text-xl font-bignoodle text-[#fc4b08]'>HAMMER.OK</p>
            </div>
          </div>
        </a>
      </div>
      <h2 className="pt-10 text-white max-md:text-[40px] text-[34px] text-center font-bignoodle ">Facebook</h2>
      <div className='flex justify-center items-center'>
        <a className='h-10 w-[40%] bg-white rounded-xl' href="https://facebook.com/hammer.okey" target='_blank'>
          <div>
            <div className='flex justify-center items-center gap-1 pt-1'>
              <img className='h-5' src={facebook} alt="WhatsApp" />
              <p className='text-xl font-bignoodle text-[#fc4b08]'>HAMMER.OK</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contacto