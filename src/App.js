import Data from "./data";
import Product from "./components/Product";

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
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>

      <footer className="row center">all right reserverd</footer>
    </div>
  );
}

export default App;
