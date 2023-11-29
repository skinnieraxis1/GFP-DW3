
import './Cuerpo.css'
import { BsPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'

var ingresos = 100000

function Cuerpo() {

    const [cambio, setCambio] = useState(true)

    function activacion(){
        setCambio(!cambio);
    }

    useEffect(() => {
        console.log("Se a tocado el boton")
    }, [cambio]);


  return (
    <>

    <div className='cuerpo'>
        <div className='zona-ingreso'><h1>Ingreso: ${ingresos}</h1></div>
        <div className='contenedor-from'>
            <form action="" className='form-ingresos'>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="" >Comida</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="">Alquiler</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="">Luz</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="">Agua</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="">Ropa</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <div className='div-li-ingresos'>
                    <label className='label-ingresos' htmlFor="">Electronicos</label>
                    <div className='div-input-ingresos'>
                        <input className='input-ingresos' type="int" />
                        <a onClick={activacion}><AiFillMinusCircle className='button-input'/></a>
                    </div>
                </div>
                <a onClick={activacion}><BsPlusCircleFill className='button-input agregar'/></a>
            </form>
            
        </div>
        
    </div>

    </>
  )
}

export default Cuerpo
