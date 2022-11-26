import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Blogs from "./pages/Blogs/Blogs";
import Products from "./Products/Products";
import Footer from "./Shared/FooterMenu/FooterMenu";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const items = [
  { label: "Home", key: "/" },
  { label: "About", key: "/about" },
  { label: "Contact", key: "/contact" },
  { label: "Login", key: "/login" },
  { label: "Register", key: "/register" },
  { label: "Logout", key: "/logout" },
];
function App() {
  const navigate = useNavigate();

  return (
    <div className='App'>
      <Header>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          onClick={(e) => {
            navigate(e.key);
          }}
          defaultSelectedKeys={["/"]}
          items={items}
        />
      </Header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
