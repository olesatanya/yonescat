import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/contactus.css'

import Footer from '../Layout/footer'
import Header from '../Layout/header'
import useStore from '../../useStore'
import SelectInput from '../../components/SelectInput'

import Carousel from '../../components/Carousel'
import SideMenu from '../Layout/sidemenu'
import '../../components/carousel.css'

import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import header_phone from '../../assets/img/phone.svg'
import phone from '../../assets/img/phone-red.svg'
import password from '../../assets/img/password.webp'
import home from '../../assets/img/home.webp';
import header_back from '../../assets/img/header_back.webp';
import book from '../../assets/img/book.svg';
import lock from '../../assets/img/lock.svg';
import question from '../../assets/img/question.svg';
import map from '../../assets/img/map.svg';
import skype from '../../assets/img/skype.webp';
import meet from '../../assets/img/meet.webp';
import skype2 from '../../assets/img/skype2.webp';
import zoom from '../../assets/img/zoom.webp';
import teams from '../../assets/img/teams.webp';
import flag from '../../assets/img/flag.svg';
import yo from '../../assets/img/yo-black.svg';


interface MsgType {
	email: string
	name: string
	subject: string
	departnemt: number
	msg: string
	meeting: number
	accept: boolean
	showSideMenu: boolean
	headerBack: string
	radioNum: number
	radioNum2: number
}

