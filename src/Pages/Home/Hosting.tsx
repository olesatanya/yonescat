import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/hosting.css'

import Footer from '../Layout/footer'
import Header from '../Layout/header'
import useStore from '../../useStore'
import { tips, validateEmail } from '../../util'
import Carousel from '../../components/Carousel'
import '../../components/carousel.css'

import arrow_left from '../../assets/img/arrow_left.svg'
import data_center from '../../assets/img/data_center.svg';
import price_1 from '../../assets/img/hosting-price1.webp';
import price_2 from '../../assets/img/hosting-price2.webp';
import price_item_1 from '../../assets/img/hosting-price-1.svg';
import price_item_2 from '../../assets/img/hosting-price-2.webp';
import price_item_3 from '../../assets/img/hosting-price-3.webp';
import price_item_4 from '../../assets/img/hosting-price-4.webp';
import sec_3_1 from '../../assets/img/hosting-sec3-1.webp';
import sec_3_2 from '../../assets/img/hosting-sec3-2.webp';
import sec_3_3 from '../../assets/img/hosting-sec3-3.webp';
import ellipse1 from '../../assets/img/Ellipse_8.webp';
import ellipse2 from '../../assets/img/Ellipse_10.webp';
import ellipse3 from '../../assets/img/Ellipse_7.webp';
import ellipse4 from '../../assets/img/Ellipse_4.webp';
import ellipse5 from '../../assets/img/Ellipse_2.webp';
import ellipse6 from '../../assets/img/Ellipse_1.webp';

interface MsgType {
	email: string
	switchChecked: boolean
	faqOpen1: boolean
	faqOpen2: boolean
	faqOpen3: boolean
	faqOpen4: boolean
}

