import React from "react";

const products = [
    { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
    { id: 2, name: "Notebook", description: "High-performance Notebook for professionals.", price: 1100 },
    { id: 3, name: "PC", description: "High-performance PC for professionals.", price: 1400 }
]

const ProductList1 = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};
export default ProductList1;