const Infrastructure = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: '',
		name: '',
		subject: '',
		departnemt: 0,
		msg: '',
		meeting: 0,
		accept: false,
		showSideMenu: false,
		headerBack: 'transparent',
		radioNum: 1,
		radioNum2: 1
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })



	const items = ['one', 'two', 'three', 'four', 'five']

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemSideOffsets: 15,
	}


	return (
		<div className="contactus">
			<Header type="contactus" subpage='' />
			<div className="section-1">
				<div className="container-sm">
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h2 className='text-primary m0 p0'>{T("contact.title")}</h2>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h4 className='text-dark text-center m0 p0'>{T("contact.desc")}</h4>
						</ScrollAnimation>
					</div>
				</div>
				<div className="container">
					<div className="row center mt5">
						<div className="col-xl-3 col-lg-4 col-6 p0">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<a href="tel:08002289090"  >
									<div className='contact-card' >
										<img className='contact-type' src={phone} alt="phone"></img>
										<h4 className='text-primary p0 m0'>{T("contact.card1.title")}</h4>
										<h5 className='text-dark p1 m0'>{T("contact.card1.desc")}</h5>
									</div>
								</a>
							</ScrollAnimation>
						</div>
						<div className="col-xl-3 col-lg-4 col-6 p0">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<Link to="/knowledge">
									<div className='contact-card' >
										<img className='contact-type' src={book} alt="contact"></img>
										<h4 className='text-primary p0 m0'>{T("contact.card2.title")}</h4>
										<h5 className='text-dark p1 m0'>{T("contact.card2.desc")}</h5>
									</div>
								</Link>
							</ScrollAnimation>
						</div>
						<div className="col-xl-3 col-lg-4 col-6 p0">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<a href="https://hosting.yonescat.com/">
									<div className='contact-card' >
										<img className='contact-type' src={lock} alt="lock"></img>
										<h4 className='text-primary p0 m0'>{T("contact.card3.title")}</h4>
										<h5 className='text-dark p1 m0'>{T("contact.card3.desc")}</h5>
									</div>
								</a>
							</ScrollAnimation>
						</div>
						<div className="col-xl-3 col-lg-4 col-6 p0">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<Link to="faq">
									<div className='contact-card' >
										<img className='contact-type' src={question} alt="question"></img>
										<h4 className='text-primary p0 m0'>{T("contact.card4.title")}</h4>
										<h5 className='text-dark p1 m0'>{T("contact.card4.desc")}</h5>
									</div>
								</Link>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-2">
				<div className="container">
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
						<div className="row">
							<div className="col-xl-6 col-md-12">
								<div className="row ">
									<div className="col-12 relative">
										<h2 className='h2 text-stroke' style={{ left: '1rem' }}>{T("contact.sec2.title")}</h2>
										<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
											<h2 className='text-primary h2' style={{ zIndex: 2 }}>{T("contact.sec2.title")}</h2>
										</ScrollAnimation>
									</div>
								</div>
								<div className="row">
									<h4 className='text-dark pl3'>{T("contact.sec2.desc")}</h4>
								</div>
								<div className="row">
									<div className="col-xl-6 col-md-12">
										<input type="text" className='w100 no-border' placeholder={T('contact.sec2.name')} />
									</div>

									<div className="col-xl-6 col-md-12">
										<input type="text" className='w100 no-border' placeholder={T('contact.sec2.email')} />
									</div>
								</div>
								<div className="row">
									<div className="col-xl-6 col-md-12">
										<input type="text" className='w100 no-border' placeholder={T('contact.sec2.subject')} />
									</div>
									<div className="col-xl-6 col-md-12">
										<SelectInput name={T("contact.sec2.department")} type="" valueIndex={lang} items={["A", "B", "C"]} onValueChange={() => { }} />
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<textarea className='w100 no-border ' rows={5} placeholder={T("contact.sec2.message")} />
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<p className='text-dark bold'>Select mode of meeting</p>
									</div>
								</div>
								<div className="justify">
									<div className='radio-label text-dark' onClick={() => updateStatus({ radioNum: 1 })}><span className={`radio ${state.radioNum == 1 ? "checked" : ""}`}></span>Skype</div>
									<div className='radio-label text-dark' onClick={() => updateStatus({ radioNum: 2 })}><span className={`radio ${state.radioNum == 2 ? "checked" : ""}`}></span>GoogleMeeting</div>
									<div className='radio-label text-dark' onClick={() => updateStatus({ radioNum: 3 })}><span className={`radio ${state.radioNum == 3 ? "checked" : ""}`}></span>Zoom</div>
									<div className='radio-label text-dark' onClick={() => updateStatus({ radioNum: 4 })}><span className={`radio ${state.radioNum == 4 ? "checked" : ""}`}></span>WhatApp</div>
								</div>
								<div className="row mt3">
									<div className="col-12">
										<div className='radio-label text-dark' onClick={() => updateStatus({ radioNum2: 1 })}><span className={`radio ${state.radioNum2 == 1 ? "checked" : ""}`}></span>{T("contact.sec2.accept")}</div>
									</div>
								</div>
								<div className="row mt3">
									<button className='btn-yo'>{T("contact.submit")}</button>
									<button className='btn-white'>{T("contact.reset")}</button>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div >
			<div className="section-3">
				<div className="row center">
					<div className="col-12 relative" >
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 9rem)', top: '-100%' }}>{T("contact.locate")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("contact.locate")}</h3>
							</ScrollAnimation>
						</ScrollAnimation>
					</div>
				</div>
				<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
					<div className="row center">
						<img src={map} alt="our location" className='img-map' />
					</div>
				</ScrollAnimation>
			</div>
			<div className="section-4">
				<div className="row center">
					<div className="col-12 relative" >
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 9rem)', top: '-100%' }}>{T("contact.sec3.title")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("contact.sec3.title")}</h3>
							</ScrollAnimation>
						</ScrollAnimation>
					</div>
				</div>
				<div className="container">
					<div className="row middle">
						<div className="col-xl-4 col-lg-6 col-md-12">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
								<Link to="/">
									<div className="connect-card">
										<div className="row">
											<div className="col-12">
												<img src={teams} alt="teams-icon" style={{ width: '100px' }} />
											</div>
										</div>
										<div className="row">
											<div className="col-12">
												<h3 className='text-dark'>Microsoft Teams</h3>
											</div>
										</div>
										<div className="row">
											<div className="col-12">
												<h4 className="text-primary m0 p0">10:00 AM - 05:00 PM</h4>
												<h4 className="text-primary m0 p0">{`${T("contact.monday")} - ${T("contact.friday")}`}</h4>
											</div>
										</div>
									</div>
								</Link>
							</ScrollAnimation>
						</div>
						<div className="col-xl-8 col-lg-6 col-md-12">
							<div className="row">
								<div className="col-xl-6 col-lg-12">
									<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
										<Link to="/">
											<div className="connect-card m0 p1">
												<div className="row middle">
													<div className="col-xl-4 col-md-12">
														<img src={skype} alt="teams-icon" style={{ width: '60px' }} />
													</div>
													<div className="col-xl-8 col-md-12">
														<h4 className='text-dark m0 p0'>Skype</h4>
														<p className='text-dark m0 p0'>yonescatOnline</p>
													</div>
												</div>
												<div className="row">
													<div className="col-xl-4 col-md-12"></div>
													<div className="col-xl-8 col-md-12">
														<p className="text-primary m0 p0">10:00 AM - 05:00 PM</p>
														<p className="text-primary m0 p0">{`${T("contact.monday")} - ${T("contact.friday")}`}</p>
													</div>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
								<div className="col-xl-6 col-lg-12">
									<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
										<Link to="/">
											<div className="connect-card m0">
												<div className="row middle">
													<div className="col-12">
														<img src={zoom} alt="zoom-icon" style={{ width: '50%' }} /></div>
												</div>
												<div className="row">
													<div className="col-12">
														<h4 className='text-dark m0 p0'>Zoom Call</h4></div>
												</div>
												<div className="row">
													<div className="col-12">
														<p className="text-primary m0 p0">10:00 AM - 05:00 PM</p>
														<p className="text-primary m0 p0">{`${T("contact.monday")} - ${T("contact.friday")}`}</p>
													</div>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
								<div className="col-xl-6 col-lg-12">
									<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
										<Link to="/">
											<div className="connect-card m0 p1">
												<div className="row middle">
													<div className="col-xl-4 col-md-12">
														<img src={skype2} alt="teams-icon" style={{ width: '60px' }} />
													</div>
													<div className="col-xl-8 col-md-12">
														<h4 className='text-dark m0 p0'>Whatsapp</h4>
														<p className='text-dark m0 p0'>+123 456789</p>
													</div>
												</div>
												<div className="row">
													<div className="col-xl-4 col-md-12"></div>
													<div className="col-xl-8 col-md-12">
														<p className="text-primary m0 p0">10:00 AM - 05:00 PM</p>
														<p className="text-primary m0 p0">{`${T("contact.monday")} - ${T("contact.friday")}`}</p>
													</div>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
								<div className="col-xl-6 col-lg-12">
									<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
										<Link to="/">
											<div className="connect-card m0 p1">
												<div className="row middle">
													<div className="col-xl-4 col-md-12">
														<img src={meet} alt="teams-icon" style={{ width: '60px' }} />
													</div>
													<div className="col-xl-8 col-md-12">
														<h4 className='text-dark m0 p0'>Google Meet</h4>
													</div>
												</div>
												<div className="row">
													<div className="col-xl-4 col-md-12"></div>
													<div className="col-xl-8 col-md-12">
														<p className="text-primary m0 p0">10:00 AM - 05:00 PM</p>
														<p className="text-primary m0 p0">{`${T("contact.monday")} - ${T("contact.friday")}`}</p>
													</div>
												</div>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-5">
				<div className="container">
					<div className="row center">
						<div className="col-12 relative" >
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 8rem)', top: '-100%' }}>{T("contact.sec4.title")}</h2>
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("contact.sec4.title")}</h3>
								</ScrollAnimation>
							</ScrollAnimation>
						</div>
					</div>
					<Carousel _data={items} {...setting}>
						<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
							<a href="tel:08002289090">
								<div className="soft-card">
									<img src={flag} alt="flag" />
									<h3>{T("contact.london")}</h3>
									<p>{T("contact.callus")}:<b className='text-primary'>+44 (0) 800 228 9090</b></p>
									<p>{T("contact.callus_desc")}</p>
								</div>
							</a>
						</ScrollAnimation>
						<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
							<a href="tel:08002289090">
								<div className="soft-card active" >
									<img src={flag} alt="flag" />
									<h3>{T("contact.london")}</h3>
									<p>{T("contact.callus")}:<b className='text-primary'>+44 (0) 800 228 9090</b></p>
									<p>{T("contact.callus_desc")}</p>
								</div>
							</a>
						</ScrollAnimation>
						<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
							<a href="tel:08002289090">
								<div className="soft-card">
									<img src={flag} alt="flag" />
									<h3>{T("contact.london")}</h3>
									<p>{T("contact.callus")}:<b className='text-primary'>+44 (0) 800 228 9090</b></p>
									<p>{T("contact.callus_desc")}</p>
								</div>
							</a>
						</ScrollAnimation>

						<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
							<a href="tel:08002289090">
								<div className="soft-card active">
									<img src={flag} alt="flag" />
									<h3>{T("contact.london")}</h3>
									<p>{T("contact.callus")}:<b className='text-primary'>+44 (0) 800 228 9090</b></p>
									<p>{T("contact.callus_desc")}</p>
								</div>
							</a>
						</ScrollAnimation>
					</Carousel>
				</div>
			</div>
			<Footer />
			<SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu: false })} />
			<div>
				{/* <img src={ellipse1} className="ellipse ellipse1" alt='' /> */}
				{/* <img src={ellipse3} className="ellipse ellipse3" alt='' /> */}
				{/* <img src={ellipse2} className="ellipse ellipse2" alt='' /> */}
			</div>
		</div >
	)
};

export default Infrastructure;