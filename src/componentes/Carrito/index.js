import React, { useContext } from 'react'
import { DataContext } from "../../context/DataProvider"
import { FiX, FiChevronUp, FiChevronDown, FiTrash2 } from "react-icons/fi"

export const Carrito = () => {
    const { menu, setMenu, carrito, setCarrito, total } = useContext(DataContext)

    const tooglefalse = ()=>{
        setMenu(false);
    }
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        const updated = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: Math.max(1, item.cantidad - 1)
                }
            }
            return item;
        })
        setCarrito(updated)
    }
    const suma = id =>{
        const updated = carrito.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item;
        })
        setCarrito(updated)
    }

    const removeProducto = id =>{
        if(window.confirm("¿Quieres eliminar el producto?")){
            const updated = carrito.filter(item => item.id !== id)
            setCarrito(updated)
        }
    }
    return (
        <div className={show1}>
            <div className={show2}>
                
                <div className='carrito__close' onClick={tooglefalse}>
                    <FiX />
                </div>

                <h2>Mi Carrito de Compra</h2>
                
                <div className='carrito__center'>
                {
                    carrito.length === 0 ? <h2 style= {{
                        textAlign:"center", fontSize: "3rem"
                    }} >Vacio</h2> : <>
                {
                   carrito.map((producto)=> (
                    <div className='carrito__item' key={producto.id}>
                        <img src={producto.image} alt=""/>
                        <div>
                            <h3>{producto.title}</h3>
                            <p className='price'>$ {producto.price}</p>
                        </div>
                        <div>
                            <FiChevronUp onClick={()=> suma(producto.id)} />
                            <p className='cantidad'>{producto.cantidad}</p>
                            <FiChevronDown onClick={()=> resta(producto.id)} />
                        </div>
                        <div className='remove__item' onClick={() =>removeProducto(producto.id)}>
                             <FiTrash2 />
                        </div>
                    </div>
                    )) 
                    }
                    </>
                    }
                      </div>
                    <div className='carrito__footer'>
                      <h3 className='pagar'>Total: $ {total}</h3>
                      <button className='btn'>Pagar</button>
                    </div>
                </div>
          </div>
   )   
        
}
