import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Expince.module.scss';

function Exprince() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');

  const productsPerPage = 12;

  // GET PRODUCTS
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=200')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // SEARCH
  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-asc') {
      return a.price - b.price;
    }

    if (sort === 'price-desc') {
      return b.price - a.price;
    }

    if (sort === 'stock-asc') {
      return a.stock - b.stock;
    }

    if (sort === 'stock-desc') {
      return b.stock - a.stock;
    }

    return 0;
  });

  // PAGINATION
  const startIndex = (page - 1) * productsPerPage;

  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(
    sortedProducts.length / productsPerPage
  );

  return (
    <div className={styles.exprince}>
      <div className="container">

        <div className={styles.exprince__main}>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className={styles.search}
          />

          {/* SORT */}
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >
            <option value="">Sort by</option>

            <option value="price-asc">
              Price: Low → High
            </option>

            <option value="price-desc">
              Price: High → Low
            </option>

            <option value="stock-asc">
              Stock: Low → High
            </option>

            <option value="stock-desc">
              Stock: High → Low
            </option>
          </select>

          {/* PRODUCTS */}
          {currentProducts.length > 0 && (
            <div className={styles.products}>

              {currentProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className={styles.cardLink}
                >
                  <div className={styles.card}>

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                    />

                    <h2>
                      {product.title}
                    </h2>

                    <p>
                      {product.description}
                    </p>

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

                  </div>
                </Link>
              ))}

            </div>
          )}

          {/* 404 ONLY WHEN SEARCH DOES NOT FIND PRODUCT */}
          {search.trim() !== '' &&
            filteredProducts.length === 0 && (
              <div className={styles.notfound}>

                <h1>404</h1>

                <h2>
                  Product Not Found
                </h2>

                <p>
                  Sorry, we couldn't find the
                  product you're looking for.
                </p>

              </div>
            )}

          {/* PAGINATION */}
          {totalPages > 0 && (
            <div className={styles.pagination}>

              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>

              <span>
                {page} / {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Exprince;