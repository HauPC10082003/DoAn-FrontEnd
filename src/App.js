import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Allproduct from "./Pages/Allproduct";
import ProductDetail from "./Pages/ProductDetails";
import ProductAdd from "./Pages/ProductAdd";
import Login from "./Pages/Login";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout/>} >
            <Route path="login" element={<Login/>} />
                <Route index element={<Home/>} />
                <Route path="products" element={<Allproduct/>} />
                
                <Route path="products/details/:id" element={<ProductDetail/>} />

                <Route path="products/add" element={<ProductAdd/>} />


                
            </Route>

            {/* <Route path="/admin/" element={<LayoutAdmin/>}>
                <Route path="accounts" element={<Accounts/>} />
            </Route> */}

            </Routes>


            
        </BrowserRouter>
    );
}

export default App;