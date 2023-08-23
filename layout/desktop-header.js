import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';

const background = "img/call.png"

export default function DesktopHeader() {

    const [isActive, setActive] = useState(false);
    const activeTrueFalse = () => setActive(!isActive)
    const [isSelect, setSelect] = useState("USD");

    return (
        <>
            <div className="industify_fn_header">

                {/* <!-- Header: Top Panel --> */}
                <div className="industify_fn_toppanel">
                    <div className="left_panel">
                        <div className="info">
                            <Link href="tel:07787744741"><a>7008578181</a></Link>
                        </div>
                        <div className="info">
                            <Link href="mailto:rendycoder.com@gmail.com"><a>support@kristellar.com</a></Link>
                        </div>
                        <div className="industify_fn_social_list">
                            <ul>
                            <li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Facebook className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Twitter className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Instagram className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Vk className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Linkedin className="fn__svg" />
									</a></Link>
								</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Header: Top Panel --> */}

                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/"><a>
                        <img className="desktop_logo" style={{width:"200px",height:"200px"}}
                            src="img/light-logo.png" alt="Industry HTML Template"/>
                            <img className="desktop_logo_dark" src="img/main-logo.png" alt="Industry HTML Template" />
                        </a></Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                        <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/portfolio"><a>Our Projetcs</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/portfolio-single-2"><a>RiGEL UCAV On SWaP Platform​</a></Link></li>
                                    <li><Link href="/portfolio-single-1"><a>PROJECT ORiONß</a></Link></li>
                              
                                   
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link href="/services"><a>Our Services</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/service-single-9"><a>Mission Control Software for Cubesat</a></Link></li>
                                    <li><Link href="/service-single-2"><a>Mission Control Software for UCAV</a></Link></li>
                                    <li><Link href="/service-single-3"><a>Software-Defined Radios for CubeSat Applications</a></Link></li>
                                    <li><Link href="/service-single-4"><a>Agastya : A DNN Robot</a></Link></li>
                                   
                                </ul>
                            </li>
                          
                            <li>
                                <Link href="/blog"><a>Blog</a></Link>
                            </li>
                            <li>
                                <Link href="/contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="toll_free_lang">
                        <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div>
                        <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div>
                        { <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> 1-800-987-6543</p>
                            </div>
                        </div> }

                    </div> */}
                </div>
                {/* <!-- /Header: Bottom Panel --> */}

            </div>
            <div className="my-class"></div>
        </>
    )
}
