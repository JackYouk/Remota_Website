/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";


function Service1() {

    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Services</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">IT Asset Management Services and Solutions, at every scale.</p>
                                    <div className="mt-40">
                                        <Link href="/contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Get A Quote</a></Link>

                                        <Link href="/page-pricing-1" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Video</a></Link>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900"><span className="count">50</span>+</span></h4>
                                                    <p className="text-body-text color-gray-500">Countries</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3 color-green-900"><span className="count">Thousands</span></span></h4>
                                                        <p className="text-body-text color-gray-500">Of projects completed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900"><span className="count">30</span>+</span></h4>
                                                    <p className="text-body-text color-gray-500">Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3 color-green-900"><span className="count">100</span>k+</span></h4>
                                                        <p className="text-body-text color-gray-500">Assets Managed</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-3 shape-2"><img src="/assets/imgs/page/homepage6/banner.png" alt="Agon" /></div>
                                        {/* <img style={{width: '3000px'}} src="https://imgs.search.brave.com/5T64YxuwxR60IspaeBZLj3KF2jQlVoEhJLWvHFezxYU/rs:fit:400:132:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L1piWE5x/OGJwOXVwV1p4eG1Q/d25oMzNfeXBYWT0v/NDAweDAvZmlsdGVy/czpxdWFsaXR5KDkw/KS9hcnRpY2xlLW5l/dy8yMDEzLzA5L21h/Y2Jvb2tfYWlyX3Ry/aW9fdHJhbnNwYXJl/bnQucG5nP2xvc3N5" alt="Agon" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">Services</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">Powerful solutions to any ITAM operation<br className="d-lg-block d-none" /></h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Full Lifecycle Management</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Full life-cycle asset management, from when the asset is new until it is time to be decomissioned.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Onboarding & <br/> Offboarding</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Onboarding and Offboarding including pre-provisioned assets upon request.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-team.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Domestic & Global Logistics</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We reach end users located anywhere in the world, with an industry leading success rate.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Refurbishment & Reimaging</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Our techforce team are experts in secure software reimaging and refurbishment of damaged assets</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Peripherals & Accessories</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Our service supports peripherals and accessories, such as chargers, yubikeys, merch, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Support <br/> </h4>
                                        <p className="text-body-text color-gray-500 mt-15">Our customer success team provides both end-user support and expertise on logistics operations.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 mb-30"><span className="tag-1 bg-6 color-green-900">Solutions</span>
                                <h3 className="text-heading-1 mt-30">Flexible solutions tailored to your business</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30"></p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Same Day and Overnight Fulfillment</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Request fulfillment can happen at any speed</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Pre-provisioning</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Our techforce team will pre-install applications and tools for specific employees or roles</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Hold/Freeze Assets</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">We will securely store assets with company data for a desired hold period of any length</p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Onboard Kits</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">Onboard your employees with laptops, peripherals, swag, etc. all at once!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <div className="inner-image"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built.png" alt="Agon" />
                                    <div className="block-image-bottom"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box pt-140 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1">FAQs</h3>
                                <p className="text-body-text color-gray-600 mt-30">Some simple answers to questions we are <br/> commonly asked about our services.</p>
                                <div className="mt-60">
                                    <Link href="/contact" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Still have questions? Contact Us</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </section>
                
            </Layout>

        </>
    )
}

export default Service1;