import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle3() {
	return (
		<>
			<Title title='Service Single 4' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Agastya : A DNN Robot</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Service Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Agastya : A DNN Robot</span></li>
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
										<img src="img/service/single/6.jpg" alt="" />
									</div>

									<div className="desc_holder">
										<p>
											Agastya will revolutionize space security at a scale greater than the self-driving cars.


										</p>
										<p>
											Developed on over decade research on DNN, Agastya is an AI Robot can enable swarms of drones and aircraft to operate autonomously without GPS, communications, or a pilot.

										</p>
										<p>
											Agastya AI module uses six cameras and a computer vision system to detect nearby aircraft in a manner like that of a human pilot. Its automatic speech recognition function uses natural language processing techniques to both understand incoming radio messages and communicate with pilots and air traffic controllers using speech.

											The Computer Vision can divide an image into multiple parts or regions called pixel-level classification. In other words, the scene is parted into different classes such as “building”, “road”, “tree”.

										</p>
										<p>

											While AGASTYA engaged as pilot it analyses, reads and reacts to the mission environment, it can perform task in non-GPS environment. It has 8 integrated AI modules to executes missions autonomously.


										</p>
										<p>
											The research and development of AGASTYA is on world most energy-efficient autonomous machine hardware “NVIDIA® Jetson Orin™” series. The modules give you up to 275 trillion operations per second (TOPS) and 8X the performance of the last generation for multiple concurrent AI inference pipelines, plus high-speed interface support for multiple sensors.

										</p>
										<p>
											
										With real-time situational awareness AGASTYA increases the Improve decision making to increase mission success with seamless human-machine interactions.It enable teams with organic Intelligence, Surveillance, and Reconnaissance (ISR) by equipping holistic situational awareness at all the level of mission possible.

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
													<a href="contact.html">Our Responsibility</a>
												</div>
											</div>
										</div>
									</div>
									{/* /Call to Action Shortcode (with corner) */}

									{/* Get Random Services */}
									{/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
									<div data-html="includes/random-service.html" data-index="4" data-count="2"></div>
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
											<li><Link href="/service-single-3"><a>Software-Defined Radios for CubeSat Applications</a></Link></li>
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
