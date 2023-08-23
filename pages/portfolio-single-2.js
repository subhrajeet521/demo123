import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'
import PhotoGallery from '../components/Gallery/PhotoGallery'



export default function Portfolio2() {
	return (
		<>
			<Title title='Portfolio Single 2' />
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

									<h3>RiGEL UCAV On SWaP Platform​</h3>

									<p>
										The nation moves into a new era of defence through unparalleled intelligence, surveillance, and reconnaissance (ISR) capabilities.

										Mission success requires continued dominance of the electromagnetic spectrum, which has always been an imperative for military operations .


									</p>
									<p>
										It requires the ability to synthesize vast amounts of data from modern sensors that overwhelm even the most advanced traditional processing techniques .

										We envisaged to augment ISR sensing and control systems with machine and deep learning to synthesize data faster and more accurately, so they can make more informed command and control decisions.


									</p>
									<blockquote>One area of common concern for defence airborne platforms is maximizing payload efficiency.

										The focused-on size, weight, and power—SWaP.

										Size, weight, and power (SWaP) refer to arguably the most important specification in our new product, project, or platform definition.

										SWaP seems to be the key driving factor, providing difficult trade-offs over system performance enhancements and multifunction architectures.

										The SWaP equation and enable technological leapfrog advancements will redefine the foreseeable future.

										SWaP will lead to packing more performance into shrinking design footprints to meet the demand for more sensor data in real time.​</blockquote>

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
												<p>Maximum Altitude</p>
												<span>18000 ft AMSL</span>
											</li>
											<li>
												<p>Maximum Endurance</p>
												<span>16 HOURS</span>
											</li>
											<li>
												<p>Maximum Range</p>
												<span>2000 km</span>
											</li>
											<li>
												<p>Maximum Climb Rate</p>
												<span>3 ms^-1</span>
											</li>
											<li>
												<p>Maximum Descent</p>
												<span>6 ms-1</span>
											</li>
											<li>
												<p>Maximum Tilt Angle</p>
												<span>30 degree</span>
											</li>
											<li>
												<p>Cornering Speed Limits</p>
												<span>50 kts</span>
											</li>
											<li>
												<p>Lowest Achieavable Speed</p>
												<span>50 kts</span>
											</li>
											<li>
												<p>Maximum Cruising Speed</p>
												<span>65 kts</span>
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
