import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index.js";
import { ProductoDetalles } from "./Productos/ProductoDetalles";
import { Contacto } from "./Contacto";
import { Acerca } from "./Acerca";
import { PoliticaPrivacidad } from "./PoliticaPrivacidad";


export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/productos" exact component = {ProductosLista} />
                <Route path="/producto/:id" exact component = {ProductoDetalles} />
                <Route path="/contacto" exact component={Contacto} />
                <Route path="/acerca" exact component={Acerca} />
                <Route path="/privacidad" exact component={PoliticaPrivacidad} />
            </Switch>
        </section>
    )
}


