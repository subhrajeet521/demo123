import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'


export default function Services() {
	return (
		<>
			<Title title='Services' />
			<Layout>

				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Our Services</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Our Services</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}


				{/* Sidebar Page */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">
								<ul className="industify_fn_service_list">
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.jpg)" }}></div>
													<Link href="/service-single-9"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-9"><a>Mission Control Software for Cubesat</a></Link></h3>
													<p>	Mission Control Software (MCS) provides an easy-to-use monitoring and control access to any space mission.
											Harnessing the power of AI the application supervise automation and unattended operations, it significantly
											improves efficiency and scalability of the mission.</p>	</div>
												<div className="read_more">
													<Link href="/service-single-9"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/1.jpg)" }}></div>
													<Link href="/service-single-8"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-8"><a>Mission Control Software for UCAV</a></Link></h3>
													<p>
													Kristellar offers secured, end-to-end solutions for the drone and robotics industries. We support a diverse range of applications and operations in the most challenging and inaccessible urban and rural environments.
													</p>
													
												</div>
												<div className="read_more">
													<Link href="/service-single-2"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/2.jpg)" }}></div>
													<Link href="/service-single-7"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Software-Defined Radios for CubeSat Applications</a></Link></h3>
													<p>
													Sensing and Communication Applications using powerful and advanced FPGA Technology CubeSats have revolutionized the way scientific community perceive space. The majority of CubeSat communication is greatly limited by the AX.25 standards, the small communication window, the available transmission power, and the available bandwidth at VHF/UHF band.
													</p>
													</div>
												<div className="read_more">
													<Link href="/service-single-3"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/6.jpg)" }}></div>
													<Link href="/service-single-6"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-6"><a>Agastya: A DNN robot</a></Link></h3>
													<p>
													Agastya will revolutionize space security at a scale greater than the self-driving cars.

Developed on over decade research on DNN, Agastya is an AI Robot can enable swarms of drones and aircraft to operate autonomously without GPS, communications, or a pilot.
													</p>
													</div>
												<div className="read_more">
													<Link href="/service-single-4"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									
								
								</ul>

								<div className="clearfix"></div>

								


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">


								{/* Service List */}
								<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
											<li><Link href="/service-single-9"><a>Mission Control Software for CubeSat</a></Link></li>
											<li><Link href="/service-single-8"><a>Mission Control Software for UCAV</a></Link></li>
											<li><Link href="/service-single-7"><a>CubeSat Design and Development</a></Link></li>
											<li><Link href="/service-single-6"><a>UCAV Design and Development</a></Link></li>
											
										</ul>
									</div>
								</div>
								{/* /Service List */}

								{/* Get Sidebar */}
								<Sidebar />
								{/* /Get Sidebar */}


							</div>
							{/* Main Sidebar: Right */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page */}
			</Layout>

		</>
	)
}
