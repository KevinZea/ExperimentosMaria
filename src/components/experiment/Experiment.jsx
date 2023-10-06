import React from 'react'
import './Experiment.css'
import { useParams } from 'react-router-dom'
import EXPERIMENTOS from '../data'
import tubos from '../../assets/tubosdeensayo.png'

export default function Experiment() {
  const {id} = useParams()
  const data = EXPERIMENTOS.find((elemento) => elemento.color === id)
  const estilo = {backgroundColor: "#" + id}
  return (
    <div className='experiment' style={estilo}>
      <div className='column'>
        <h1>{data.title}</h1>
        <img src={data.cientifico}/>
      </div>
      <div className='hojas-grid'>
        <div className='hoja-title'>
          <h1>MATERIALES</h1>
          {data.materiales.map((e) => {
            return(
              <ul>
                <li>{e}</li>
              </ul>
            )
          })}
        </div>
        <div className='hoja-proceso'>
          <h1>PROCESO</h1>
          {data.proceso.map((e) => {
            return(
              <ul>
                <li>{e}</li>
              </ul>
            )
          })}
        </div>
        <div className='hoja-explicacion'>
          <h1>EXPLICACIÓN</h1>
          <p>{data.explicacion}</p>
        </div>
        <div className='hoja-imagen'>
          <img src={data.imagen}/>
        </div>
      </div>
      <div className='tubos'>
        <img src={tubos} alt="" />
      </div>
    </div>
  )
}
