
import { DiCode } from "react-icons/di";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Navbar.module.scss';


function Navbar() {

  const [cartCount, setCartCount] = useState(0);



  const updateCartCount = () => {

    const cart =
      JSON.parse(localStorage.getItem('cart')) || [];

    const count = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartCount(count);
  };


  useEffect(() => {

    updateCartCount();

    window.addEventListener(
      'cartUpdated',
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        'cartUpdated',
        updateCartCount
      );
    };

  }, []);


  return (
    <div className={styles.navbar}>

      <div className="container">

        <div className={styles.navbar__main}>

          {/* LOGO */}
          <li className={styles.navbar__list}>

            <Link
              to="/"
              className={styles.navbar__logo}
            >
              <DiCode />
            </Link>

          </li>


  
          <ul className={styles.navbar__list}>

            <li className={styles.navbar__list}>
              <Link
                to="/"
                className={styles.navbar__link}
              >
                About Me
              </Link>
            </li>


            <li className={styles.navbar__list}>
              <Link
                to="/projekt"
                className={styles.navbar__link}
              >
                Projects
              </Link>
            </li>


            <li className={styles.navbar__list}>
              <Link
                to="/skills"
                className={styles.navbar__link}
              >
                Skills
              </Link>
            </li>


            <li className={styles.navbar__list}>
              <Link
                to="/exprince"
                className={styles.navbar__link}
              >
                Products
              </Link>
            </li>


            {/* CART */}
            <li className={styles.navbar__list}>

              <Link
                to="/cart"
                className={styles.cart}
              >

                🛒 Cart

                {cartCount > 0 && (
                  <span className={styles.cartCount}>
                    {cartCount}
                  </span>
                )}

              </Link>

            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}


export default Navbar;

