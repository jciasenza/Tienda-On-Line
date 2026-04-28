import React from 'react'
import Portada from "../../images/inicio.jpg"
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <div className="inicio">
            <div className="banner-principal">
                <img src={Portada} alt="ShopShoes - Tu tienda online de zapatillas" className="banner-img"/>
                <div className="banner-overlay">
                    <h2 className="banner-titulo">Tu tienda on-line de zapatillas</h2>
                    <p className="banner-subtitulo">Las mejores marcas deportivas al mejor precio</p>
                    <Link to="/productos" className="banner-btn">
                        Ver Catálogo
                    </Link>
                </div>
            </div>

            <section className="seccion-categorias">
                <h2>Categorías Destacadas</h2>
                <div className="categorias-grid">
                    <div className="categoria-card">
                        <div className="categoria-icon">👟</div>
                        <h3>Nike</h3>
                        <p>Zapatillas deportivas</p>
                        <Link to="/productos">Ver más</Link>
                    </div>
                    <div className="categoria-card">
                        <div className="categoria-icon">🏃</div>
                        <h3>Running</h3>
                        <p>Para entrenamientos</p>
                        <Link to="/productos">Ver más</Link>
                    </div>
                    <div className="categoria-card">
                        <div className="categoria-icon">✨</div>
                        <h3>Exclusivas</h3>
                        <p>Ediciones limitadas</p>
                        <Link to="/productos">Ver más</Link>
                    </div>
                </div>
            </section>

            <section className="seccion-promocion">
                <h2>Envío Gratis</h2>
                <p>En compras mayores a $100</p>
            </section>
        </div>
    )
}

