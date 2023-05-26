import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext.jsx";
import { useLocation } from "react-router-dom";

import Logo from "./assets/img/logo/logobeau.png";
import Cart1 from "./assets/img/cart/sp1.png";
import { useAuthContext } from "./auth/useAuthContext.js";
import { toast, ToastContainer } from "react-toastify";

// redux 
import {useSelector, useDispatch} from 'react-redux';
import {setCartSlice} from './redux/slices/cartSlice';

//components
import LinkWithDropdown from "./components/LinkWithDropdown";
import { useEffect } from "react";

export default function Header() {
    const [cartShow, setCartShow] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const location = useLocation();

    const { isAuthenticated } = useAuthContext();

    const handleCart = (e) => {
        e.preventDefault();
        navigate("/cart");
        setCartShow(!cartShow);
        // if (isAuthenticated) {
        //     setCartShow(!cartShow);
        // } else {
        //     toast.error("Vui lòng đăng nhập");
        // }
    };

    const {isCart} = useSelector((state) => state.carts);

    useEffect(()=>{
        console.log(location.pathname);
    },[]);

    return (
        <div className="header_area">
            {/*header top*/}
            <div className="header_top">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="switcher"></div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="header_links">
                            <ul className="row align-items-center text-center">
                                <li>
                                    <Link to={"/about-us"}>
                                        <p>Liên Hệ</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/product"}>
                                        <p>Sản Phẩm Yêu Thích</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/cart"}>
                                        <p>Giỏ Hàng</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>
                                        <p>Đăng Ký</p>
                                    </Link>
                                </li>
                                <li>
                                    {!isAuthenticated ? (
                                        <Link to={"/login"}>
                                            <p>Đăng Nhập</p>
                                        </Link>
                                    ) : (
                                        <LinkWithDropdown to="#" style={{ color: "#00BBA6", padding: "7px 10px " }}>
                                            <i
                                                className="fa fa-user-circle-o"
                                                style={{ color: "#00BBA6", marginRight: 2 }}
                                            />
                                            <span style={{ color: "#00BBA6", "::after": { display: "none" } }}>
                                                Tài khoản
                                            </span>
                                        </LinkWithDropdown>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*header top end*/}
            {/*header middel*/}
            <React.Fragment>
                <div className="header_middel d-flex align-items-center" style={{ height: 120 }}>
                    <div className="row justify-content-between" style={{ width: "100%" }}>
                        {/*logo start*/}
                        <div className="col-lg-3 col-md-3">
                            <div className="logo">
                                <Link to={"/"}>
                                    <img src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        {/*logo end*/}
                        <div className="col-lg-8 col-md-8">
                            <div className="header_right_info">
                                <div className="search_bar">
                                    <form action="#">
                                        <input placeholder="Tìm Kiếm..." type="text" />
                                        <button type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="shopping_cart">
                                    <a href="#" onClick={() => setCartShow((prev) => !prev)}>
                                        <i className="fa fa-shopping-cart" /> 2SP - 238.000đ{" "}
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    {/*mini cart*/}
    
                                    {cartShow && (
                                        <div className={`mini_cart animated ${cartShow ? "fadeIn" : ""}`}>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src={Cart1} alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <p style={{ fontWeight: 600, fontSize: 16 }}>Đầm Trắng - Mẫu 01</p>
                                                    <span className="quantity">PL: Trắng, Size M</span>
                                                    <span className="quantity">SL: 1</span>
                                                    <span className="cart_old_price">238.000đ</span>
                                                    <span className="cart_new_price">119.000đ</span>
                                                </div>
                                                <div className="cart_remove">
                                                    <a title="Remove this item" href="#">
                                                        <i className="fa fa-times-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cart_item">
                                                <div className="cart_img">
                                                    <a href="#">
                                                        <img src={Cart1} alt="" />
                                                    </a>
                                                </div>
                                                <div className="cart_info">
                                                    <p style={{ fontWeight: 600, fontSize: 16 }}>Đầm Trắng - Mẫu 02</p>
                                                    <span className="quantity">PL: Trắng, Size M</span>
                                                    <span className="quantity">SL: 1</span>
                                                    <span className="cart_old_price">238.000đ</span>
                                                    <span className="cart_new_price">119.000đ</span>
                                                </div>
                                                <div className="cart_remove">
                                                    <a title="Remove this item" href="#">
                                                        <i className="fa fa-times-circle" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mt-2 cart_button d-flex justify-content-end">
                                                <button
                                                    onClick={(e) => handleCart(e)}
                                                    className="btn btn_add_cart"
                                                    style={{ color: "#ffffff", backgroundColor: "#00BBA6" }}
                                                >
                                                    Xem giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    )}
    
                                    {/*mini cart end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*header middel end*/}
                <div className="header_bottom">
                    <div className="row">
                        <div className="col-12">
                            <div className="main_menu_inner">
                                <div className="main_menu d-lg-block">
                                    <nav>
                                        <ul>
                                            <li className={location.pathname == "/" ? "active" : ""}>
                                                <Link to={"/"}>TRANG CHỦ</Link>
                                            </li>
                                            <li className={location.pathname == "/about-us" ? "active" : ""}>
                                                <Link to={"/about-us"}>GIỚI THIỆU</Link>
                                            </li>
                                            <li className={location.pathname == "/product" ? "active" : ""}>
                                                <Link to={"#"}>SẢN PHẨM</Link>
                                                <div className="mega_menu">
                                                    <div className="mega_items">
                                                        <h3>TRANG PHỤC</h3>
                                                        <ul>
                                                            <li>
                                                                <Link to={"/product"}>Thiếu nhi</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Truyền thống</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Nước ngoài</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Hoá trang</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Thường ngày</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Dự tiệc</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Tất cả</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega_items">
                                                        <h3>PHỤ KIỆN</h3>
                                                        <ul>
                                                            <li>
                                                                <Link to={"/product"}>Tác giả</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Cà vạt & nơ</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Giày dép</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Túi xách</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Trâm cài tóc</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Quạt</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/product"}>Tất cả</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className={location.pathname == "/policy" ? "active" : ""}>
                                                <Link to={"/policy"}>QUY ĐỊNH THUÊ</Link>
                                            </li>
                                            <li className={location.pathname == "/contact" ? "active" : ""}>
                                                <Link to={"/contact"}>LIÊN HỆ</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}
