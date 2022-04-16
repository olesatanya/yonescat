import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/knowledge.css'

import Footer from '../Layout/footer'
import SideMenu from '../Layout/sidemenu'
import useStore from '../../useStore'
import SelectInput from '../../components/SelectInput'

import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import phone from '../../assets/img/phone.svg'
import password from '../../assets/img/password.webp'
import home from '../../assets/img/home.webp';
import header_back from '../../assets/img/header_back.webp';


interface Props {
	showSideMenu: boolean
	type: number
}
const Knowledge = () => {
	const [state, setStates] = React.useState<Props>({
		showSideMenu: false,
		type: 1
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className="knowledge">
			<div className="header-panel" style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: 'relative', backgroundImage: `url(${header_back})` }}>
				<div className="container-sm">
					<header>
						<div className='justify'>
							<div className='justify'>
								<Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
								<div style={{ width: '140px' }} >
									<SelectInput name="Select State" type="language" valueIndex={lang} items={["English", "Arabic", "Chinese"]} onValueChange={(value) => { changeLang(value) }} />
								</div>
							</div>
							<div className='header-menu-bar ml5'>
								<Link to="/solutions" className="header-menu"><span></span>{T("menu.solutions")}</Link>
								<Link to="/infrastructure" className="header-menu "><span></span>{T("menu.infrastructure")}</Link>
								<Link to="/hosting" className="header-menu "><span></span>{T("menu.hosting")}</Link>
								<Link to="/contactus" className="header-menu"><span></span>{T("menu.support")}</Link>
							</div>
							<div></div>
							<div className='justify'>
								<a href="tel:08002289090" className='header-phone justify' >
									<img src={phone} className="mr2  header-menu-icon" alt={'phone'} />
									<h4 className='text-light'>800 228 9090</h4>
								</a>
								<Link to="/login" className='btn-login btn-yo'>{T("login.btn.login")}</Link>
								<Link to="/"><img src={password} className="btn-login header-menu-icon" alt={'login'} /></Link>
								<span style={{ cursor: 'pointer' }} onClick={() => { updateStatus({ showSideMenu: true }) }}><img src={menu} className="header-menu-icon" alt={'menu'} /></span>
							</div>
						</div>
					</header>
					<hr style={{ borderTop: '1px solid var(--font-black-color)' }} />
					<div className="container-sm">
						<div className="row">
							<div className="col-12 ">
								<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>{T("menu.knowledge")}</h3>
								<h1 className='text-light h1 title' style={{ zIndex: 2 }}>{T("menu.knowledge")}</h1>
							</div>
						</div>
						<div className="row m0 pb3">
							<div className="col-12" style={{ fontSize: '24px' }}>
								<Link to="/"><img src={home} style={{ width: '20px' }} alt={'home'} /></Link>
								<label className='text-light'> / </label>
								<Link to="/"><label className='text-primary'> {T("menu.knowledge")} </label></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-1">
				<div className="container">
					<div className="row mt5">
						<div className="col-xl-3 col-md-12">
							<ScrollAnimation animateIn="slideInLeft" animateOut="fadeOutUp">
								<div className='type-pan'>
									<div className={`knowledge-list-item ${state.type === 1 ? 'active' : ''}`} onClick={() => { updateStatus({ type: 1 }) }}>{T("knowledge.item.title1")}	</div>
									<div className={`knowledge-list-item ${state.type === 2 ? 'active' : ''}`} onClick={() => { updateStatus({ type: 2 }) }}>{T("knowledge.item.title2")}	</div>
									<div className={`knowledge-list-item ${state.type === 3 ? 'active' : ''}`} onClick={() => { updateStatus({ type: 3 }) }}>{T("knowledge.item.title3")}	</div>
									<div className={`knowledge-list-item ${state.type === 4 ? 'active' : ''}`} onClick={() => { updateStatus({ type: 4 }) }}>{T("knowledge.item.title4")}	</div>
									<div className={`knowledge-list-item ${state.type === 5 ? 'active' : ''}`} onClick={() => { updateStatus({ type: 5 }) }}>{T("knowledge.item.title5")}	</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-xl-9 col-md-12">
						<div className="desc-pan">
								<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
									<div className="knowledge-title">
										{T(`knowledge.type${state.type}.item1.title`)}
									</div>
									<div className="knowledge-desc">
										{T(`knowledge.type${state.type}.item1.desc`)}
									</div>
								</ScrollAnimation>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu: false })} />
		</div>
	)
};

export default Knowledge;