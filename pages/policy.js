/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function Terms() {
    return (
        <>
            <Layout>
                <section className="section-box mt-50 mb-50">
                    <div className="container text-center">
                        <h1 className="text-heading-1">Terms and Conditions</h1>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="table-of-content">
                                            <h6 className="mb-15">Table of content</h6>
                                            <ul>
                                                <li>
                                                    <Link href="#section-1" legacyBehavior><a>Limitation of Liability</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-2" legacyBehavior><a>Licensing Policy</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-3" legacyBehavior><a>Product Compatibility</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-4" legacyBehavior><a>Delivery</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-5" legacyBehavior><a>Ownership</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-6" legacyBehavior><a>Browser Compatibility</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-7" legacyBehavior><a>Updates</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-8" legacyBehavior><a>Support</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-9" legacyBehavior><a>Price Changes</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-10" legacyBehavior><a>Refund Policy</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-11" legacyBehavior><a>Email and Newsletter</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-12" legacyBehavior><a>License Agreement</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-13" legacyBehavior><a>Severability</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="single-detail"><img className="img-responsive bdr-16" src="assets/imgs/page/blog/single/img-1.png" alt="Agon" />
                                            <h6 className="mt-35 mb-25" id="section-1">Limitation of Liability</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-2">Licensing Policy</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-3">Product Compatibility</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-4">Delivery</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-5">Ownership</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-6">Browser Compatibility</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-7">Updates</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-8">Support</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-9">Price Changes</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-10">Refund Policy</h6>
                                            <p>Please refer to Refund Policy page for details.</p>
                                            <h6 className="mt-35 mb-25" id="section-11">Email and Newsletter</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-12">License Agreement</h6>
                                            <p></p>
                                            <h6 className="mt-35 mb-25" id="section-13">Severability</h6>
                                            <p></p>
                                            <h6 className="mt-50">- Remota Team -</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <h3 className="text-heading-6 color-gray-400 mb-20 mt-150">Share</h3>
                                        <Link href="https://facebook.com" legacyBehavior><a className="share-social share-fb" target="_blank" rel="noreferrer" ></a></Link><br />
                                        <Link href="https://twitter.com" legacyBehavior><a className="share-social share-tw" target="_blank" rel="noreferrer" ></a></Link><br />
                                        <Link href="https://www.pinterest.com" legacyBehavior><a className="share-social share-pi" target="_blank" rel="noreferrer" ></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
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

export default Terms;