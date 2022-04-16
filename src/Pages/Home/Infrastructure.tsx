import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/infrastructure.css'

import Footer from '../Layout/footer'
import Header from '../Layout/header'
import useStore from '../../useStore'
import { tips, validateEmail } from '../../util'
import Carousel from '../../components/Carousel'
import '../../components/carousel.css'
import arrow_left from '../../assets/img/arrow_left.svg'
import data_center from '../../assets/img/data_center.svg';
import db_service from '../../assets/img/db-as-service.svg';
import DDos from '../../assets/img/DDos.svg';
import G_suite from '../../assets/img/G-suite.svg';
import office from '../../assets/img/office365.webp';
import voip from '../../assets/img/voip.svg';
import smile from '../../assets/img/smile-o.svg';
import code from '../../assets/img/code.webp';
import coffee from '../../assets/img/coffee.webp';
import trophy from '../../assets/img/trophy.webp';
import ellipse1 from '../../assets/img/Ellipse_1.webp'
import ellipse2 from '../../assets/img/Ellipse_2.webp'

interface MsgType {
	email: string
}

const Infrastructure = () => {
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

	const items = ['one', 'two', 'three', 'four', 'five']

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemSideOffsets: 15,
		next: () => { }
	}


	return (
		<div className="infrastructure">
			<Header type="infrastructure" subpage='' />
			<div className="section-1">
				<div className="container">
					<div className="row mt3 mb3" style={{ alignItems: 'center' }}>
						<div className="col-xl-7 col-md-12">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<div className="row center">
									<h2 className='text-light' style={{ width: '80%' }}>{T("solutions.desc1")}</h2>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-5 col-md-12">
							<div className="row center">
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<div className="row center"><h5 style={{ width: '300px' }}>{T("solutions.desc2")}</h5></div>
								</ScrollAnimation>
							</div>
							<div className="row center">
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<a href="/contactus" className='btn-transparent '>{T("btn.contact")}</a>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>

				<ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutUp">
					<Carousel _data={items} {...setting} >
						<div className="soft-card" style={{ paddingLeft: 0, paddingRight: 0 }}>
							<img src={data_center} alt="desktop" style={{ width: '50%' }} />
							<h4>{T("infrastructure.card.title7")}</h4>
							<Link to="/infrastructure-details/iptv" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card" style={{ paddingLeft: 0, paddingRight: 0 }}>
							<img src={voip} alt="desktop" style={{ width: '50%' }} />
							<h4>{T("infrastructure.card.title6")}</h4>
							<Link to="/infrastructure-details/voip" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card">
							<img src={G_suite} alt="desktop" />
							<h4>{T("infrastructure.card.title5")}</h4>
							<Link to="/infrastructure-details/g-suite" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card">
							<img src={office} alt="desktop" />
							<h4>{T("infrastructure.card.title4")}</h4>
							<Link to="/infrastructure-details/office" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card">
							<img src={db_service} alt="desktop" />
							<h4>{T("infrastructure.card.title3")}</h4>
							<Link to="/infrastructure-details/database" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card">
							<img src={DDos} alt="desktop" />
							<h4>{T("infrastructure.card.title2")}</h4>
							<Link to="/infrastructure-details/ddos" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
						<div className="soft-card">
							<img src={data_center} alt="desktop" />
							<h4>{T("infrastructure.card.title1")}</h4>
							<Link to="/infrastructure-details/data" className='center  h4'><img src={arrow_left} style={{ transform: 'rotate(180deg) translateY(-25px)', width: '30px' }} alt="arrow-left" />{T("title.learn_more")}</Link>
						</div>
					</Carousel>
				</ScrollAnimation>
			</div>
			<div className="section-2">
				<div className="container">
					<div className="row">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke'>{T("title.fun_fact")}</h3>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("title.fun_fact")}</h3>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row center">
						<div className="col-lg-3 col-6">
							<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
								<div className="fact-card">
									<h3>500</h3>
									<img src={smile} alt="desktop" />
									<p className='text-primary h4'>{T("infrastructure.fact.title1")}</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-6">
							<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
								<div className="fact-card">
									<h3>125</h3>
									<img src={code} alt="desktop" />
									<p className='text-primary h4'>{T("infrastructure.fact.title2")}</p>

								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-6">
							<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
								<div className="fact-card">
									<h3>250k</h3>
									<img src={coffee} alt="desktop" />
									<p className='text-primary h4'>{T("infrastructure.fact.title3")}</p>

								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-3 col-6">
							<ScrollAnimation animateIn="slideInUp" animateOut="fadeOutUp">
								<div className="fact-card">
									<h3>10</h3>
									<img src={trophy} alt="desktop" />
									<p className='text-primary h4'>{T("infrastructure.fact.title4")}</p>

								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-3">
				<div className="container">
					<div className="row center justify">
						<div className="col-12" style={{ position: 'relative' }}>
							<h3 className='h2 text-stroke'>{T("title.newsletter")}</h3>
							<h3 className='text-primary h2 text-center' style={{ zIndex: 2 }}>{T("title.newsletter")}</h3>
						</div>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<h3 className='text-center'>{T("solutions.newsletter.desc")}</h3>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center">
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
			<div>
				<img src={ellipse1} className="ellipse ellipse1" alt='' />
				<img src={ellipse2} className="ellipse ellipse2" alt='' />
			</div>
		</div>
	)
};

export default Infrastructure;