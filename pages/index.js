import React from 'react'
import Services from '../components/Home/HomeServices'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'

const right = "/img/about/right.jpg"
const rightImage = "/img/service/right-image.jpg"
const testimonial = "/img/testimonial/bg.jpg"
const portfolio1 = "/img/portfolio/1.jpg"
const portfolio2 = "/img/portfolio/2.jpg"

const map = "/img/blog/map.png"
const blog1 = "/img/blog/1.jpg"
const blog2 = "/img/blog/2.jpg"
const blog3 = "/img/blog/3.jpg"
const blog4 = "/img/blog/4.jpg"
const blog5 = "/img/blog/5.jpg"
const blog6 = "/img/blog/6.jpg"






export default function Index() {
	return (
		<>
			<Title title='Home Alpha' />
			<Layout className={"transdark"}>
				<Title title=' Home' />

				<Slider />
				{/* <!-- Principles Modern --> */}
				<div className="fn_cs_principles_modern">
					<div className="container">
						<div className="inner">
							<div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
							<ul className="fn_cs_miniboxes">
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/"><a></a></Link>
											<h3>Vision</h3>
											<p>Our mission to be pioneer in microsatellite technology and innovation towards the realization of new space society.</p>
											{/* <span className="icon">
												<Arrow_r className="fn__svg" />
											</span> */}
										</div>
										<div className="number_holder">01</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/"><a></a></Link>
											<h3>Mission</h3>
											<p>Our vision is to deliver innovative solutions for space and deep-space system to keep people safe by advance scientific discovery.</p>
											{/* <span className="icon">
												<Arrow_r className="fn__svg" />
											</span> */}
										</div>
										<div className="number_holder">02</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/"><a></a></Link>
											<h3>Quality Work</h3>
											<p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
											{/* <span className="icon">
												<Arrow_r className="fn__svg" />
											</span> */}
										</div>
										<div className="number_holder">03</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- /Principles Modern --> */}


				{/* <!-- About Section --> */}
				<div className="about_section">

					{/* <!-- About Shortcode --> */}
					<div className="fn_cs_about">
						<div className="container">
							<div className="a_inner">
								<div className="leftpart">
									<div className="title_holder">
										<h3 className="title">About Our Industry</h3>
										<p>
											At Kristellar, we are at the forefront of innovation, combining the realms of aerospace and cyberspace to redefine the boundaries of technological advancement. </p>


										<p>Our mission is to push the limits of human potential, enabling exploration, connectivity, and security in these dynamic domains. Join us as we embark on a journey of discovery and progress. Together, we will shape the future of aerospace and cyberspace, advancing humanity's reach and securing our digital frontier.

										</p>
									</div>
									
								</div>
								<div className="rightpart">
									{/* <div className="r_inner" id="scene">
										<div className="layer border" data-depth="0.3">
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5">
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9">
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div> */}
									<div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
										<div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" data-bg-img="img/about/right.jpg" style={{ "backgroundImage": "url(img/about/right.jpg)" }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About Shortcode --> */}

				</div >
				{/* <!-- /About Section --> */}


				< Services />



				{/* <!-- Service Section --> */}

				{/* <!-- /Service Section --> */}


				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>We will Make Your Dream Come True</h3>
								<p>We are focused on sustainable business that delivers the best possible project results.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Our Responsibility</a></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Call to Action --> */}
			
				{/* <!-- Testimonial Section --> */}
				<div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

					<div className="overlay"></div>

					{/* <!-- Single Testimonial Shortcode --> */}
					<div className="fn_cs_single_testimonial">
						<div className="container">
							<div className="inner">
								<Quotes className="fn__svg" />
								<div className="content_holder">
									<p>
										Kristellar Aerospace is a leading aerospace company renowned for its excellence in the industry. 
										With a stellar track record, we specialize in satellite design, integration, and mission support services.
										 Our team of highly skilled professionals combines expertise with innovation to deliver cutting-edge solutions.
										  We are committed to providing exceptional customer service, ensuring prompt and reliable communication
										   at every stage of the project. 
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Single Testimonial Shortcode --> */}

				</div>
				{/* <!-- /Testimonial Section --> */}
				


				{/* <!-- Project Sticky Full --> */}
				<div className="fn_cs_project_sticky_full">
					<div className="inner">
						<div className="left_part">
							<div className="fn_cs_sticky_section">
								<h3>Our latest projects.</h3>
								<p>At Kristellar Aerospace, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
								<p>Kristellar Aerospace is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
								<Link href="/portfolio"><a>View All Projects</a></Link>
							</div>
						</div>

						<div className="right_part">
							<div className="fn_cs_sticky_section">
								<ul>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio1})` }}></div>
												<Link href="/portfolio-single-1"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-1"><a>PROJECT ORiONß</a></Link></h3>
												<span className="desc">This vision begins with a small technological innovation to utilize Lower Earth’s orbital environment, the surface and resources of the Moon....</span>
												<p>
													<Link href="/portfolio-single-1"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder">
												<img src="img/thumb/700-500.jpg" alt="" />
												<div className="abs_img" style={{ "backgroundImage": `url(${portfolio2})` }}></div>
												<Link href="/portfolio-single-2"><a></a></Link>
											</div>
											<div className="title_holder">
												<h3><Link href="/portfolio-single-2"><a>RiGEL UCAV On SWaP Platform​</a></Link></h3>
												<span className="desc">The nation moves into a new era of defence through unparalleled intelligence, surveillance, and reconnaissance (ISR) capabilities...</span>
												<p>
													<Link href="/portfolio-single-2"><a>
														<span className="text">More Details</span>
														<span className="arrow">
															<Arrow_r className="fn__svg" />
														</span>
													</a></Link>
												</p>
											</div>
										</div>
									</li>

								</ul>
							</div>
						</div>

					</div>
				</div>
				{/* <!-- /Project Sticky Full --> */}


				{/* <!-- Blog Section --> */}
				<div className="blog_section">

					<div className="overlay" style={{ "backgroundImage": `url(${map})` }}></div>

					{/* <!-- Main Title --> */}
					<div className="fn_cs_main_title">
						<div className="container">
							<div className="title_holder">
								<h3>Our Advisory Board</h3>
							</div>
						</div>
					</div>
					{/* <!-- /Main Title --> */}

					{/* <!-- Triple Blog Modern Shortcode --> */}
					<div className="fn_cs_triple_blog_modern fn_alpha">
						<div className="container">
							<div className="inner">

								<ul>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog1})` }}>
												{/* <div className="time">
													<span></span>
													<h3>28</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/advisoryboard1"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												
												<h3><Link href="/advisoryboard1"><a>Wilhem Jezler</a></Link></h3>
												<p className="t_footer"><Link href="/advisoryboard1"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog2})` }}>
												{/* <div className="time">
													<span></span>
													<h3>27</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/advisoryboard2"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												
												<h3><Link href="/advisoryboard2"><a>Kurt Blöchlinger</a></Link></h3>
												<p className="t_footer"><Link href="/advisoryboard2"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog3})` }}>
												{/* <div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/advisoryboard3"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
											
												<h3><Link href="/advisoryboard3"><a>Dilip Dutta</a></Link></h3>
												<p className="t_footer"><Link href="/advisoryboard3"><a>Read More</a></Link></p>
											</div>
										</div>
									</li>

									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog4})` }}>
												{/* <div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/advisoryboard4"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												
												<h3><Link href="/advisoryboard4"><a>Brigadier (Retd.) Dr. L C Patnaik</a></Link></h3>
												<p className="t_footer"><Link href="/advisoryboard4"><a>Read More</a></Link></p>
											</div>
										</div>

									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog5})` }}>
												{/* <div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												
												<h3><Link href="/blog-single-3"><a>Poonam Jezler</a></Link></h3>
												<p className="t_footer"><Link href="/"><a>Read More</a></Link></p>
											</div>
										</div>

									</li>
									<li>
										<div className="item">
											<div className="img_holder" style={{ "backgroundImage": `url(${blog6})` }}>
												{/* <div className="time">
													<span></span>
													<h3>26</h3>
													<h5>Aug</h5>
													<h5>2018</h5>
												</div> */}
												<Link href="/"><a></a></Link>
												<img src="img/thumb/370-250.jpg" alt="" />
											</div>
											<div className="title_holder">
												
												<h3><Link href="/"><a>Dipika Jena</a></Link></h3>
												<p className="t_footer"><Link href="/"><a>Read More</a></Link></p>
											</div>
										</div>

									</li>

								</ul>

							</div>
						</div>
					</div>
					{/* <!-- /Triple Blog Modern Shortcode --> */}

				</div>
				{/* <!-- /Blog Section --> */}

			</Layout >

		</>
	)
}
