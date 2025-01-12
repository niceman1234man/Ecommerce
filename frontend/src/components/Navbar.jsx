import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/ProductSlice";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };
  const loginOpen = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };
  const sinupOpen = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 justify-between items-center flex">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 border"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4 ">
          <Link to="/cart" className="relative">
            <FaShoppingCart size={20} />
            <span className="absolute top-0 items-center justify-center text-white bg-red-600 rounded-full text-xs w-3 flex left-3">
              {products.length > 0 ? products.length : <></>}
            </span>
          </Link>
        </div>
        <button
          className="hidden md:block"
          onClick={() => setIsModelOpen(true)}
        >
          Login | Register
        </button>
        <button className="block md:hidden">
          <FaUser />
        </button>
      </div>
      <div className=" flex justify-center items-center space-x-10 py-3 text-sm font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/contact">
          Contact
        </Link>
        <Link className="hover:underline" to="/about">
          About
        </Link>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModelOpen}>
        {isLogin ? (
          <Login sinupOpen={sinupOpen}></Login>
        ) : (
          <Register loginOpen={loginOpen} />
        )}
      </Modal>
    </nav>
  );
}

export default Navbar;
