import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import styles from './ProductDetail.module.scss';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setProduct(null);

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // ADD TO CART
  const addToCart = () => {
    const oldCart =
      JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let newCart;

    if (existingProduct) {
      newCart = oldCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      newCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(newCart)
    );

    window.dispatchEvent(new Event('cartUpdated'));
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>

        <button
          onClick={() => navigate('/exprince')}
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <div className="container">

        <button
          className={styles.back}
          onClick={() => navigate('/exprince')}
        >
          ← Back
        </button>

        <div className={styles.detail__main}>

          <img
            src={product.thumbnail}
            alt={product.title}
          />

          <div className={styles.info}>

            <h1>{product.title}</h1>

            <p>{product.description}</p>

            <span>
              Price: ${product.price}
            </span>

            <span>
              Stock: {product.stock}
            </span>

            <span>
              Discount: {product.discountPercentage}%
            </span>

            <span>
              Rating: ⭐ {product.rating}
            </span>

            <button
              className={styles.addButton}
              onClick={addToCart}
            >
              🛒 Add to cart
            </button>

            <button
              className={styles.cartButton}
              onClick={() => navigate('/cart')}
            >
              🛒 View cart
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;