import React, { useState, useEffect } from 'react'
import MetisMenu from 'metismenujs';
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


export default function MobileHeader() {

	const [isMobileMenu, setMobileMenu] = useState(false);
	const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		new MetisMenu("#metismenu");
	}, []);

	return (
		<>
			<div className="industify_fn_mobilemenu_wrap">
				<div className="industify_fn_toppanel">
					<div className="left_panel">
						<div className="info"> <Link href="tel:07787744741"><a>7008578181</a></Link>
                       </div>
						<div className="info"><Link href="/mailto:trendycoder.com@gmail.com"><a>support@kristellar.com</a></Link></div>
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
				{/* <!-- TOLL FREE MOBILE --> */}
				
				{/* <!-- /TOLL FREE MOBILE --> */}
				{/* <!-- LOGO & HAMBURGER --> */}
				<div className="logo_hamb">
					<div className="in">
						<div className="menu_logo">
							<Link href="/"><a><img src="img/light-logo.png" alt="Industry Template" /></a></Link>
						</div>
						<div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /LOGO & HAMBURGER --> */}
				{/* <!-- MOBILE DROPDOWN MENU --> */}
				<div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
					<div>
						<nav >
							<ul className="metismenu" id="metismenu">
								<li>
									<Link href="#"><a className="has-arrow">Home</a></Link>
									
								</li>
								<li className="menu-item-has-children">
                                <Link href="/portfolio"><a>Our Projetcs</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/portfolio-single-2"><a>RiGEL UCAV On SWaP Platform​</a></Link></li>
                                    <li><Link href="/portfolio-single-1"><a>PROJECT ORiONß</a></Link></li>
                              
                                   
                                </ul>
                            </li>
								<li>
									<Link href="#"><a className="has-arrow">Our Services</a></Link>
									<ul className="sub-menu">
                                    <li><Link href="/service-single-9"><a>Mission Control Software for Cubesat</a></Link></li>
                                    <li><Link href="/service-single-2"><a>Mission Control Software for UCAV</a></Link></li>
                                    <li><Link href="/service-single-3"><a>Software-Defined Radios for CubeSat Applications</a></Link></li>
                                    <li><Link href="/service-single-4"><a>Agastya : A DNN Robot</a></Link></li>
                                   
                                   
                                </ul>
								</li>
								
								<li><Link href="/blog"><a>Blog</a></Link></li>
								<li><Link href="/contact"><a>Contact</a></Link></li>
							</ul>
						</nav>
					</div>
				</div>
				{/* <!-- /MOBILE DROPDOWN MENU --> */}
			</div>
		</>
	)
}
