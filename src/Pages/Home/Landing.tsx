import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../Layout/header'
import Footer from '../Layout/footer'

import useStore from '../../useStore'
import { tips, validateEmail, validateUsername } from '../../util'
import Carousel from '../../components/Carousel'
import '../../components/carousel.css'
import '../../assets/css/landing.css'
import '../../assets/css/animate.min.css'

import password from '../../assets/img/password.webp'
import yo from '../../assets/img/yo.webp'
import sec2_1 from '../../assets/img/icon_landing_1.svg'
import sec2_2 from '../../assets/img/icon_landing_2.svg'
import sec2_3 from '../../assets/img/icon_landing_3.svg'
import landing_client_1 from '../../assets/img/LifeLongProgram.svg'
import landing_client_2 from '../../assets/img/Mayor-of-London.svg'


import landing_client_3 from '../../assets/img/NHS.svg'
import landing_client_4 from '../../assets/img/Circulation_Fou.svg'
import landing_client_5 from '../../assets/img/double-helix.svg'
import work1 from '../../assets/img/landing-work-1.webp'
import work2 from '../../assets/img/landing-work-2.webp'
import work3 from '../../assets/img/landing-work-3.webp'
import ellipse1 from '../../assets/img/Ellipse_1.webp'
import ellipse2 from '../../assets/img/Ellipse_2.webp'
import ellipse3 from '../../assets/img/Ellipse_3.webp'
import ellipse5 from '../../assets/img/Ellipse_5.webp'
import landing_1 from '../../assets/img/landing-round-1.webp'
import landing_2 from '../../assets/img/landing-round-2.webp'
import arrow_down from '../../assets/img/long-arrow-down.svg'


