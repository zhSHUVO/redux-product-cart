import "./App.css";
import AddProduct from "./Components/AddProduct";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <AddProduct></AddProduct>
            <Cart></Cart>
        </div>
    );
}

export default App;
