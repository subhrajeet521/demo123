import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'
import PhotoGallery from '../components/Gallery/PhotoGallery'


export default function Portfolio1() {
	return (
		<>
			<Title title='Portfolio Single 1' />
			<Layout>
				<div className="industify_fn_portfolio_single">

					{/* Justified Images */}
					<div className="fn_cs_justified_wrap">
						<PhotoGallery />
					</div>
					{/* /Justified Images */}

					{/* Portfolio Content */}
					<div className="industify_fn_psingle_content">
						<div className="container">
							<div className="content_in">

								<div className="content_part">

									<h3>PROJECT ORiONß</h3>

									<p>
										Kristellar Aerospace was founded in 2021 with a vision for sustainable human and robotic presence in the solar system — an expanding sphere of space exploration activities in which increasing numbers of Indian live and work in space.




									</p>
									<p>
										As a space technology company, we are engaged in the process of fundamental and applied research, and advanced systems development for Low earth Orbit (LEO).

									</p>
									<p>
										Our mission is to explore translunar space, beyond the protection of the Earth’s geomagnetic field, conduct research on galactic cosmic radiation–potentially the most threatening element to humans exploring deep space–and develop mitigation strategies that may also lead to medical advancements on Earth.

									</p>
									<p>
										This vision begins with a small technological innovation to utilize Lower Earth’s orbital environment, the surface and resources of the Moon, and cis-lunar space to develop the critical technologies, operational capabilities necessary for a sustainable human presence on the Moon, Mars, and beyond.

									</p>
									<p>
										Our intangible desire to explore and challenge the boundaries space of what we know and where we have been propelling us to explore the space data for humanity.


									</p>
									<blockquote>
										<ul>
											<li>
												Ai-autonomous onboard system for 6u LEO satellites capable of inter-satellite data comms.

												The on-board module would autonomously schedule Inter-Satellite Link with the nearest available LEO/GEO satellite which includes all aspects of the data link, from antenna pointing to the most efficient uplink.

												High speed inter-satellite data links for LEO satellites.
											</li>
											<li>
												Antenna development with high gain and directivity, compatible for high-speed Inter-Satellite data links between LEO satellites.

												Ai base mission planner onboard system for LEO satellites.
											</li>
											<li>

												This AI on-board system execute missions autonomously based on inputs from ground control and collect critical RF data in an efficient manner for successful detection of various RF sources.

												Multi-payload LEO satellite (EO, IR, SAR, hyper spectral).

												An IoT based Sensor-Control loop working on LEO Cube-Sat backhaul is under development phase. The solution should be able to offer the Machine-to-Machine (M2M) communication with SatCom backhaul links working on LEO satellite.

											</li>
										</ul>


									</blockquote>
									<div className="share_box">
										<div className="industify_fn_share_icons">
											<label>Share:</label>
											<ul>
												<li><Link href="http://www.facebook.com/sharer.php?u=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-facebook"></i></a></Link></li>
												<li><Link href="https://twitter.com/share?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-twitter"></i></a></Link></li>
												<li><Link href="https://plus.google.com/share?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-gplus"></i></a></Link></li>
												<li><Link href="http://pinterest.com/pin/create/button/?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html&amp;"><a target="_blank" rel="noreferrer"><i className="xcon-pinterest"></i></a></Link></li>
												<li><Link href="https://www.vk.com/sharer.php?url=https://frenify.net/envato/frenify/html/industify/1/portfolio-single-1.html"><a target="_blank" rel="noreferrer"><i className="xcon-vkontakte"></i></a></Link></li>
											</ul>
										</div>
									</div>

								</div>

								<div className="helpful_part">

									<div className="hp_inner">
										<ul>
											<li>
												<p>Bus Mass</p>
												<span>5-6 kg (configuration dependent)​</span>
											</li>
											<li>
												<p>Available Payload Mass</p>
												<span>10-11 kg (configuration dependent)​</span>
											</li>
											<li>
												<p>Available payload volume</p>
												<span>97 x 197 x 322 mm3​</span>
											</li>
											<li>
												<p>Average 	Payload Power Available</p>
												<span>13-40 W (configuration dependent)​</span>
											</li>
											<li>
												<p>Available Power Buses </p>
												<span>3.3 V, 5 V, customizable 6-12 V and Battery raw</span>
											</li>
											<li>
												<p>Telemetry Data Rate </p>
												<span>19.2 kpbs</span>
											</li>
											<li>
												<p>Payload Data Rate </p>
												<span>upto 125 Mbps</span>
											</li>
										</ul>
									</div>
								</div>


							</div>
						</div>
					</div>
					{/* /Portfolio Content */}

				</div>

			</Layout>

		</>
	)
}
