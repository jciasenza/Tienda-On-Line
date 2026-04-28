import React from 'react'
import { DataContext } from "../../context/DataProvider"
import { useContext } from "react";
import { ProductoItem } from "./productoItem";

export const ProductosLista = () => {

  const { productos } = useContext(DataContext)

    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className="productos">
          {
            productos.map(producto =>(
            <ProductoItem 
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            /> 
          ))
          }    
        </div>
        </>
    )
}


