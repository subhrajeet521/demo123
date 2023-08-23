import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle2() {
	return (
		<>
			<Title title='Service Single 2' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Mission Control Software for UCAV</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Service Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Mission Control Software for UCAV</span></li>
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

								{/* Single Service */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/2.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>
											Kristellar offers secured, end-to-end solutions for the drone and robotics industries. We support a diverse range of applications and operations in the most challenging and inaccessible urban and rural environments.
										</p>
										<p>The know security parameters are not applicable  for  UAVs missions since these are involved with  – decentralized control, wireless operation across remote vicinities, GNSS dependency, masses operation independently, physical vulnerability and the absence of cloud security – all contribute to their cyber exposure.

										</p>
										<p>
											Kristellar iRiGEL ECI module is an AI-based 360° software cybersecurity system for drones, robotics, and autonomous platforms consists of Encryption, Crypto Key and  Immunity, (ECI) as the first-of-its-kind multi-faceted and multi-tiers suite that autonomously protects the platform, safeguards communication channels and encrypts collected and transmitted data. The ECI module can defend against more than 9 different types of cyber breaches and malicious attacks, including jamming, man in the middle, CPU, Servers attacks, and more in real-time without requiring intervention by an operator.
										</p>
										<p>
											During the operation the ECI module can be upgraded at any stage to improve the protection level by implementing Professional or Premium tiers by software license modules only. Prevention is better than cure, and it is much more cost-effective in the long run. Unlike many other solutions, the iRiGEL ECI module is available in different tiers, making it as hard as possible for attackers to impact your operation.

										</p>
										<p>
											iRiGEL ECI module is one of the most preferred industrial and military-grade cybersecure solutions for avionic, maritime, and ground forces unmanned UAV and robotics platforms operating in the most stringent environments. With a decade-long digital security experience Kristellar brings you the best and most dependable solutions for your needs.
										</p>

									</div>

									{/* Check List Shortcode */}
									{/* Check List Shortcode */}

									{/* Call to Action Shortcode (with corner) */}
									<div className="fn_cs_call_to_action corner">
										<div className="container">
											<div className="cta_holder">
												<div className="title_holder">
													<h3>Kristellar Aerospace</h3>
													<p>We build your dream project. Contact us for detailed information.</p>
												</div>
												<div className="link_holder">
													<Link href="/contact"><a>Our Responsibility</a></Link>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner) */}

									{/* Get Random Services */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
									<div data-html="includes/random-service.html" data-index="2" data-count="2"></div>
									{/* /Get Random Services */}

								</div>
								{/* /Single Service */}


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
											<li><Link href="/service-single-2"><a>Mission Control Software for UCAV</a></Link></li>
											<li><Link href="/service-single-4"><a>Agastya : A DNN Robot</a></Link></li>
											<li><Link href="/service-single-3"><a>Software-Defined Radios for CubeSat Applications</a></Link></li></ul>
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
