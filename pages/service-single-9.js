import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle3() {
	return (
		<>
			<Title title='Service Single 9' />
			<Layout>

				{/* Page Title  */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Mission Control Software for CubeSat</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Service Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"></span>Mission Control Software for CubeSat</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title  */}


				{/* Sidebar Page  */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left  */}
							<div className="industify_fn_leftsidebar">

								{/* Single Service  */}
								<div className="industify_fn_service_single">

									<div className="img_holder">
										<img src="img/service/single/9.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>
											Mission Control Software (MCS) provides an easy-to-use monitoring and control access to any space mission.
											Harnessing the power of AI the application supervise automation and unattended operations, it significantly
											improves efficiency and scalability of the mission.
										</p>
										<p>CALISTO is a powerful cloud-based AI mission control software suite designed to control a single satellite or a complete
											constellation through a user-friendly, fully customizable control web interface.</p>
										<p>CALISTO provides telemetry, trajectory updates, telecommand, and downstream through Web base user interface controls.
											A 3D orbit visualization tool provides satellite tracking based on two-line orbital elements (TLE) propagation.
											Telecommands can be generated, time-tagged, and uploaded automated telecommand stacks. Automatic warnings provide notification
											of predefined anomalies through emails and messaging. The system logs all commands, enabling historical analysis and creation
											of procedures to automate common tasks.</p>
										<p>The interface can be adapted to the specific needs of each satellite operator, providing a versatile and modular suite of tools
											to support even the most complex and demanding missions. </p>
										<p>CALISTO is accessible from any location through a variety of computer platforms.
											The modular software architecture of CALISTO can be tailored around the needs of the most common cube sat mission architectures.
											It supports the CubeSat space protocol (CSP), which can be customized further. </p>
										<p>	A high-performance cloud infrastructure,
											with extremely high reliability and availability, features AES256 encryption with 2FA token user authentication to ensure
											a state-of-the art cyber security protection. A worldwide network of ground stations, in partnership with Leaf Space and
											Amazon AWS Ground Station, ensures global coverage tailored to the needs and budget of any space mission.</p>
									</div>

									{/* Check List Shortcode  */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Easy-to-use monitoring and control access to any space mission</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Powerful cloud-based AI mission control software</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Telecommands can be generated, time-tagged, and uploaded</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>A high-performance cloud infrastructure</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Features AES256 encryption with 2FA token user authentication</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Non-Destructive Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Mechanical Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Aerospace Polymers and Plastics Testing</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Aerospace Composites Testing</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
									{/* Check List Shortcode  */}

									{/* Call to Action Shortcode (with corner)  */}
									
									{/* /Call to Action Shortcode (with corner)  */}

									{/* Get Random Services  */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
									<div data-html="includes/random-service.html" data-index="9" data-count="2"></div>
									{/* /Get Random Services  */}

								</div>
								{/* /Single Service  */}


							</div>
							{/* /Main Sidebar: Left  */}


							{/* Main Sidebar: Right  */}
							<div className="industify_fn_rightsidebar">


								{/* Service List  */}
								<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
										<li><Link href="/service-single-9"><a>Mission Control Software for CubeSat</a></Link></li>
											<li><Link href="/service-single-2"><a>Mission Control Software for UCAV</a></Link></li>
											<li><Link href="/service-single-4"><a>Agastya : A DNN Robot</a></Link></li>
											<li><Link href="/service-single-3"><a>Software-Defined Radios for CubeSat Applications</a></Link></li>						</ul>
									</div>
								</div>
								{/* /Service List  */}

								{/* Get Sidebar  */}
								<Sidebar />
								{/* /Get Sidebar  */}


							</div>
							{/* Main Sidebar: Right  */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page  */}
			</Layout>

		</>
	)
}
