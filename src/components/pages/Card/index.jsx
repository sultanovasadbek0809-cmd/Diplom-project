import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem('cart')) || [];

    setCart(savedCart);
  }, []);

  // Save cart to localStorage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));

    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Plus
  const increaseQuantity = (id) => {
    const newCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity + 1,
          }
        : product
    );

    updateCart(newCart);
  };

  // Minus
  const decreaseQuantity = (id) => {
    const newCart = cart
      .map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
      .filter((product) => product.quantity > 0);

    updateCart(newCart);
  };

  // Delete
  const deleteProduct = (id) => {
    const newCart = cart.filter(
      (product) => product.id !== id
    );

    updateCart(newCart);
  };

  return (
    <div className={styles.cart}>
      <div className="container">

        <div className={styles.cart__main}>

          <h1 className={styles.title}>
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className={styles.empty}>
              <h2>Your cart is empty</h2>

              <Link
                to="/exprince"
                className={styles.back}
              >
                Go to Products
              </Link>
            </div>
          ) : (
            <div className={styles.products}>

              {cart.map((product) => (
                <div
                  className={styles.card}
                  key={product.id}
                >

                  <div className={styles.image}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                    />
                  </div>

                  <div className={styles.info}>

                    <h2>{product.title}</h2>

                    <p className={styles.price}>
                      ${product.price}
                    </p>

                    <div className={styles.quantity}>

                      <button
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {product.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className={styles.delete}
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Cart;