const Hosting = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: '',
		switchChecked: false,
		faqOpen1: true,
		faqOpen2: false,
		faqOpen3: false,
		faqOpen4: true
	})
	const { update, T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	const submit = async () => {
		const { email } = state
		if (email === '' || !validateEmail(email)) {
			tips("Invalid e-mail")
			return
		}
		update({ loading: true })
		// const res = await call("submit", { email, password });
		// if (res) {
		tips("Success")
		// }
		// update({ loading: false })
		setTimeout(() => {
			update({ loading: false })
		}, 2000);
	}


	const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemSideOffsets: 15,
	}

	return (
		<div className="hosting">
			<Header type="hosting" subpage='' />
			<div className="section-1">
				<div className="container-sm">
					<div className="row center relative">
						<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 3.5em)' }}>{T("hosting.sec1.title")}</h2>
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h2 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("hosting.sec1.title")}</h2>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
							<h4 className='text-light text-center m0 p0'>{T("hosting.sec1.desc")}</h4>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
						<div className="row center mt3">
							<label className={`slider ${!state.switchChecked ? 'text-primary' : 'text-light'}`}>{T("hosting.sec1.monthly")}</label>
							<div style={{ position: 'relative' }}>
								<div className='switch' onClick={() => { updateStatus({ switchChecked: !state.switchChecked }) }}>
									<div className={`slider ${state.switchChecked ? 'checked' : ''}`}></div>
								</div>
							</div>
							<label className={`slider ${state.switchChecked ? 'text-primary' : 'text-light'}`}>{T("hosting.sec1.anually")}</label>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
						<div className="row center mt5">
							<h4 className='text-light m0 p0'>{T("hosting.sec1.title2")}</h4>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
						<div className="container-sm">
							<div className="row center">
								<div className="col-lg-9 col-12">
									<div className="row center">
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc1")}</label>
												<span className='round'></span>
											</div>
										</div>
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc2")}</label>
												<span className='round'></span>
											</div>
										</div>
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc3")}</label>
												<span className='round'></span>
											</div>
										</div>
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc4")}</label>
												<span className='round'></span>
											</div>
										</div>
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc5")}</label>
												<span className='round'></span>
											</div>
										</div>
										<div className="col-xl-4 col-lg-3 col-6 m0 p0">
											<div className="desc-item">
												<label className='text-light'>{T("hosting.sec1.desc6")}</label>
												<span className='round'></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
					<div className="row center mt5">
						<div className="col-xl-12 col-lg-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<Carousel _data={items} {...setting}>
									<Link to="/hosting-details/shared" className="price-card" style={{ direction: 'ltr' }}>
										<div className="header">
											<div className="row middle">
												<div className="col-3">
													<img src={price_2} alt="desktop" />
												</div>
												<div className="col-9">
													<h3>{T("hosting.card2.title")}</h3>
													<p>{T("hosting.card2.desc")}</p>
												</div>
											</div>
											<div className="row p0 pl3 ">
												<p style={{ textDecoration: 'line-through' }}>$ 112.99</p>
											</div>
											<div className="row pl3">
												<h3>$ 90.00 /</h3> <h4>{T("hosting.card.year")}</h4>
											</div>
										</div>
										<div className="body">
											<div className="order-bar">
												{T("hosting.card.order")}
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_1} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>DISK</h3>
													<p>2TB SSD</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_2} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>DATA</h3>
													<p>Unlimited Bandwidth</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_3} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>E-MAIL</h3>
													<p>Unlimited Emails</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_4} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>TLD</h3>
													<p>Unlimited Domains</p>
												</div>
											</div>
										</div>
									</Link>
									<Link to="/hosting-details/dedicated" className="price-card" style={{ direction: 'ltr' }}>
										<div className="header">
											<div className="row middle">
												<div className="col-3">
													<img src={price_1} alt="desktop" style={{ width: '70px' }} />
												</div>
												<div className="col-9">
													<h3>{T("hosting.card1.title")}</h3>
													<p>{T("hosting.card1.desc")}</p>
												</div>
											</div>
											<div className="row p0 pl3 ">
												<p style={{ textDecoration: 'line-through' }}>$ 88.24</p>
											</div>
											<div className="row pl3">
												<h3>$ 62.00 /</h3> <h4>{T("hosting.card.year")}</h4>
											</div>
										</div>
										<div className="body">
											<div className="order-bar">
												{T("hosting.card.order")}
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_1} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>DISK</h3>
													<p>250GB SSD</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_2} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>DATA</h3>
													<p>1TB Bandwidth</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_3} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>E-MAIL</h3>
													<p>120 Emails</p>
												</div>
											</div>
											<div className="row middle p0">
												<div className="col-3">
													<img src={price_item_4} alt="desktop" />
												</div>
												<div className="col-9">
													<h3 className='p0 m0'>TLD</h3>
													<p>30 Domains</p>
												</div>
											</div>
										</div>
									</Link>
								</Carousel>
							</ScrollAnimation>
						</div>
						<div className="col-xl-5 col-lg-12">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">

							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-2">
				<div className="container-sm">
					<div className="row center justify">
						<div className="col-12" style={{ position: 'relative' }}>
							<h2 className='h2 text-stroke'>{T("hosting.sec2.title")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h2 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("hosting.sec2.title")}</h2>
							</ScrollAnimation>

						</div>

					</div>
					<div className="row center">
						<div className="col-lg-4 col-md-6 mt3">
							<Link to="/hosting-details/shared" className="future-card ">
								<img src={data_center} alt="desktop" />
								<div>
									<h4 className='text-dark p0 m0 text-center '>{T("hosting.card1.title")}</h4>
									<div className="row center">
										<Link to="/hosting-details/shared" className='center text-center  h5'>{T("title.learn_more")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6 mt3">
							<Link to="/hosting-details/shared" className="future-card ">
								<img src={data_center} alt="desktop" />
								<div>
									<h4 className='text-dark p0 m0 text-center '>{T("hosting.card1.title")}</h4>
									<div className="row center">
										<Link to="/hosting-details/shared" className='center text-center  h5'>{T("title.learn_more")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-4 col-md-6 mt3">
							<Link to="/hosting-details/shared" className="future-card ">
								<img src={data_center} alt="desktop" />
								<div>
									<h4 className='text-dark p0 m0 text-center '>{T("hosting.card1.title")}</h4>
									<div className="row center">
										<Link to="/hosting-details/shared" className='center text-center  h5'>{T("title.learn_more")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="section-3">
				<div className="container-sm">
					<div className="row center justify">
						<div className="col-12" style={{ position: 'relative', overflow: 'hidden' }}>
							<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 9em)' }}>{T("hosting.sec3.title")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h2 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("hosting.sec3.title")}</h2>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row center p3">
						<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
							<h4 className='text-light'>{T("hosting.sec3.desc")} </h4>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<div className="col-lg-4 col-md-6">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
								<div className="future-card">
									<img src={sec_3_1} alt="desktop" />
									<h4 className='text-dark p0 m0 text-center'>{T("hosting.sec3.card1.title")}</h4>
									<p className='text-dark text-center'>{T("hosting.sec3.card1.desc")}</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-4 col-md-6">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
								<div className="future-card ">
									<img src={sec_3_2} alt="desktop" />
									<h4 className='text-dark p0 m0 text-center'>{T("hosting.sec3.card2.title")}</h4>
									<p className='text-dark text-center'>{T("hosting.sec3.card3.desc")}</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-4 col-md-6">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
								<div className="future-card ">
									<img src={sec_3_3} alt="desktop" />
									<h4 className='text-dark p0 m0 text-center'>{T("hosting.sec3.card3.title")}</h4>
									<p className='text-dark text-center'>{T("hosting.sec3.card3.desc")}</p>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-4">
				<div className="container-sm">
					<div className="row center">
						<div className="col-12" style={{ position: 'relative' }}>
							<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 7em)' }}>{T("hosting.sec4.title")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h2 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("hosting.sec4.title")}</h2>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
							<h4 className='text-light'>
								{T("hosting.sec4.desc")}
							</h4>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
						<div className="row center">
							<div className="col-xl-4 col-lg-6 col-md-12">
								<h3 className='text-light ml3'>{T("hosting.sec4.title1")}</h3>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>PHP 5.5/5.6/7.0/7.1</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>Perl</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>Python 2.6.6</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>PostgreSQL</h5>
									<span className='round'></span>
								</div>
								<Link to="/hosting" className='ml3 text-light h5'>{T("text.seeall")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>

							</div>
							<div className="col-xl-4 col-lg-6 col-md-12">
								<h3 className='text-light ml3'>{T("hosting.sec4.title2")}</h3>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>MySQL 5.6</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>phpMyAdmin</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>FTPES Supported</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>MSSQL Stored Precedures</h5>
									<span className='round'></span>
								</div>
								<Link to="/hosting" className='ml3 text-light h5'>{T("text.seeall")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>
							</div>
							<div className="col-xl-4 col-lg-6 col-md-12">
								<h3 className='text-light ml3'>{T("hosting.sec4.title3")}</h3>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>Zend Engine</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>Zend Optimizer</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>Zend Guard Loader</h5>
									<span className='round'></span>
								</div>
								<div className="desc-item">
									<h5 className='text-light p0 m0'>ionCube Loader</h5>
									<span className='round'></span>
								</div>
								<Link to="/hosting" className='ml3 text-light h5'>{T("text.seeall")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></Link>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
			<div className="section-5">
				<div className="container-sm">
					<div className="row center justify">
						<div className="col-12" style={{ position: 'relative' }}>
							<h2 className='h2 text-stroke' style={{ left: 'calc(50% - 3rem)' }}>{T("menu.faq")}</h2>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h2 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("menu.faq")}</h2>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h3>{T("hosting.sec4.desc")}</h3>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<div className="col-xl-9 col-lg-12">
							<div className="faq-panel">
								<div className={`title-bar ${state.faqOpen1 ? 'active' : ''}`} onClick={() => { updateStatus({ faqOpen1: !state.faqOpen1 }) }}>{T("hosting.sec5.title1")}</div>
								<div className={`faq-desc ${state.faqOpen1 ? 'active' : ''}`}><p className='p3 h5  m0'>{T("hosting.sec5.desc1")}</p></div>
								<div className={`title-bar ${state.faqOpen2 ? 'active' : ''}`} onClick={() => { updateStatus({ faqOpen2: !state.faqOpen2 }) }}>{T("hosting.sec5.title2")}</div>
								<div className={`faq-desc ${state.faqOpen2 ? 'active' : ''}`}><p className='p3 h5  m0'>{T("hosting.sec5.desc2")}</p></div>
								<div className={`title-bar ${state.faqOpen3 ? 'active' : ''}`} onClick={() => { updateStatus({ faqOpen3: !state.faqOpen3 }) }}>{T("hosting.sec5.title3")}</div>
								<div className={`faq-desc ${state.faqOpen3 ? 'active' : ''}`}><p className='p3 h5  m0'>{T("hosting.sec5.desc3")}</p></div>
								<div className={`title-bar ${state.faqOpen4 ? 'active' : ''}`} onClick={() => { updateStatus({ faqOpen4: !state.faqOpen4 }) }}>{T("hosting.sec5.title4")}</div>
								<div className={`faq-desc ${state.faqOpen4 ? 'active' : ''}`}><p className='p3 h5  m0'>{T("hosting.sec5.desc4")}</p></div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-6">
				<div className="container-sm">
					<div className="row center justify mt3">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke'>{T("title.newsletter")}</h3>
							<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("title.newsletter")}</h3>
						</div>
					</div>
					<div className="row center ">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h3 className='text-center'>{T("solutions.newsletter.desc")}</h3>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center mt2">
							<div className="col-3"></div>
							<div className="col-xl-6 col-lg-12 row">
								<input type="text" placeholder={T("login.place.email")} className="w100" onChange={e => updateStatus({ email: e.target.value })} />
								<button className='btn-yo' style={{ position: 'absolute', right: '0', top: '12%' }} onClick={() => { submit() }}>{T("title.subscribe")}</button>
							</div>
							<div className="col-3"></div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
			<Footer />

			<img src={ellipse1} className="ellipse ellipse1" alt='' />
			<img src={ellipse2} className="ellipse ellipse2" alt='' />
			<img src={ellipse3} className="ellipse ellipse3" alt='' />
			<img src={ellipse4} className="ellipse ellipse4" alt='' />
			<img src={ellipse5} className="ellipse ellipse5" alt='' />
			<img src={ellipse6} className="ellipse ellipse6" alt='' />

		</div>
	)
};

export default Hosting;