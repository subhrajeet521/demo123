import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'



export default function Blog() {
	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Blog' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Blog and Articles</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Blog</span></li>
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


								<ul className="industify_fn_postlist">

									<li>
										<div className="post has-post-thumbnail">
											<div className="time"><span></span><h3>28</h3><h5>Aug</h5><h5>2021</h5></div>
											<div className="img_holder">
												<Link href="blog-single-1"><a><img src="img/blog/8.jpg" alt="" /></a></Link>
												<span className="shape1"></span><span className="shape2"></span>
											</div>
											<div className="content_holder">
												<div className="info_holder">
												
												</div>
												<div className="title">
													<h3><Link href="blog-single-1"><a>The Diring Need Of Protecting the Industry against Cyberthreats</a></Link></h3>
												</div>
												<div className="excerpt_holder">
													<p>The increased connectivity, industrial facilities are now a favourite target for cybercriminals. Kristellar Aerospace provides a variety of tried-and-true solutions and services that combine top-notch cybersecurity expertise with in-depth knowledge of the aerospace, defence, IT, and space sectors to address this threat.
</p>
												</div>
												<div className="read_holder">
													<p><Link href="blog-single-1"><a>Read More</a></Link></p>
												</div>
											</div>
										</div>
									</li>
									</ul>

							</div>
							{/* /Main Sidebar: Left */}

							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">

								{/* Get Sidebar */}
								<Sidebar/>
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
