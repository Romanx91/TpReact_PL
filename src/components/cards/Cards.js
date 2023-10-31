import React from "react";
import "./ProductCard.css"; // Asegúrate de crear este archivo CSS

const Card = ({ image, title, description, price, quantity }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={title} className="card-image" />
        <h2 className="product-card-title">{title}</h2>
      </div>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span className="card-price">Precio: ${price}</span>
        <span className="card-quantity">Cantidad: {quantity}</span>
      </div>
    </div>
  );
};

export default Card;

//{productData.map(product => (
//  <ProductCard
//    key={product.id}  // Aquí es donde se utiliza 'key'
//    image={product.image}
//    title={product.title}
//    description={product.description}
//    price={product.price}
//    quantity={product.quantity}
//  />
//))}
