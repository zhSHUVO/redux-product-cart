import { Provider } from "react-redux";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Nav from "./Components/Nav";
import AddProduct from "./Components/Product/AddProduct";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Nav></Nav>
                <AddProduct></AddProduct>
                <Cart></Cart>
            </div>
        </Provider>
    );
}

export default App;
