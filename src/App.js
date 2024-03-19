import "./styles/main.css"
import {ReactComponent as Cart}from "./img/cart.svg"
import 'macro-css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
       <header id="header-section">
            <div className="left-header">
              <h3>+7 999 201 04 22</h3>
              <p>/  9:00-22:00</p>
            </div>

            <div className="mid-header">
              <img className="logo" src="/img/logo.svg" alt="logo"/>
            </div>

            <div className="right-header">
              <Cart className="cart" width={36} height={36}/> 
              {/* <img className="cart" width={36} height={36} src="/img/cart.svg"/>  */}

              <div className="cart-counter">
              <div>1</div>
              <div>/ 30 Eur</ div>
              </div>
             
            </div>
       </header>

       <div className="content">
        <div className="left-menu bold">
          <ul>
            <li>Snacks</li>
            <li>Salads</li>
            <li>Rolls</li>
            <li>Hot Dishes</li>
            <li>Soups</li>
            <li>Street food</li>
            <li>Wok and pasta</li>
            <li>Desserts</li>
            <li>Drinks</li>
            <li>Sauces</li>
          </ul>
          <ul>
            <li>Breakfasts</li>
            <li>Lunches</li>
          </ul>
          <ul>
            <li>Contacts</li>
            <li>Delivery</li>
            <li>Payment</li>

          </ul>
        </div>
        <div className='main-conteiner'>
          <h1 className="title-section">Popular</h1>


          <div className="d-flex">
          <div className="card">
            <img height={216} width={216} src="/img/meals/duck.png" alt=""/>
            <div>
              <b>Duck leg confit</b>
              <p>230 g</p>
            </div>
            
            <button className="card-button"><b>10 Eur</b></button>
          </div>

          <div className="card">
            <img height={216} width={216} src="/img/meals/caesarshrimp.png" alt=""/>
            <div>
              <b>Duck leg confit</b>
              <p>230 g</p>
            </div>
            
            <button className="card-button"><b>10 Eur</b></button>
          </div>

          <div className="card">
            <img height={216} width={216} src="/img/meals/salmon.png" alt=""/>
            <div>
              <b>Duck leg confit</b>
              <p>230 g</p>
            </div>
            
            <button className="card-button"><b>10 Eur</b></button>
          </div>

          <div className="card">
            <img height={216} width={216} src="/img/meals/set.png" alt=""/>
            <div>
              <b>Duck leg confit</b>
              <p>230 g</p>
            </div>
            
            <button className="card-button"><b>10 Eur</b></button>
          </div>
          </div>


        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
