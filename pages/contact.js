import Layout from "../components/layout/Layout";
import { useState } from "react";

function Contact() {
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
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000 mb-20">Contact Us</h1>
                            <p className="text-body-text color-gray-500">Our customer success agents will typically respond within 36hrs Mon-Fri</p>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-140">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Questions?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">Ask the experts.<br className="d-lg-block d-none" />We&lsquo;re here to help.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Remota HQ</h4>
                                    <p className="text-body-text color-gray-600">4062 Watts St.<br />Emeryville, CA 94608</p>
                                    <p className="text-body-text color-gray-600"><a href="tel:+15109038999">(510) 903 8999</a></p>
                                    <p className="text-body-text color-gray-600"><a href="mailto:support@northbay-networks.com">support@northbay-networks.com</a></p>
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
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-20">Our Location</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Our main location is in the beautiful East Bay Area</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Northbay Networks HQ</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">4062 Watts St.<br />Emeryville, 94608, USA<br /><a href="tel:+15109038999">Phone: (510) 903 8999</a><br /><a href="mailto:support@northbay-networks.com">Email: support@northbay-networks.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Remota Office</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">4062 Watts St.<br />Emeryville, 94608, USA<br /><a href="tel:+15109038999">Phone: (510) 903 8999</a><br /><a href="mailto:support@northbay-networks.com">Email: support@northbay-networks.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons hover-up">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">Remota Warehouse</h4>
                                        <p className="text-body-text color-gray-1100 mt-15">4062 Watts St.<br />Emeryville, 94608, USA<br /><a href="tel:+15109038999">Phone: (510) 903 8999</a><br /><a href="mailto:support@northbay-networks.com">Email: support@northbay-networks.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Contact;