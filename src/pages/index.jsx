import ThieuNhi from "../assets/img/thieunhi.png";
import TruyenThong from "../assets/img/truyenthong.png";
import CaCNuoc from "../assets/img/cacnuoc.png";
import HoaTrang from "../assets/img/hoatrang.png";
import ThuongNgay from "../assets/img/thuongngay.png";
import DuTiec from "../assets/img/dutie.png";

import Quat from "../assets/img/quat.png";
import TramCai from "../assets/img/tramcai.png";
import TuiXach from "../assets/img/tuixach.png";
import Dep from "../assets/img/dep.png";
import Cavat from "../assets/img/cavat.png";
import TocGia from "../assets/img/tocgia.png";

import Carousel from "react-bootstrap/Carousel";

import SpanNew from "../assets/img/cart/span-new.png";
import Product1 from "../assets/img/product/pr1.png";
import Product2 from "../assets/img/product/pr2.png";
import Product3 from "../assets/img/product/pr3.png";
import Product4 from "../assets/img/product/pr4.png";
import Product5 from "../assets/img/product/pr5.png";
import Product6 from "../assets/img/product/pr6.png";
import Product7 from "../assets/img/product/pr7.png";
import Product8 from "../assets/img/product/pr8.png";
import Product9 from "../assets/img/product/pr9.png";
import Product10 from "../assets/img/product/pr10.png";
import Product11 from "../assets/img/product/pr11.png";

import slider2 from "../assets/img/slider/slider_2.png";
import slider3 from "../assets/img/slider/slider_3.png";
import slider4 from "../assets/img/slider/slide_4.png";
import { useCallback, useEffect, useState } from "react";

// rating
import { Rating } from "react-simple-star-rating";

//data
import { dataProduct } from "../data/product";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="pos_home_section">
                <div className="row">
                    {/*banner slider start*/}
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    style={{ height: 550 }}
                                    className="d-block w-100"
                                    src={slider2}
                                    alt="First slide"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: 550 }}>
                                <img className="d-block w-100" src={slider3} alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ height: 550 }}>
                                <img className="d-block w-100" src={slider4} alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <span className="caorousel-title">Beauty Outfits</span>
                                    <p className="carousel-subtitle">Thời trang cho mọi người - mặc là đẹp.</p>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/*new product area start*/}
                <div className="new_product_area product_two">
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Danh mục trang phục</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={ThieuNhi} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Thiếu Nhi</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TruyenThong} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Truyền Thống</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={CaCNuoc} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Các Nước</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={HoaTrang} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Hóa Trang</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={ThuongNgay} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Thường Ngày</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={DuTiec} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Dự tiệc</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*new product area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Danh mục phụ kiện</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Quat} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Tóc giả</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TramCai} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Cà vạt & nơ</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TuiXach} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Giày dép</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Dep} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Túi xách</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={Cavat} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Trâm cài tóc</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="single_product">
                                <div className="product_thumb">
                                    <a href="">
                                        <img src={TocGia} alt="" />
                                    </a>
                                </div>
                                <div className="product_content mt-3">
                                    <h3 className="product_title">
                                        <a href="">Quạt</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*banner area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Sản phẩm mới</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="col-lg-3">
                                <div className="single_product">
                                    <div className="product_thumb">
                                        <Link to={`detail-product/${dataProduct[idx].id}`}>
                                            <img src={dataProduct[idx].img} alt="" />
                                        </Link>
                                        <div className="img_icone">
                                            <img src={SpanNew} alt="" />
                                        </div>
                                        <div className="product_action">
                                            <Link to={`detail-product/${dataProduct[idx].id}`}>
                                                <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product_content pt-2">
                                        <h3 className="product_title">
                                            <a href="">{dataProduct[idx].name}</a>
                                        </h3>
                                        <p
                                            className="old-price"
                                            style={{ textDecoration: "line-through", display: "inline" }}
                                        >
                                            {dataProduct[idx].oldPrice + " - 50$"}
                                        </p>
                                        <br />
                                        <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                            {dataProduct[idx].price}
                                        </span>

                                        <div className="d-flex" style={{ gap: 10 }}>
                                            <Rating
                                                size={15}
                                                initialValue={4}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                            <span>Đã thuê: 76</span>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <ul>
                                            <li>
                                                <a href="#" title=" Thêm vào danh sách yêu thích ">
                                                    Thêm vào danh sách yêu thích
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="banner_area banner_two">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Product5} alt="" />
                                </a>
                                <div className="banner_title">
                                    <p>
                                        Up to <span> 40%</span> off
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Product6} alt="" />
                                </a>
                                <div className="banner_title title_2">
                                    <p>
                                        sale off <span> 30%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_banner">
                                <a href="#">
                                    <img src={Product7} alt="" />
                                </a>
                                <div className="banner_title title_3">
                                    <p>
                                        sale off <span> 30%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*banner area end*/}
                {/*featured product area start*/}
                <div className="new_product_area product_two" style={{ marginTop: "40px" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="block_title">
                                <h3>Sản phẩm thuê nhiều</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="col-lg-3">
                                <div className="single_product">
                                    <div className="product_thumb">
                                        <Link to={`/detail-product/${dataProduct[idx + 4].id}`}>
                                            <img src={dataProduct[idx + 4].img} alt="" />
                                        </Link>
                                        <div className="img_icone">
                                            <img src={SpanNew} alt="" />
                                        </div>
                                        <div className="product_action">
                                            <Link to={`/detail-product/${dataProduct[idx + 4].id}`}>
                                                <i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product_content pt-2">
                                        <h3 className="product_title">
                                            <a href="">{dataProduct[idx + 4].name}</a>
                                        </h3>
                                        <p
                                            className="old-price"
                                            style={{ textDecoration: "line-through", display: "inline" }}
                                        >
                                            {dataProduct[idx + 4].oldPrice + " - 50$"}
                                        </p>
                                        <br />
                                        <span className="" style={{ fontSize: 18, fontWeight: 700 }}>
                                            {dataProduct[idx + 4].price}
                                        </span>

                                        <div className="d-flex" style={{ gap: 10 }}>
                                            <Rating
                                                size={15}
                                                initialValue={4}
                                                fillColor="#00BBA6"
                                                className="p-0 m-0"
                                            />
                                            <span>Đã thuê: 76</span>
                                        </div>
                                    </div>
                                    <div className="product_info">
                                        <ul>
                                            <li>
                                                <a href="#" title=" Thêm vào danh sách yêu thích ">
                                                    Thêm vào danh sách yêu thích
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
