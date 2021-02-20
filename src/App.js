import Data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Ecomerce
          </a>
        </div>
        <div>
          <a href="/card">Cart</a>
          <a href="/singin">Sing In</a>
        </div>
      </header>

      <main>
        <div className="row center">
          {Data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price">R${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="row center">all right reserverd</footer>
    </div>
  );
}

export default App;