interface LandingType {
	name: string
	email: string
	radioNum: number
}
const Landing = () => {
	const [state, setStates] = React.useState<LandingType>({
		name: '',
		email: '',
		radioNum: 0,
	})
	const { call, update, T, changeLang, lang } = useStore()
	const updateStatus = (params: Partial<LandingType>) => setStates({ ...state, ...params })

	const submit = async () => {
		const { email, name } = state
		if (email === '' || !validateEmail(email)) {
			tips("Invalid e-mail")
			return
		} else if (name === '' || !validateUsername(name)) {
			tips("Invalid name")
			return
		}
		update({ loading: true })
		const res = await call("login", { email, password });
		// if (res) {
		tips("Success" + res)
		// }
		// update({ loading: false })
		setTimeout(() => {
			update({ loading: false })
		}, 2000);
	}



	const items = ['one', 'two', 'three', 'four', 'five']

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemSideOffsets: 15,
	}

	return (
		<div className="landing">
			<Header type="landing" subpage=''/>
			<div className="section-1 flex">
				<img src={yo} alt="yo" className='img-yo'></img>
				<div className="container flex">
					<div className="row middle w100 " style={{ alignSelf: 'center' }}>
						<div className="col-xl-7 col-lg-12">
							<div className='ml-auto mr-auto mb3 '>
								<h1 className='m0 p0'>{T("landing.title1")}</h1>
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
									<h1 className='m0 p0'>{T("landing.title2")}</h1>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
									<h4 className="mt3">{T("landing.title3")}</h4>
								</ScrollAnimation>
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<button className='btn-transparent'>{T("btn.contact")}</button>
								</ScrollAnimation>
							</div>
						</div>
						<div className="col-xl-5 col-lg-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className='ask-panel ml-auto mr-auto'>
									<h3 className='text-black m0'>{T("landing.challenge.title")}</h3>
									<p>{T("landing.challenge.desc")}</p>
									<hr />
									<div className='radio-label' onClick={() => updateStatus({ radioNum: 1 })}><span className={`radio ${state.radioNum == 1 ? "checked" : ""}`}></span>{T("landing.challenge.check1")}</div>
									<div className='radio-label' onClick={() => updateStatus({ radioNum: 2 })}><span className={`radio ${state.radioNum == 2 ? "checked" : ""}`}></span>{T("landing.challenge.check2")}</div>
									<div className='radio-label' onClick={() => updateStatus({ radioNum: 3 })}><span className={`radio ${state.radioNum == 3 ? "checked" : ""}`}></span>{T("landing.challenge.check3")}</div>
									<div className='mt2'>
										<input type="text" onChange={e => updateStatus({ name: e.target.value })} placeholder='Enter your full name' className='w100 mt3' />
										<input type="text" onChange={e => updateStatus({ email: e.target.value })} placeholder='Enter your e-mail address' className='w100' />
									</div>
									<div className="row mt2 ml0">
										<button className='btn-yo ml1' onClick={() => { submit() }}> {T("landing.submit")}</button>
										<button className='btn-white'>{T("landing.cancel")}</button>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
				<span onClick={() => { window.scrollTo(0, 900) }}><img src={arrow_down} alt="arrow_down" className={`btn-arrow-down ${window.pageXOffset > 200 ? 'hide' : 'block'}`} /></span>
			</div>
			<div className="section-2" id="section-2">
				<div className="des-panel ml5 container">
					<div className="row">
						<div className="col-lg-12 col-xl-11">
							<div className="row">
								<div className="col-xl-4 col-lg-12 m0 p0">
									<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
										<Link to="/" className="des-item text-light">
											<img src={sec2_2} alt="landing-sec2-img" />
											<div>
												<h4 className='text-primary'>{T("landing.sec2.title1")}</h4>
												<p >{T("landing.sec2.desc1")}</p>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
								<div className="col-xl-4 col-lg-12 m0 p0">
									<ScrollAnimation animateIn="fadeInUp" delay={300} animateOut="fadeOutUp">
										<Link to="/" className="des-item text-light">
											<img src={sec2_1} alt="landing-sec2-img" />
											<div>
												<h4 className='text-primary'>{T("landing.sec2.title2")}</h4>
												<p >{T("landing.sec2.desc2")}</p>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
								<div className="col-xl-4 col-lg-12 m0 p0">
									<ScrollAnimation animateIn="fadeInUp" delay={500} animateOut="fadeOutUp">
										<Link to="/" className="des-item text-light">
											<img src={sec2_3} alt="landing-sec2-img" />
											<div>
												<h4 className='text-primary'>{T("landing.sec2.title3")}</h4>
												<p >{T("landing.sec2.desc3")}</p>
											</div>
										</Link>
									</ScrollAnimation>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-3">
				<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
					<div className="row center">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke'>{T("landing.whatdo.title")}</h3>
							<h3 className='text-white h2 text-center' style={{ zIndex: 2 }}>{T("landing.whatdo.title")}</h3>
						</div>
					</div>
				</ScrollAnimation>
				<div className="row center ">
					<div className="col-12">
						<ScrollAnimation animateIn="fadeInUp" delay={100} animateOut="fadeOutUp">
							<h4 className='text-light m0 p0 text-center' >{T("landing.whatdo.desc")}</h4>
						</ScrollAnimation>
					</div>
				</div>
				<div className="container ">
					<div className=" row center  ml-auto mr-auto">
						<div className="col-xl-4 col-lg-12">
							<ScrollAnimation animateIn="fadeInUp" delay={100} animateOut="fadeOutUp">
								<Link to="/solutions" >
									<div className="work-card">
										<div className="row center">
											<img src={work1} style={{ maxHeight: '56px', width: '40px', height: '56px' }} alt="work-img-1" />
										</div>
										<h4>{T("landing.whatdo.card.title1")}</h4>
										<p>{T("landing.whatdo.card.desc1")}</p>
									</div>
								</Link>
							</ScrollAnimation>
						</div>

						<div className="col-xl-4 col-lg-12">
							<ScrollAnimation animateIn="fadeInUp" delay={300} animateOut="fadeOutUp">
								<Link to="/solutions" >
									<div className="work-card">
										<div className="row center">
											<img src={work2} style={{ maxHeight: '55px', width: '55px', height: '100px' }} alt="work-img-1" />
										</div>
										<h4>{T("landing.whatdo.card.title2")}</h4>
										<p>{T("landing.whatdo.card.desc2")}</p>
									</div>
								</Link>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-12">
							<ScrollAnimation animateIn="fadeInUp" delay={500} animateOut="fadeOutUp">
								<Link to="/solutions" >
									<div className="work-card">
										<div className="row center">
											<img src={work3} style={{ maxHeight: '55px', width: '55px', height: '100px' }} alt="work-img-1" />
										</div>
										<h4>{T("landing.whatdo.card.title3")}</h4>
										<p>{T("landing.whatdo.card.desc3")}</p>
									</div>
								</Link>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-4">
				<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
					<div className="row">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke' style={{ left: 'calc(50% - 5em)' }}>{T("landing.whychoose.title")}</h3>
							<h3 className='text-white h2 text-center' style={{ zIndex: 2 }}>{T("landing.whychoose.title")}</h3>
						</div>
					</div>
				</ScrollAnimation>
				<div className="row center ">
					<div className="col-12">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h4 className='text-light m0 p0 text-center' >{T("landing.whychoose.desc")}</h4>
						</ScrollAnimation>
					</div>
				</div>

				<div className="container">
					<div className="row mt5 center middle m0 p0">
						<div style={{ transform: 'translateX(50px)', zIndex: 1000 }} className="landing-text">
							<h3>{T("landing.whychoose.card.title1")}</h3>
							<p>{T("landing.whychoose.card.desc1")}</p>
						</div>
						<ScrollAnimation animateIn="rotateIn" animateOut="fadeOutUp">
							<div className="choose-image-pan " >
								<img src={landing_1} alt="landing_1" className='landing-choose-image' />
							</div>
						</ScrollAnimation>
					</div>
					<div className="row mt5 middle center">
						<ScrollAnimation animateIn="rotateIn" animateOut="fadeOutUp">
							<div className="choose-image-pan" >
								<img src={landing_2} alt="landing_1" className='landing-choose-image' />
							</div>
						</ScrollAnimation>
						<div style={{ transform: 'translateX(-50px)', zIndex: 1000 }} className="landing-text">
							<h3>{T("landing.whychoose.card.title2")}</h3>
							<p>{T("landing.whychoose.card.desc2")}</p>
						</div>
					</div>
					{/* <div className="row mt5 ">
						<div className="col-6 row round-desc-1" style={{ alignItems: 'center', transform: 'translateX(150px)', zIndex: 100, justifyContent: 'flex-end' }}>
							<div className="">
								<h3>{T("landing.whychoose.card.title1")}</h3>
								<p>{T("landing.whychoose.card.desc1")}</p>
							</div>
						</div>
						<div className="col-6">
							<ScrollAnimation animateIn="rotateIn" animateOut="fadeOutUp">
								<div className="choose-image-pan " style={{transform: 'translateX(-30px)'}}>
										<img src={landing_1} alt="landing_1" className='landing-choose-image' />
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row mt5 ">
						<div className="col-6">
							<ScrollAnimation animateIn="rotateIn" animateOut="fadeOutUp">
								<div className="choose-image-pan" style={{ transform: 'translateX(300px)' }}>
									<img src={landing_2} alt="landing_1" className='landing-choose-image' />
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-6 row round-desc-1" style={{ alignItems: 'center', transform: 'translateX(-250px)', zIndex: 100, justifyContent: 'flex-end' }}>
							<div className="round-desc-2">
								<h3>{T("landing.whychoose.card.title2")}</h3>
								<p>{T("landing.whychoose.card.desc2")}</p>
							</div>
						</div>
						<div className="col-xl-2 col-lg-12"></div>
					</div> */}
				</div>
			</div>
			<div className="section-5">
				<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
					<div className="row">
						<div className="col-12" style={{ position: 'relative' }}>
							<h2 className='h2 text-stroke' >{T("title.ourclient")}</h2>
							<h2 className='text-white h2 text-center' style={{ zIndex: 2 }}>{T("title.ourclient")}</h2>
						</div>
					</div>
				</ScrollAnimation>
				<div className="container">
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center">
							<h4 className='text-light   text-center' style={{ width: '60%' }}>{T("desc.ourclient")}</h4>
						</div>
					</ScrollAnimation>
				</div>
				<div className="container mt3">
					<div className="row justify center w100 mt5 mb5">
						<Carousel _data={items} {...setting}>
							<ScrollAnimation animateIn="fadeInUp" delay={100} animateOut="fadeOutUp">
								<Link to="/contactus" className='ml5 mr5'><img src={landing_client_1} alt="client-icon" className='client-link' /></Link>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" delay={400} animateOut="fadeOutUp">
								<Link to="/contactus" className='ml5 mr5'><img src={landing_client_2} alt="client-icon" className='client-link' /></Link>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" delay={600} animateOut="fadeOutUp">
								<Link to="/contactus" className='ml5 mr5'><img src={landing_client_3} alt="client-icon" className='client-link' /></Link>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" delay={800} animateOut="fadeOutUp">
								<Link to="/contactus" className='ml5 mr5'><img src={landing_client_4} alt="client-icon" className='client-link' /></Link>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" delay={1000} animateOut="fadeOutUp">
								<Link to="/contactus" className='ml5 mr5'><img src={landing_client_5} alt="client-icon" className='client-link' /></Link>
							</ScrollAnimation>
						</Carousel>
					</div>

				</div>
			</div >
			<Footer />

			<img src={ellipse1} className="ellipse ellipse1" alt='' />
			<img src={ellipse5} className="ellipse ellipse2" alt='' />
			<img src={ellipse2} className="ellipse ellipse3" alt='' />
			<img src={ellipse3} className="ellipse ellipse4" alt='' />
			<img src={ellipse1} className="ellipse ellipse5" alt='' />

		</div >
	)
};

export default Landing;