import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { Arrow_r } from '../public/svg/icon'
import Link from 'next/link'



export default function Portfolio() {
	return (
		<>
			<Title title='Portfolio' />
			<Layout>
				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Projects</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Projects</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/*  /Page Title  */}


				{/* Portfolio */}
				<div className="industify_fn_portfolio_page">

					{/* PORTFOLIO LIST */}
					<div className="portfolio_list">
						<div className="container">
							<div className="filter">
								<Link href="#"><a>All Projects</a></Link>
								<span className="spinner"></span>
								<ul className="fn_filter">
									<li><Link href="#"><a className="active" data-filter="*">All Projects</a></Link></li>
									<li><Link href="#"><a data-filter=".aerospace">Aerospace</a></Link></li>
									<li><Link href="#"><a data-filter=".car_industry">Car Industry</a></Link></li>
									<li><Link href="#"><a data-filter=".construction">Construction</a></Link></li>
									<li><Link href="#"><a data-filter=".gas_and_oil">Gas and Oil</a></Link></li>
									<li><Link href="#"><a data-filter=".machinery">Machinery</a></Link></li>
								</ul>
							</div>
							<div className="list_in">
								<ul className="industify_fn_portfolio_list">

									<li className="gas_and_oil">
										<div className="item">
											<div className="item_in">
												<Link href="/portfolio-single-1"><a></a></Link>
												<div className="img_holder">
													<img src="img/thumb/560-375.jpg" alt="" />
													<div className="img_abs" style={{ "backgroundImage": "url(img/portfolio/1.jpg)" }}></div>
												</div>
												<div className="title_holder">
													<h3>CUBESAT</h3>
													<p>View More<Arrow_r className="fn__svg" /></p>
												</div>
											</div>
										</div>
									</li>

									<li className="machinery">
										<div className="item">
											<div className="item_in">
												<Link href="/portfolio-single-2"><a></a></Link>
												<div className="img_holder">
													<img src="img/thumb/560-375.jpg" alt="" />
													<div className="img_abs" style={{ "backgroundImage": "url(img/portfolio/2.jpg)" }}></div>
												</div>
												<div className="title_holder">
													<h3>UAV</h3>
													<p>View More<Arrow_r className="fn__svg" /></p>
												</div>
											</div>
										</div>
									</li>

								
								</ul>
							</div>
						</div>
					</div>
					{/* /PORTFOLIO LIST */}
				</div>
				{/* /Portfolio */}
			</Layout>

		</>
	)
}
