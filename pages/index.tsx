import { redirect } from 'next/dist/server/api-utils';
import Head from 'next/head';
import Image from 'next/image';

import { json } from 'stream/consumers';
import { useState } from 'react';
import fetchLogin from "../lib/fetchLogin";
import validateSession from '../lib/validateSession';




export default function Home() {

let equipo=["yen","nairobi","dayana", "nicol", "sarah", "angie"];
let servicios=["manicura tradicional", "manicura semipermanente","pedicura tradicional", "pedicura semipermanente", "limpieza"]

let empleado= equipo.map((element:any,index:number)=>{
  return (
    <div key={index}>
       <figure key={index}>
        <img src="" alt={element} />
        <figcaption>{element}</figcaption>
       </figure>
    </div>
  )
})
let empleadoOption=equipo.map((element:any,index:number)=>{
  return <option value={index} key={index}>{element}</option>
})

let servicio= servicios.map((element:any, index:number)=>{
  return <option value={index} key={index}>{element}</option>
})
return (

  <div>
    <Head>
      <title>Angeles nails style</title>
    </Head>
   <header id='inicio'>
    <div>
      <img src="" alt="Logo angeles nails style" />
      </div>
   
    <nav>
      <ul className='nav'>
        <li className='nav-item'><a href="#about-us" className='nav-link' >About us.</a></li>
        <li  className='nav-item'><a href="#nuestro-equipo" className='nav-link'>Nuestro equipo.</a></li>
        <li className='nav-item'><a href="#agenda" className='nav-link' >Agenda citas.</a></li>
      </ul>
    </nav>
   </header>
    <main>
      <section id='about-us' className='container'>

      </section>
      <section id='nuestro-equipo' className='container'>

        <article id='descripcion'>
          <h3>Aqui va una breve descripci&oacute;n de el equipo de trabajo de angeles spa nails</h3>
        </article>
        <div id='equipo' className='row'>
          {empleado}
        </div>

      </section>
      <section id='agenda' className='container'>
          <form action="" method="get" className='reservarForm  my-3'>
            <div>
              <label htmlFor="telefono" className='form-label'>Telefono/whatsApp:</label>
              <input type="number" name="telefono" id="telefono" className='form-control' />
            </div>

            <div>
              <label  htmlFor="nombre" className='form-label'>Nombre:</label>
            <input type="text" name="nombre" id="nombre" className='form-control' />
            </div>

            <div>
              <label className="form-label" htmlFor="sede">Sede</label>
              <select name="sede" id="sede" className="form-control">
                <option value="Poblado">Poblado</option>
                <option value="Laurel">Laurel</option>
                <option value="Itagui">Itagui</option>
              </select>
            </div>

            <div><label htmlFor="manicurista" className="form-label">Manicurista</label>
              <select name="manicurista" id="manicurista" className="form-control">
                <option value=" "></option>
                {empleadoOption}
              </select>
            </div>
            <div>
              <label  className="form-label" htmlFor="fecha">Fecha</label>
              <input type="date" name="fecha" id="fecha" className="form-control"  />
              </div>
              <div>
              <label  className="form-label" htmlFor="hora">Hora</label>
              <input type="time" name="hora" id="hora" className="form-control"  min="08:00"  max="17:00" step="3600"/>
              </div>
              <div>
                <label  className="form-label" htmlFor="servicios">Servicio</label>
                <select name="servicio" id="servicio" className='form-control'>
                  <option value=""></option>
                  {servicio}
                </select>
                <div className='container'>
                 <fieldset className='row c'>
                  <legend>Incluye diseño</legend>
                      <div className='col-3 form-check'>
                      <label htmlFor="si" className="form-check-label">Si</label>
                      <input type="radio" name="conDiseño" id="si" className='form-check-input' />
                      </div>
                      <div className='col-3 form-check'>
                      <label htmlFor="no" className="form-check-label">No</label>
                      <input type="radio" name="conDiseño" id="no" className='form-check-input' checked/>
                      </div>
                 </fieldset>
                </div>
              </div>
              
              <div>
                <button className='btn btn-success'>Crear</button>
                <button className="btn btn-alert">Cancelar</button>
              </div>

          </form>
      </section>
    </main>
  </div>
)
}