/* eslint-disable react/prop-types */
import './Products.css';
import { AddToCartIcon } from "./icons.jsx";

const Products = ({ products }) => {
    console.log('Productos en el Componente Products:', products); // Agrega esta línea

    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img
                            src={product.images}
                            alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products; // Asegúrate de que esta línea esté presente
