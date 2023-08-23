import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/slider/1.jpg"
const slider2 = "/img/slider/2.jpg"
const slider3 = "/img/slider/6.jpg"
const slider4 = "/img/slider/5.jpg"
const slider5 = "/img/slider/4.jpg"


export default function HomeSlider() {
    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    autoplaydisableoninteraction={false}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >

                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Mission Control Software for CubeSat</span></h3>
                                        <div className="desc"><span>Mission Control Software (MCS) provides an easy-to-use monitoring and control access to any space mission. </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Project</span></p>
                                        <h3><span>Project ORiONß</span></h3>
                                        <div className="desc"><span>Our mission is to explore translunar space, beyond the protection of the Earth’s geomagnetic field, conduct research on galactic cosmic radiation–potentially the most threatening element to humans exploring deep</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Project</span></p>
                                        <h3><span>RiGEL UCAV On SWaP Platform</span></h3>
                                        <div className="desc"><span>The nation moves into a new era of defence through unparalleled intelligence, surveillance, and reconnaissance (ISR) capabilities. Mission success requires continued dominance of the electromagnetic spectrum, which has always been an imperative for military operations.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Software defined Radio for Cubesat</span></h3>
                                        <div className="desc"><span>Sensing and Communication Applications using powerful and advanced FPGA Technology CubeSats have revolutionized the way scientific community perceive space. </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Agastya: DNN Robot</span></h3>
                                        <div className="desc"><span>Agastya will revolutionize space security at a scale greater than the self-driving cars.

Developed on over decade research on DNN, Agastya is an AI Robot can enable swarms of drones and aircraft to operate autonomously without GPS, communications, or a pilot.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
