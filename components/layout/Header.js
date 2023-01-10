/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex" >
                                        <img alt="Remota"  src="/assets/imgs/template/logo-blacktext_1_300x.png" />
                                        {/* <h3>Remota</h3> */}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="no-children">
                                            <Link href="/about" legacyBehavior><a>About Us</a></Link>
                                        </li>
                                        <li className="no-children">
                                            <Link href="/services" legacyBehavior><a>Services</a></Link>
                                            {/* <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-service-1" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career Detail</a></Link>
                                                </li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="no-children">
                                            <Link href="/sales" legacyBehavior><a>Sales</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-service-1" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career Detail</a></Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li className="no-children">
                                            <Link href="/team" legacyBehavior><a>Our Team</a></Link>
                                        </li>
                                        {/* <li className="no-children">
                                            <Link href="/blog" legacyBehavior><a>Blog</a></Link>
                                        </li> */}
                                    </ul>
                                </nav>
                                {/* <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div> */}
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link href="/contact" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right">Contact Us</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;