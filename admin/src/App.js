import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import NotAdmin from "./pages/notAdmin/NotAdmin";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  // console.log(admin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {admin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </>
        ) : (
          <Route path="/" element={<NotAdmin />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
