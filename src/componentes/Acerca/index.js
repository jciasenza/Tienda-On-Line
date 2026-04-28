import React from "react";

export const Acerca = () => {
  return (
    <div className="acerca-container">
      <div className="acerca-header">
        <h1>Acerca de ShopShoes</h1>

        <p>
          <strong>ShopShoes</strong> es tu tienda online de zapatillas, creada
          con el objetivo de ofrecer las mejores marcas deportivas al mejor
          precio. Nos enfocamos en brindar una experiencia de compra rápida,
          segura y sencilla.
        </p>

        <p>
          Contamos con una amplia variedad de productos que se adaptan a todos
          los estilos: desde zapatillas deportivas hasta modelos exclusivos y de
          edición limitada.
        </p>

        <h3 className="mt-4">Nuestra misión</h3>
        <p>
          Ofrecer productos de calidad, con excelente atención al cliente y una
          experiencia digital moderna.
        </p>

        <h3 className="mt-4">Nuestra visión</h3>
        <p>
          Convertirnos en una de las principales tiendas online de zapatillas en
          Latinoamérica.
        </p>
      </div>
      <div className="acerca-content">
        <h3 className="mt-4">¿Por qué elegirnos?</h3>
        <ul>
          <li>✔ Productos originales y de calidad</li>
          <li>✔ Envíos rápidos y seguros</li>
          <li>✔ Atención personalizada</li>
          <li>✔ Plataforma simple e intuitiva</li>
        </ul>
      </div>
    </div>
  );
};
