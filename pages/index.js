
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import Intro2 from "../components/slider/Intro2";

function Index6() {
    const [contactForm, setContactForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });
    const handleContactFormChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setContactForm({
            ...contactForm,
            [key]: value,
        });
    }
    const submitContactForm = (event) => {
        event.preventDefault();
        // email.js submit here
    }
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };
    return (
        <>
            <Layout>
                <div className="section-box">
                    <div className="banner-hero banner-homepage6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mt-50 pb-120"><span className="tag-1 bg-green-900">IT Asset Management</span>
                                    <h1 className="text-display-2 mt-20">Fast. Flexible. Global.</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-30 pr-40">Seasoned IT professionals specializing in full life-cycle asset management and logistics.<br className="d-lg-block d-none" /></p>
                                    <div className="mt-40">
                                        <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Services</a></Link>

                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Intro Video</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        {/* <div className="block-2 shape-1"><img src="https://imgs.search.brave.com/pOkPrCNZxfhQ47j_rtNtiQoiQmEoxCYafHs-qoGcZZE/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAz/OTIvNTA0NS9wcm9k/dWN0cy9BcHBsZV9N/YWNCb29rX1Byb18x/My1pbmNoX0Nhc2Vf/QmxhY2tfMDAwNi5w/bmc_dj0xNjAwOTQw/Mzk0" alt="Macbook Pro Laptop" /></div> */}
                                        {/* <div className="block-1 shape-3"><img src="https://imgs.search.brave.com/5T64YxuwxR60IspaeBZLj3KF2jQlVoEhJLWvHFezxYU/rs:fit:400:132:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS90L1piWE5x/OGJwOXVwV1p4eG1Q/d25oMzNfeXBYWT0v/NDAweDAvZmlsdGVy/czpxdWFsaXR5KDkw/KS9hcnRpY2xlLW5l/dy8yMDEzLzA5L21h/Y2Jvb2tfYWlyX3Ry/aW9fdHJhbnNwYXJl/bnQucG5nP2xvc3N5" alt="Laptop Mailer" /></div> */}
                                        <img className="img-banner img-responsive shape-2" alt="Man with phone" src="assets/imgs/page/homepage6/sprintervanremota.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box box-slider-3 d-none d-lg-flex">
                    <div className="container">
                        <div className="block-slider-bottom-banner">
                            <Intro2/>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">20</span>yrs+</h3><span className="text-body-quote">IT Industry Experience</span>
                                        <p className="text-body-text">Our team has been managing the full life-cycle of IT assets for almost two decades</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">20</span>+</h3><span className="text-body-quote">Industry Leading Clients</span>
                                        <p className="text-body-text">We are the #1 most trusted asset management company in the Bay Area and Silicon Valley</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">100</span>k+</h3><span className="text-body-quote">Assets in Circulation</span>
                                        <p className="text-body-text">Our infrastructure allows us to operate at any scale and at any speed necessary</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70">
                                        <h3 className="text-display-3"><span className="count">50</span>+</h3><span className="text-body-quote">Countries</span>
                                        <p className="text-body-text">We operate on a global scale, and have partners all over the world to help us acheive global coverage</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pdl-md">
                                <h3 className="text-heading-1">Operating at a global scale.</h3>
                                <h3 className="text-heading-1 mt-3">Trusted by the biggest names in the technology industry.</h3>                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="section-box mt-70">
                    <div className="container">
                        <div className="box-bg-bottom">
                            <div className="box-video-homepage6">
                                <div className="box-image mt-30 mb-30">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={openModal}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/homepage6/img.png" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-acquis.svg" /></span>
                                            <h4 className="text-heading-4">1. Acquisition</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-active.svg" /></span>
                                            <h4 className="text-heading-4">2. Activation</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-retent.svg" /></span>
                                            <h4 className="text-heading-4">3. Retention</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-12 mb-30"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage6/img-1.png" alt="Agon" /></div>
                            <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-20">Solutions for tech asset logistics anywhere in the world</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">Employee onboarding and offboarding. Tech asset refurbishments and secure decomissioning. Office IT asset logistics.</p>
                                <div className="row mt-20">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Manage your company&apos;s global workforce with ease</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Full life-cycle operation with refurbishment and secure decom</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Onboarding and Offboarding at any scale</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Custom solutions for any itam project</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section-box box-gray-100 mt-120 mb-20">
                    <div className="container">
                        <div className="icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Need ITAM?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Trust the #1 experts in the industry.<br className="d-lg-block d-none" /></p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Northbay Networks</h4>
                                    <p className="text-body-text color-gray-600">4062 Watts St.<br />Emeryville, CA 94608</p>
                                    <a href="tel:+15109038999"><p className="text-body-text color-gray-600">(510) 903 8999</p></a>
                                    <a href="mailto:support@northbay-networks.com"><p className="text-body-text color-gray-600">support@northbay-networks.com</p></a>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value={contactForm.name} onChange={handleContactFormChange} name='name' placeholder="Name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value={contactForm.company} onChange={handleContactFormChange} name='company' placeholder="Company (optional)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value={contactForm.email} onChange={handleContactFormChange} name='email' placeholder="Email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value={contactForm.phone} onChange={handleContactFormChange} name='phone' placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" value={contactForm.message} onChange={handleContactFormChange} name='message' placeholder="Message"></textarea></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" onClick={submitContactForm}>Send</button><br className="d-lg-none d-block" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Stay up to date with Remota</h3>
                                <p className="text-body-lead-large color-gray-600">Take a look at our blog to see what our team has been up to!</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog" legacyBehavior><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Our Values</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Our commitment to eco-friendly solutions and electronic recycling</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Quarterly Report</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">How we handled techs biggest offboard cycle of the decade</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Employee Stories</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Meet Jack: the amazingnest Remota employee that also designed this website</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Holidays</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Happy Holidays! -Remota Team</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-4.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Global Ops</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">How we operate in countries with tough customs</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-5.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Case Study</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Is remote employment the future of tech?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-6.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/watch?v=VlohcT-mePA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                    ) : null}
            </Layout>

        </>
    )
}

export default Index6;