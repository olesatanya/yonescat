import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/projects.css'
import '../../assets/css/animate.min.css'

import Footer from '../Layout/footer'
import useStore from '../../useStore'
import SelectInput from '../../components/SelectInput'
import SideMenu from '../Layout/sidemenu'
import Carousel from '../../components/Carousel'
import '../../components/carousel.css'



import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import phone from '../../assets/img/phone.svg'
import password from '../../assets/img/password.webp'
import home from '../../assets/img/home.webp';
import header_back from '../../assets/img/header_back.webp';
import project_1 from '../../assets/img/project_1.webp';
import project_2 from '../../assets/img/project_2.webp';
import project_3 from '../../assets/img/project_3.webp';
import project_4 from '../../assets/img/project_4.webp';
import project_back from '../../assets/img/product-man.webp';
import server_1 from '../../assets/img/server-black.svg';
import yo from '../../assets/img/yo-black.svg';

interface MsgType {
	name: string
	role: string
	company: string
	details: string
	file: any
	showSideMenu: boolean
	headerBack: string
}

const Projects = () => {
	const [state, setStates] = React.useState<MsgType>({
		name: '',
		role: '',
		company: '',
		details: '',
		file: null,
		showSideMenu: false,
		headerBack: 'transparent'
	})

	React.useEffect(() => {
		const onHandler = (ev) => {
			if (window.scrollY > 250) {
				setStates({ ...state, headerBack: 'rgba(0,0,0,0.7)' });
			} else {
				setStates({ ...state, headerBack: 'transparent' })
			}
		}
		window.addEventListener('scroll', onHandler);
		return () => window.removeEventListener('scroll', onHandler)
	})
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const items = ['one', 'two', 'three', 'four', 'five']

	const setting = {
		dragSpeed: 1.25,
		itemWidth: 300,
		itemSideOffsets: 15,
	}


	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	React.useEffect(() => {
		const onHandler = (ev) => {
			if (window.scrollY > 250) {
				setStates({ ...state, headerBack: 'rgba(0,0,0,0.7)' });
			} else {
				setStates({ ...state, headerBack: 'transparent' })
			}
		}
		window.addEventListener('scroll', onHandler);
		return () => window.removeEventListener('scroll', onHandler)
	})
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='projects'>
			<div className="header-panel page-header" style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: state.headerBack !== "transparent" ? "fixed" : "relative", backgroundImage: state.headerBack === "transparent" ? `url(${header_back})` : '' }}>
				<div className="container">
					<header>
						<div className='justify'>
							<div className='justify'>
								<Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
								<div style={{ width: '140px' }} >
									<SelectInput name="Select State" type="language" valueIndex={lang} items={["English", "Arabic", "Chinese"]} onValueChange={(value) => { changeLang(value) }} />
								</div>
							</div>
							<div className='header-menu-bar ml5'>
								<Link to="/solutions" className="header-menu "><span></span>{T("menu.solutions")}</Link>
								<Link to="/infrastructure" className="header-menu "><span></span>{T("menu.infrastructure")}</Link>
								<Link to="/hosting" className="header-menu"><span></span>{T("menu.hosting")}</Link>
								<Link to="/contactus" className="header-menu"><span></span>{T("menu.support")}</Link>
							</div>
							<div></div>
							<div className='justify'>
								<a href="tel:08002289090" className='header-phone justify' >
									<img src={phone} className="mr2  header-menu-icon" alt={'phone'} />
									<h5 className='text-light'>800 228 9090</h5>
								</a>
								<Link to="/login" className='btn-login btn-yo'>{T("login.btn.login")}</Link>
								<Link to="/"><img src={password} className="btn-login header-menu-icon" alt={'login'} /></Link>
								<span style={{ cursor: 'pointer' }} onClick={() => { updateStatus({ showSideMenu: true }) }}><img src={menu} className="header-menu-icon" alt={'menu'} /></span>
							</div>
						</div>
						<hr style={{ borderTop: '1px solid var(--font-black-color)', display: state.headerBack !== "transparent" ? "none" : "block" }} />
					</header>
					<div className="container" style={{ display: state.headerBack !== "transparent" ? "none" : "block", }}>
						<div className="row p3">
							<div className="col-12 ">
								<h3 className='h3 text-stroke left'>{T("menu.solutions")}</h3>
								<h3 className='text-light h3 ' style={{ zIndex: 2 }}>{T("menu.solutions")}</h3>
							</div>
						</div>
						<div className="row m0 pb3">
							<div className="col-12" style={{ fontSize: '24px' }}>
								<Link to="/"><img src={home} style={{ width: '20px' }} alt={'home'} /></Link>
								<label className='text-light'> / </label>
								<Link to="/solutions"><label className='text-primary'> {T("menu.solutions")} </label></Link>
							</div>
						</div>
						<img src={yo} alt="yo-back" className='yo-back' />
					</div>
				</div>
			</div>
			<div className="section-1">
				<div className="container">
					<div className="row">
						<div className="col-12 ">
							<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{T("project.recent")}</h3>
							<h1 className='text-primary h1 title' style={{ zIndex: 2 }}>{T("project.recent")}</h1>
						</div>
					</div>
					<ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutUp">
						<Carousel _data={items} {...setting}>
							<div className="soft-card" style={{ background: `url(${project_4})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_3})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_2})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_1})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_4})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_3})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_2})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
							<div className="soft-card" style={{ background: `url(${project_1})` }}>
								<div className="overlay-back"></div>
								<h4 className='text-light mt5 pt5'>{T("project.softcard1.title")}</h4>
								<h3 className='text-light'>{T("project.softcard1.desc")}</h3>
								<button className='btn-transparent'>{T("title.learn_more")}</button>
							</div>
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
			<div className="section-2">
				<div className="container">
					<div className="justify">
						<div>
							<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{T("project.allproject")}</h3>
							<h1 className='text-primary h1 title' style={{ zIndex: 2 }}>{T("project.allproject")}</h1>
						</div>
						<div className='row'>
							<button className='btn-white'>{T("project.search.type1")}</button>
							<button className='btn-yo'>{T("project.search.type2")}</button>
							<button className='btn-white'>{T("project.search.type3")}</button>
							<button className='btn-white'>{T("project.search.type4")}</button>
						</div>
					</div>
					<div className="row center">
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_4})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_2})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_3})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_2})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_1})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_4})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_4})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_2})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12 p1">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="soft-card mt3" style={{ background: `url(${project_3})` }}>
									<div className="overlay-back"></div>
									<h4 className='text-light mt5 pt5'>{T("project.softcard2.title")}</h4>
									<h3 className='text-light'>{T("project.softcard2.desc")}</h3>
									<button className='btn-transparent'>{T("title.learn_more")}</button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<div className="section-3 middle">
				<div className="sec3-img">
					<img src={project_back} alt="sec3-img" style={{height:'100%'}} />
				</div>
				<div className="start-pan">
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center">
							<div className="col-8">
								<h2 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{T("project.sec3.title")}</h2>
								<h1 className='text-primary h1 title' style={{ zIndex: 2 }}>{T("project.sec3.title")}</h1>
								<div className="row">
									<p className='text-primary'>{T("project.sec3.yourdetail")}</p>
								</div>
								<div className="row">
									<input type="text" className='w100 no-border' placeholder={T("project.sec3.name")} />
								</div>
								<div className="row">
									<input type="text" className='w100 no-border' placeholder={T("project.sec3.role")} />
								</div>

								<div className="row mt3">
									<p className='text-primary'>{T("project.sec3.projectdetail")}</p>
								</div>
								<div className="row">
									<input type="text" className='w100 no-border' placeholder={T("project.sec3.company")} />
								</div>
								<div className="row">
									<textarea placeholder={T("project.sec3.projectdetail")} className='w100 no-border' rows={4} />
								</div>
								<div className="row">
									<p className='text-primary'>{T("project.sec3.attach")}</p>
								</div>
								<div className="row">
									<div>
										<input type="file" className='w100' style={{ display: 'none' }} />
										<div className='input-file' />
									</div>
								</div>
								<div className="row">
									<button className='btn-yo' >{T("project.sec3.submit")} </button>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
			<div className="section-4">
				<div className="container">
					<div className="row">
						<div className="col-12 ">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							</ScrollAnimation>
								<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgb(199 199 199 / 50%)' }}>{T("project.sec4.title")}</h3>
								<h1 className='text-primary h1 title' style={{ zIndex: 2 }}>{T("project.sec4.title")}</h1>
						</div>
					</div>
					<div className="row center">
						<div className="col-xl-4 col-lg-6 col-md-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="buy-card">
									<img src={server_1} alt="server-1" />
									<h3 className='text-dark'>{T("project.sec4.buycard1.title")}</h3>
									<p className='text-dark'>{T("project.sec4.buycard1.desc")}</p>
									<button>{T("project.sec4.buynow")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="buy-card active">
									<img src={server_1} alt="server-1" />
									<h3 className='text-dark'>{T("project.sec4.buycard2.title")}</h3>
									<p className='text-dark'>{T("project.sec4.buycard2.desc")}</p>
									<button>{T("project.sec4.buynow")}</button>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="buy-card">
									<img src={server_1} alt="server-1" />
									<h3 className='text-dark'>{T("project.sec4.buycard3.title")}</h3>
									<p className='text-dark'>{T("project.sec4.buycard3.desc")}</p>
									<button>{T("project.sec4.buynow")}</button>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu: false })} />
		</div>
	)
};

export default Projects;