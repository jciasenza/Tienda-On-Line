import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from "../../context/DataProvider"
import { useParams } from 'react-router-dom'
import { ProductoItem } from "./productoItem";
import { FiSearch, FiX } from 'react-icons/fi'

export const ProductoDetalles = () => {
  const { productos, addCarrito } = useContext(DataContext)
  const [detalle, setDetalle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const params = useParams();

  useEffect(() => {
    const selected = productos.find(producto => producto.id === parseInt(params.id, 10));
    setDetalle(selected || null);
  }, [params.id, productos]);

  if (!detalle) return null;

  const relacionados = productos
    .filter(producto => producto.category === detalle.category && producto.id !== detalle.id)
    .slice(0, 5);

    return (
        <>
          <div className='detalles'>
            <div className='detalles-container'>
              <div className='detalles-imagen-container'>
                <img src={detalle.image} alt={detalle.title} className="detalle-imagen" />
                <div className='detalles-imagen-overlay' onClick={() => setShowModal(true)}>
                  <FiSearch className='detalles-imagen-icon' />
                </div>
              </div>
              
              <div className='detalles-info'>
                <h1>{detalle.title}</h1>
                <div className='detalles-rating'>
                  <span className='estrellas'>⭐⭐⭐⭐⭐</span>
                  <span className='reviews'>(247 opiniones)</span>
                </div>
                
                <div className='detalles-precio'>
                  <span className='label'>Precio:</span>
                  <span className='precio'>${detalle.price}</span>
                </div>

                <div className='detalles-opciones'>
                  <div className='size'>
                    <label>Seleccionar Tamaño:</label>
                    <select aria-label="Seleccionar tamaño" className="select-tamaño">
                      {[36,37,38,39,40,41,42,43,44].map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button className="btn-agregar" onClick={() => addCarrito(detalle.id)}>
                    🛒 Añadir al carrito
                  </button>
                  <button className="btn-comprar">💳 Comprar ahora</button>
                </div>

                <div className='detalles-envio'>
                  <div className='envio-item'>
                    <span>📦</span>
                    <p>Envío gratis a partir de $100</p>
                  </div>
                  <div className='envio-item'>
                    <span>✔️</span>
                    <p>Producto original garantizado</p>
                  </div>
                  <div className='envio-item'>
                    <span>🔄</span>
                    <p>Devolución sin costo en 30 días</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='detalles-descripcion'>
              <h3>Descripción del Producto</h3>
              <p>{detalle.description}</p>
              <h4>Características principales:</h4>
              <ul>
                <li>Material: Tela transpirable y resistente</li>
                <li>Suela: Goma de alto agarre</li>
                <li>Amortiguación: Espuma reactiva</li>
                <li>Peso: Ligero y cómodo</li>
                <li>Uso: Entrenamiento y casual</li>
              </ul>
            </div>
          </div>

          {showModal && (
            <div className='detalle-modal' onClick={() => setShowModal(false)}>
              <div className='detalle-modal-content' onClick={e => e.stopPropagation()}>
                <button className='detalle-modal-close' onClick={() => setShowModal(false)}>
                  <FiX />
                </button>
                <img src={detalle.image} alt={detalle.title} className='detalle-modal-imagen' />
                <p className='detalle-modal-title'>{detalle.title}</p>
              </div>
            </div>
          )}
          
          <h2 className='relacionados'>Productos Relacionados</h2>
          <div className='productos'>
          {relacionados.map(producto => (
              <ProductoItem 
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                image={producto.image}
                category={producto.category}
                cantidad={producto.cantidad}
              />
            ))}    
          </div>
        </>
    )
}
