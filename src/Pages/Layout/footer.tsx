import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo_white.svg'
import msg from '../../assets/img/msg.svg'
import ticket from '../../assets/img/ticket.svg'
import paypal from '../../assets/img/paypal.webp'
import visa from '../../assets/img/visa.webp'
import apple_pay from '../../assets/img/apple-pay.webp'
import pay from '../../assets/img/pay.webp'
import discord from '../../assets/img/discord.webp'
import tow from '../../assets/img/round-tow.webp'
import twitter from '../../assets/img/twitter.webp'
import facebook from '../../assets/img/facebook.webp'
import linked from '../../assets/img/linked.webp'


import useStore from '../../useStore'
const Footer = () => {
    const { T } = useStore()
    return (
        <footer className="row m0 p0">
            <div className="col-xl-5 col-lg-12 m0 p0">
                <div className="footer-img-panel">
                    <div className="footer-img">
                    </div>
                    <div className="footer-img-contact">
                        <div className="row">
                            <div className="col-12">
                                <h1 className='h1 text-stroke' >{T("footer.lets")}</h1>
                                <h1 className='text-white h1 text-center' style={{ zIndex: 2 }}>{T("footer.lets")}</h1></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h1 className='h1 text-stroke' >{T("footer.towork")}</h1>
                                <h1 className='text-white h1 text-center' style={{ zIndex: 2 }}>{T("footer.towork")}</h1></div>
                        </div>
                        <div className="row center">
                            <Link to="contactus" className='btn-transparent'>{T("footer.contact")}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-7 col-lg-12 m0 p0">
                <div className="footer-links">
                    <div className="container ">
                        <div className="row center">
                            <div className="col-11">
                                <div className="row p3 ml2" style={{ borderBottom: '1px solid grey' }}>
                                    <div className='col-lg-4 col-md-12 m0 p0'>
                                        <div className="mt2">
                                            <img src={logo} className="logo" alt="logo" />
                                            <p>{T("copyright")}</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-6 m0 p0'>
                                        <Link to="contactus" className="card text-light justify justify-around">
                                            <div className="col-3 m0"><img src={msg} alt="msg" style={{ width: '30px', height: '30px' }} /></div>
                                            <div className='col-9 m0 p0'>
                                                <b className='h5'>{T("footer.livechat")}</b>
                                                <p>{T("footer.livechat_desc")}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='col-lg-4 col-md-6 m0 p0'>
                                        <Link to="contactus" className="card text-light justify justify-around">
                                            <div className="col-3 m0"><img src={ticket} alt="msg" style={{ width: '30px', height: '30px' }} /></div>
                                            <div className='col-9 m0 p0'>
                                                <b className='h5'>{T("menu.sendticket")}</b>
                                                <p>{T("footer.contact")}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row p1 pb3 " style={{ borderBottom: '1px solid grey' }}>
                                    <div className="col-lg-4  col-6">
                                        <h3 className='text-primary' >{T("footer.company")}</h3>
                                        <Link to="/aboutus" className='footer-link'>{T("menu.aboutus")}</Link>
                                        <Link to="/projects" className='footer-link'>{T("menu.products")}</Link>
                                        <Link to="/contactus" className='footer-link'>{T("menu.contactus")}</Link>
                                        <a href="https://hosting.yonescat.com/"  className='footer-link'>{T("menu.client_area")}</a>
                                        <Link to="/legal" className='footer-link'>{T("menu.legal")}</Link>
                                    </div>
                                    <div className="col-lg-4  col-6">
                                        <h3 className='text-primary' >{T("footer.services")}</h3>
                                        <Link to="/solutions" className='footer-link'>{T("menu.solutions")}</Link>
                                        <Link to="/infrastructure" className='footer-link'>{T("menu.infrastructure")}</Link>
                                        <Link to="/hosting" className='footer-link'>{T("menu.hosting")}</Link>
                                        <Link to="/contactus" className='footer-link'>{T("menu.premium_support")}</Link>
                                    </div>
                                    <div className="col-lg-4  col-6">
                                        <h3 className='text-primary' >{T("footer.support")}</h3>
                                        <Link to="/knowledge" className='footer-link'>{T("menu.knowledge")}</Link>
                                        <Link to="/faq" className='footer-link'>{T("menu.faq")}</Link>
                                        <Link to="/blog" className='footer-link'>{T("menu.blogs")}</Link>
                                        <Link to="/contactus" className='footer-link'>{T("menu.sendticket")}</Link>
                                    </div>
                                </div>
                                <div className="justify  mt2 mb2" style={{ alignItems: "center", alignContent: 'center', paddingLeft:'3px', alignSelf: 'center' }}>
                                    <div className='justify '>
                                        <p>{T("footer.weaccept")}</p>
                                        <Link to="/" >
                                            <img src={paypal} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={visa} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={tow} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={apple_pay} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={discord} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={pay} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link" />
                                        </Link>
                                    </div>
                                    <div className="justify ml-auto mr-auto">
                                        <p>{T("footer.fllows")}</p>
                                        <Link to="/" >
                                            <img src={facebook} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link-2" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={twitter} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link-2" />
                                        </Link>
                                        <Link to="/" >
                                            <img src={linked} style={{ maxHeight: '50px' }} alt="paypal-img" className="footer-accpt-link-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;