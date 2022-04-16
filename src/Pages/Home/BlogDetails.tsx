import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/blog_details.css'
import Footer from '../Layout/footer'


import useStore from '../../useStore'
// import { tips, validateEmail, validateUsername } from '../../util'
import SelectInput from '../../components/SelectInput'
import SideMenu from '../Layout/sidemenu'


import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import phone from '../../assets/img/phone.svg'
import password from '../../assets/img/password.webp'
import home from '../../assets/img/home.webp';
import arrow_left from '../../assets/img/arrow_left.svg'
import share from '../../assets/img/share-alt.svg';
import eye from '../../assets/img/eye.webp';
import clock from '../../assets/img/clock-o.webp';
import header_back from '../../assets/img/blog_header.webp';
import calendar from '../../assets/img/calendar-check-o.webp';
import group from '../../assets/img/group.webp';
import images from '../../assets/img/images.png';
import fabio from '../../assets/img/fabio.webp';
import relate from '../../assets/img/section_3.webp';


interface MsgType {
	name: string
	email: string
	website: string
	showSideMenu: boolean
}

const Blog_Details = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: '',
		name: '',
		website: '',
		showSideMenu: false
	})

	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	// const submit = async () => {
	// 	const { email, name, website } = state
	// 	if (email === '' || !validateEmail(email)) {
	// 		tips("Invalid e-mail")
	// 		return
	// 	}
	// 	if (name === '' || !validateUsername(name)) {
	// 		tips("Invalid name")
	// 		return
	// 	}
	// 	update({ loading: true })
	// 	// const res = await call("submit", { email, password });
	// 	// if (res) {
	// 	tips("Success")
	// 	// }
	// 	// update({ loading: false })
	// 	setTimeout(() => {
	// 		update({ loading: false })
	// 	}, 2000);
	// }

	React.useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	return (
		<div className="blog-details">
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
								<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)', top: '-20%' }}>{T("menu.contactus")}</h3>
								<h1 className='text-light h1 title' style={{ zIndex: 2 }}>{T("menu.contactus")}</h1>
							</div>
						</div>
						<div className="row m0 pb3">
							<div className="col-12" style={{ fontSize: '24px' }}>
								<Link to="/blog"><img src={home} style={{ width: '20px' }} alt={'home'} /></Link>
								<label className='text-light'> / </label>
								<Link to="/blog"><label className='text-primary'> {T("menu.contactus")} </label></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-1">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<div className="progress">
									<div className="progress-bar" >
										<label>30%</label>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row justify mt3 ml3 mr2">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<Link to="/" className='row middle pointer mb3'>
								<img src={arrow_left} style={{ width: '20px', height: '20px' }} alt="back" />
								<b>{T("blog_details.goback")}</b>
							</Link>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<div className='justify'>
								<div className='ml2 justify mb3'>
									<img src={calendar} style={{ width: '20px', height: '20px' }} alt="back" />
									<label className='text-dark ml2'>{T("blog_details.date")}</label>
								</div>
								<div className='ml2 justify mb3'>
									<img src={share} style={{ width: '20px', height: '20px' }} alt="back" />
									<label className='ml2 text-dark'>{T("blog_details.share")}</label>
								</div>
								<div className='ml2 justify mb3'>
									<img src={clock} style={{ width: '20px', height: '20px' }} alt="back" />
									<label className='ml2 text-dark'>{T("blog_details.second")}</label>
								</div>
								<div className='ml2 justify mb3'>
									<img src={eye} style={{ width: '18px', height: '12px' }} alt="back" />
									<label className='ml2 text-dark'>{T("blog_details.view")}</label>
								</div>
							</div>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>There are many variations of passages o Lorem Ipsum available, but the majority have suffered alteation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't  anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<div className="col-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<div className="row center">
									<div className="blog-img-1">
										<div className="blog-img"></div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp"><p className='text-dark mr3 ml3 '>There are many variations of passages o Lorem Ipsum available, but the majority have suffered alteation in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't  anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</p>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center">
							<h3 className='text-dark quote-text'>
								Lorem ipsum dolor site amet, consectutuer adipising elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
							</h3>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center mt3">
							<p className='text-dark mr3 ml3' >
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
							</p>
						</div>
					</ScrollAnimation>
					<div className="row mt3 ">
						<div className="col-lg-4 col-md-12">
							<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
								<img src={images} alt="back" style={{ width: '80%' }} />
							</ScrollAnimation>
						</div>
						<div className="col-lg-8 col-md-12">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<p className='text-dark' >
									There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
								</p>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<ul>
									<li className='text-dark'>Yet this above sewed flirted opened ouch</li>
									<li className='text-dark'>Yet this above sewed flirted opened ouch</li>
									<li className='text-dark'>Yet this above sewed flirted opened ouch</li>
									<li className='text-dark'>Yet this above sewed flirted opened ouch</li>
									<li className='text-dark'>Yet this above sewed flirted opened ouch</li>
								</ul>
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<p className='text-dark' >
									There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
								</p>
							</ScrollAnimation>
						</div>
					</div>

					<div className="row center mt3">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark ml3 mr3' >
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
							</p>
						</ScrollAnimation>
					</div>
					<div className="row mt3">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<img src={group} alt="back" className='blog-img-1' />
						</ScrollAnimation>
					</div>
					<div className="row center mt3">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark ml3 mr3' >
								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of test. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.
							</p>
						</ScrollAnimation>
					</div>
					<div className="container ">
						<div className="row">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<h4 className='text-primary'>{T("blog_details.reply.title")} </h4>
							</ScrollAnimation>
						</div>
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="row"><input type="text" className='w100' placeholder={T("blog_details.reply.name")} /></div>
									<div className="row"><input type="text" className='w100' placeholder={T("blog_details.reply.email")} /></div>
									<div className="row"><input type="text" className='w100' placeholder={T("blog_details.reply.website")} /></div>
									<div className="row mt2"><button className='btn-yo' style={{right:0}}>{T("blog_details.reply.send")}</button></div>
								</div>
								<div className="col-lg-3 col-md-6">
									<textarea style={{ borderRadius: '5px', height: '65%', width: '100%' }} />
								</div>
							</div>
						</ScrollAnimation>
						<ScrollAnimation animateIn="flipInX" animateOut="fadeOutUp">
							<div className="row justify">
								<div className="next-link previous">
									<div className="row middle center">
										<img src={arrow_left} style={{ width: '50px', height: '50px' }} alt="back" />
										<label>{T("blog_details.previous")}</label>
									</div>
								</div>
								<div className="next-link next">
									<div className="row middle center">
										<label>{T("blog_details.next")}</label>
										<img src={arrow_left} style={{ width: '50px', transform: 'rotate(180deg)', height: '50px' }} alt="back" />
									</div>
								</div>
							</div>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className="section-2">
				<div className="container">
					<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
						<div className="row center">
							<h3 className='text-stroke h2 title'>{T("blog_details.related_blog")}</h3>
							<h3 className='text-primary h2 title'>{T("blog_details.related_blog")}</h3>
						</div>
					</ScrollAnimation>
					<div className="row" style={{ paddingBottom: '10em' }}>
						<div className="col-lg-4">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<div className="blog-card">
									<div>
										<img src={fabio} alt="fabio" />
										<span>{T("blog_details.mobileapp")}</span>
									</div>
									<div className="blog-content">
										<div className="row">
											<div className="col-12">
												<div className="row ml0">
													<img src={calendar} alt="calendar" style={{ width: '20px' }} />
													<label>{T("blog_details.date")}</label>
												</div>
												<h5 className='text-dark'>Lorem Ipsum is simply dummy text of the printing</h5>
												<div className="justify">
													<div className="">
														<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.share")}</label>
													</div>
													<div className="">
														<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.second")}</label>
													</div>
													<div className="">
														<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.view")}</label>
													</div>
												</div>
												<div className="row right">
													<Link to="/blogs" className='center'>
														{T("blog_details.readmore")}
														<img src={arrow_left} style={{ width: '30px', transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-4">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<div className="blog-card">
									<div>
										<img src={relate} alt="relate" />
										<span>{T("blog_details.mobileapp")}</span>
									</div>
									<div className="blog-content">
										<div className="row">
											<div className="col-12">
												<div className="row ml0">
													<img src={calendar} alt="calendar" style={{ width: '20px' }} />
													<label>{T("blog_details.date")}</label>
												</div>
												<h5 className='text-dark'>Lorem Ipsum is simply dummy text of the printing</h5>
												<div className="justify">
													<div className="">
														<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.share")}</label>
													</div>
													<div className="">
														<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.second")}</label>
													</div>
													<div className="">
														<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.view")}</label>
													</div>
												</div>
												<div className="row right">
													<Link to="/blogs" className='center'>
														{T("blog_details.readmore")}
														<img src={arrow_left} style={{ width: '30px', transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-lg-4">
							<ScrollAnimation animateIn="flipInY" animateOut="fadeOutUp">
								<div className="blog-card">
									<div>
										<img src={fabio} alt="fabio" />
										<span>{T("blog_details.mobileapp")}</span>
									</div>
									<div className="blog-content">
										<div className="row">
											<div className="col-12">
												<div className="row ml0">
													<img src={calendar} alt="calendar" style={{ width: '20px' }} />
													<label>{T("blog_details.date")}</label>
												</div>
												<h5 className='text-dark'>Lorem Ipsum is simply dummy text of the printing</h5>
												<div className="justify">
													<div className="">
														<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.share")}</label>
													</div>
													<div className="">
														<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.second")}</label>
													</div>
													<div className="">
														<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
														<label>{T("blog_details.view")}</label>
													</div>
												</div>
												<div className="row right">
													<Link to="/blogs" className='center'>
														{T("blog_details.readmore")}
														<img src={arrow_left} style={{ width: '30px', transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu: false })} />
		</div >
	)
};

export default Blog_Details;