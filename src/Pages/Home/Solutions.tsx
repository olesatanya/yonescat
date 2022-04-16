import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import Header from '../Layout/header'
import Footer from '../Layout/footer'
import useStore from '../../useStore'
import { tips, validateEmail } from '../../util'
import '../../assets/css/animate.min.css'
import '../../assets/css/solutions.css'

import arrow_left from '../../assets/img/arrow_left.svg'
import rocket from '../../assets/img/rocket.svg';
import mixcloud from '../../assets/img/mixcloud.svg';
import mobile from '../../assets/img/mobile.svg';
import basket from '../../assets/img/basket.svg';
import desktop from '../../assets/img/desktop.svg';
import camera from '../../assets/img/camera.svg';
import ellipse1 from '../../assets/img/Ellipse_2.webp'
import ellipse2 from '../../assets/img/Ellipse_4.webp'

interface MsgType {
	email: string
}

const Solutions = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
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


	return (
		<div className="solutions">
			<Header type="solutions" subpage='' />
			<div className="section-1">
				<div className="container">
					<div className="row mt3" style={{ alignItems: 'center' }}>
						<div className="col-xl-7 col-md-12">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<div className="row">
									<h2 className='text-light p3'>{T("solutions.desc1")}</h2>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-5 col-md-12">
							<div className="row ml5">
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<div className="row "><h4 style={{ width: '300px' }}>{T("solutions.desc2")}</h4></div>
								</ScrollAnimation>
							</div>
							<div className="row ml3	">
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<a href="/contactus" className='btn-transparent '>{T("btn.contact")}</a>
								</ScrollAnimation>
							</div>
						</div>
					</div>
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
						<div className="container ">
							<div className="row  mt3">
								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/data" className="soft-card">
										<div className="row">
											<div className="col-12">
												<img src={desktop} alt="desktop"  />
												<h3>{T("solutions.card.title4")}</h3>
												<div className='h4'>{T("title.learn_more")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/cloud" className="soft-card " >
										<div className="row">
											<div className="col-12">
												<img src={camera} alt="camera"  />
												<h3>{T("solutions.card.title2")}</h3>
												<div className='h4'>{T("title.learn_more")} <img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/ecommerce" className="soft-card">
										<div className="row">
											<div className="col-12">
												<img src={rocket} alt="rocket"  />
												<h3>{T("solutions.card.title3")} <br></br></h3>
												<div className='h4'>{T("title.learn_more")} <img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>

								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/mobile-app" className="soft-card row2">
										<div className="row">
											<div className="col-12">
												<img src={mobile} alt="desktop"  />
												<h3>{T("solutions.card.title1")}</h3>
												<div className='h4'>{T("title.learn_more")}<img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/virtual-reality" className="soft-card row2">
										<div className="row">
											<div className="col-12">
												<img src={mixcloud} alt="mixcloud"  />
												<h3>{T("solutions.card.title5")}<br></br></h3>
												<div className='h4'>{T("title.learn_more")} <img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>
								<div className="col-lg-4 col-md-6">
									<Link to="solution-details/decentralize" className="soft-card row2">
										<div className="row">
											<div className="col-12">
												<img src={basket} alt="basket"  />
												<h3>{T("solutions.card.title6")}</h3>
												<div className='h4'>{T("title.learn_more")} <img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" /></div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</ScrollAnimation>
					<div className="row mt2 center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<button className='btn-transparent'>{T("btn.load_more")}</button>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className="section-2">
				<div className="container">
					<div className="row mt3">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke'>{T("title.newsletter")}</h3>
							<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("title.newsletter")}</h3>
						</div>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
							<h3 className='text-center'>{T("solutions.newsletter.desc")}</h3>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
						<div className="row center mt1">
							<div className="col-3"></div>
							<div className="col-xl-6 col-md-12 row">
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
		</div >
	)
};

export default Solutions;