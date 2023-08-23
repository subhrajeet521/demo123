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
                            <h3>Wilhem Jezler</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/advisoryboard1"><a title="Blog">Advisory Board</a></Link></li>

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
                                        <img src="img/blog/1.jpg" alt="" />
                                    </div>

                                    <div className="desc_holder">
                                        <p>
                                            Mr. Wilhem Jezler a philanthropist and technology evangelist, Mr. Jezler hold over 45 years of global experience in multiple technologies and real estate domains. A self-resilient person comfortable engaging with different cultures and people from different backgrounds. </p>

                                        <p>
                                            Having a passion for investing in future technology, always motivated him to navigate new country and immerse himself into the new culture and adapting to new customs.


                                        </p>
                                        <p>
                                            Being a native of Switzerland, he studied his MBA in Year 1970 from Zürich. His passion for India and emerging technology is a strong driving force for Kristellar growth.


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
