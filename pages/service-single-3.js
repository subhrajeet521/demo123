import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Check } from '../public/svg/icon'
import Link from 'next/link'



export default function ServiceSingle3() {
	return (
		<>
			<Title title='Service Single 3' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Software-Defined Radios for CubeSat Applications

							</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><Link href="/services"><a title="Services">Service Posts</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Software-Defined Radios for CubeSat Applications

									</span></li>
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
										<img src="img/service/single/5.png" alt="" />
									</div>

									<div className="desc_holder">
										<p>
											Sensing and Communication Applications using powerful and advanced FPGA Technology

											CubeSats have revolutionized the way scientific community perceive space.

											The majority of CubeSat communication is greatly limited by the AX.25 standards, the small communication window, the available transmission power, and the available bandwidth at VHF/UHF band.

										</p>
										<p>
											The iBLINK SDR for CubeSat will  address all the above limitations. The radio operates at S-band, employs quadrature amplitude modulation with a maximum data rate of 60 Mb/s consuming 2.6 Watts in transmit mode and 0.4 Watts in receive mode. The digital signal processing functions and the mode control of the radio are orchestrated by a field programmable gate array system-on-chip. The analog radio frequency domain is accommodated by a 4-layer printed circuit board with dimensions of 92 mm × 88 mm. The SDR is an adaptive, on-flight reconfigurable communication platform that will revolutionize the current communication capabilities of the CubeSats and expand nanosatellites mission perspectives.
										</p>
										<p>
											The iBLINK SDR platform is utilized for a high-speed S- or K band in a highly miniaturized radio system for long distance communication and inter-satellite links.
											The FPGA module can be used for other advanced processing requirements such as image processing etc. utilizing the high capacity of the system. The built-in software is available for in-orbit programming or applying scripting tools limiting size of program uploads.

										</p>
									</div>

									{/* Check List Shortcode */}
									<div className="fn_cs_check_list">
										<h3>Service Features</h3>
										<div className="list">
											<ul>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Innovative ARM® + FPGA architecture for differentiation, analytics & control</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Extensive OS, middleware, stacks, accelerators, and IP ecosystem</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Multiple levels of hardware and software security</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Integration delivering the de facto programmable platform</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>System level performance through optimized architecture </p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Most flexible & scalable platform for maximum reuse and best TTM</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>Industry-leading design tools, C/C++, and Open CL design abstractions. Large portfolio of SW & HW design tools, SOMs, design kits, and reference designs
														</p>
													</div>
												</li>
												<li>
													<div className="item">
														<Check className="fn__svg" />
														<p>
															Dual-core ARM Cortex-A9 processors integrated with 28nm Artix 7 or Kintex™ 7 based programmable logic .
															With up to 6.6M logic cells and offered with transceivers ranging from 6.25Gb/s to 12.5Gb/s

														</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
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
									<div data-html="includes/random-service.html" data-index="3" data-count="2"></div>
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
