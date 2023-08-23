import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import Link from 'next/link'


export default function BlogSingle1() {
    return (
        <>
            <Layout>
                {/* Page Title */}
                <Title title='Blog Single 1' />
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder">
                            <h3>Dillip Dutta</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/advisoryboard3"><a title="Blog">Advisory Board</a></Link></li>

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

                                {/* Single Blog */}
                                <div className="industify_fn_blog_single">

                                    <div className="img_holder">
                                        <img src="img/blog/3.jpg" alt="" />
                                    </div>

                                    <div className="desc_holder">
                                        <p>
                                            Mr Dilip Dutta, Strategic growth driver, synergist, mentor, and quality visionary credited with epic growth and financial performance leading to successful company sale and integration. A leadership coach noted for establishing team synergies, enabling unsurpassed customer value, low-cost footprint, tight production benchmarks, lean quality products / processes.</p>
                                        <p>
                                            Mr. Dutta is an accomplished executive with domestic and International experience in operations for both start-up and growth organizations, P&L oversight, product manufacturing, marketing, and advantageous sourcing Technology partnership.

                                        </p>
                                        <p>
                                            His track record of increasing sales and growing bottom line while spearheading operational improvements to drive productivity and reduced costs and an excellent driving force for Kristellar growth.



                                        </p>

                                    </div>



                                </div>
                                {/* /Single Blog */}


                            </div>
                            {/* /Main Sidebar: Left */}


                            {/* Main Sidebar: Right */}
                            <div className="industify_fn_rightsidebar">

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
