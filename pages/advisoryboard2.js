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
                            <h3>Kurt Blöchlinger</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/advisoryboard2"><a title="Blog">Advisory Board</a></Link></li>

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
                                        <img src="img/blog/2.jpg" alt="" />
                                    </div>

                                    <div className="desc_holder">
                                        <p>
                                            Mr. Kurt Blöchlinger, holds over 30 years of diverse experience from law enforcement to defence for Switzerland government. During his tenure with government, he holds many key positions such as Member of the Executive Board of the Federal Office of Police and also responsibility such as implementing bilateral and multilateral international police agreements (INTERPOL, EUROPOL, Schengen Dublin).


                                        </p>
                                        <p>
                                            His passion for emerging technology also contributes his advisory role extending his contribution in key committees like KKPKS – Conference of Cantonal Police Commanders of Switzerland; VSKC – Association of Swiss Criminal Police Chiefs; SKK – Swiss Criminal Commission and EPCTF – European Police Chiefs Task Force etc.

                                        </p>
                                        <p> His passion for India and emerging technologies is a strong driving force for Kristellar cyberspace .

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
