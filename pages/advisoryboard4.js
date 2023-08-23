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
                            <h3>Brigadier (Retd.) Dr. L C Patnaik</h3>
                            <div className="industify_fn_breadcrumbs">
                                <ul>
                                    <li><Link href="/"><a title="Home">Home</a></Link></li>
                                    <li className="separator"><span></span></li>
                                    <li><Link href="/advisoryboard4"><a title="Blog">Advisory Board</a></Link></li>

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
                                        <img src="img/blog/4.jpg" alt="" />
                                    </div>

                                    <div className="desc_holder">
                                        <p>
                                        Brigadier (Retd.) Dr. L C Patnaik, former Chairman, Odisha Public Service Commission is a decorated Infantry Officer with services in Indian Army, Ministries of Defence, External Affairs and Home and Public Service Commission (Constitutional Authority) . </p>

                                        <p>
                                        Dr. Patnaik holds extensive frontline experience in multi-dimensional warfare,   international conflict management, military diplomacy, cyber security and  development of battlefield management systems. 
                                        </p>
                                        <p>
                                        During his tenure he holds key operational commands at the Line of Control of Siachen glacier in J&K and Indo- China border. He also served government of India as Defence Advisor at the Embassy of India, Tehran (Iran) , Member of the Indian Military Training Team in Bhutan and United Nation Peace Keeping Force . His experience is the key driving force for the growth of Kristellar Aerospace .
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
