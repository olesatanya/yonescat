import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/blog.css'
import Footer from '../Layout/footer'


import useStore from '../../useStore'
import { tips, validateEmail, validateUsername } from '../../util'
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
import header_back from '../../assets/img/header_back.webp';
import calendar from '../../assets/img/calendar-check-o.webp';
import relate from '../../assets/img/section_3.webp';
import facebook from '../../assets/img/facebook-black.webp';
import twitter from '../../assets/img/twitter-black.webp';
import linkedin from '../../assets/img/linked-black.webp';
import blog_img_1 from '../../assets/img/blog_img_1.webp';
import blog_img_2 from '../../assets/img/blog_img_2.webp';
import blog_img_3 from '../../assets/img/blog_img_3.webp';
import blog_img_4 from '../../assets/img/blog_img_4.webp';
import Rectangle1 from '../../assets/img/Rectangle1.webp';
import Rectangle2 from '../../assets/img/Rectangle2.webp';
import Rectangle3 from '../../assets/img/Rectangle3.webp';
import Rectangle4 from '../../assets/img/Rectangle4.webp';
import play from '../../assets/img/play-circle.svg';
import subscribe from '../../assets/img/subscribe.webp';


interface MsgType {
	name: string
	email: string
	website: string
	showSideMenu: boolean
}

const Blog = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: '',
		name: '',
		website: '',
		showSideMenu: false
	})

	const {  update, T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	const submit = async () => {
		const { email, name } = state
		if (email === '' || !validateEmail(email)) {
			tips("Invalid e-mail")
			return
		}
		if (name === '' || !validateUsername(name)) {
			tips("Invalid name")
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
		<div className="blog">
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
								<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)', top: '-20%' }}>{T("blog.stroke_text")}</h3>
								<h1 className='text-light h1 title' style={{ zIndex: 2 }}>{T("blog.stroke_text")}</h1>
							</div>
						</div>
						<div className="row m0 pb3">
							<div className="col-12" style={{ fontSize: '24px' }}>
								<Link to="/"><img src={home} style={{ width: '20px', height:"20px" }} alt={'home'} /></Link>
								<label className='text-light'> / </label>
								<Link to="/"><label className='text-primary'> {T("blog.stroke_text")} </label></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-1">
				<div className="container">
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
						<div className="row center">
							<div className="row center">
								<h3 className='text-stroke h2 title'>{T("blog_details.related_blog")}</h3>
								<h3 className='text-primary h2 title'>{T("blog_details.related_blog")}</h3>
							</div>
						</div>
					</ScrollAnimation>
					<div className="row">
						<div className="col-xl-8 col-lg-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<Link to="/blog-details">
									<div className="blog-card">
										<div>
											<img src={relate} alt="relate" />
											<span className='text-light'>{T("blog_details.mobileapp")}</span>
										</div>
										<div className="blog-content">
											<div className="row">
												<div className="col-12">
													<div className="row ml0">
														<img src={calendar} alt="calendar" style={{ width: '20px' }} />
														<label>{T("blog_details.date")}</label>
													</div>
													<h5 className='text-dark'>{T("blog.subscribe.desc")}</h5>
													<div className="row">
														<div className="justify pl3 ml3	">
															<div className="mr3">
																<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																<label>{T("blog_details.share")}</label>
															</div>
															<div className="mr3">
																<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																<label>{T("blog_details.second")}</label>
															</div>
															<div className="mr3">
																<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
																<label>{T("blog_details.view")}</label>
															</div>
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
								</Link>
							</ScrollAnimation>
						</div>
						<div className="col-xl-4 col-lg-12">
							<div className="category-panel">
								<div className="row mt3 middle">
									<div className="col-lg-7 col-md-12"><hr /></div>
									<div className="col-lg-5 col-md-12">
										<h3 className='text-primary'>{T("blog.category")}</h3>
									</div>
								</div>
								<div className="row middle">
									<div className="col-lg-3 col-md-12"><hr /></div>
									<div className="col-lg-9 col-md-12">
										<h4 className='text-dark m0 p1'>{T("blog.category.item1")}</h4>
									</div>
								</div>
								<div className="row middle">
									<div className="col-lg-3 col-md-12"><hr /></div>
									<div className="col-lg-9 col-md-12">
										<h4 className='text-dark m0 p1'>{T("blog.category.item2")}</h4>
									</div>
								</div>
								<div className="row middle">
									<div className="col-lg-3 col-md-12"><hr className='active' /></div>
									<div className="col-lg-9 col-md-12">
										<h4 className='text-primary m0 p1'>{T("blog.category.item3")}</h4>
									</div>
								</div>
								<div className="row middle">
									<div className="col-lg-3 col-md-12"><hr /></div>
									<div className="col-lg-9 col-md-12">
										<h4 className='text-dark m0 p1'>{T("blog.category.item4")}</h4>
									</div>
								</div>
								<div className="row mt3 middle">
									<div className="col-lg-6 col-md-12"><hr /></div>
									<div className="col-lg-6 col-md-12">
										<h3 className='text-primary'>{T("blog.follow")}</h3>
									</div>
								</div>
								<div className="row middle center">
									<div className="col-lg-7">
										<img src={facebook} className="m2 pr3" />
										<img src={twitter} className="m2 pr3" />
										<img src={linkedin} className="m2 pr3" />
									</div>
									<div className="col-lg-5"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt5">
						<div className="col-xl-8 col-lg-12">
							<div className="row">
								<div className="col-12">
									<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
										<Link to="blog-details">
											<div className="blog-card-2">
												<div>
													<img src={blog_img_1} alt="relate" />
													<span className='text-light'>{T("blog_details.mobileapp")}</span>
												</div>
												<div className="blog-content">
													<div className="row">
														<div className="col-12">
															<div className="row ml0">
																<img src={calendar} alt="calendar" style={{ width: '20px' }} />
																<label>{T("blog_details.date")}</label>
															</div>
															<h5 className='text-dark'>{T("blog.subscribe.desc")}</h5>
															<div className="row">
																<div className="justify">
																	<div className="ml3 mr3">
																		<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.share")}</label>
																	</div>
																	<div className="mr3">
																		<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.second")}</label>
																	</div>
																	<div className="mr3">
																		<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.view")}</label>
																	</div>
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
										</Link>
									</ScrollAnimation>

									<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
										<Link to="/blog-details" >
											<div className="blog-card-2">
												<div>
													<img src={blog_img_2} alt="blog_img_2" />
													<span className='text-light'>{T("blog_details.mobileapp")}</span>
												</div>
												<div className="blog-content">
													<div className="row">
														<div className="col-12">
															<div className="row ml0">
																<img src={calendar} alt="calendar" style={{ width: '20px' }} />
																<label>{T("blog_details.date")}</label>
															</div>
															<h5 className='text-dark'>{T("blog.subscribe.desc")}</h5>
															<div className="row">
																<div className="justify">
																	<div className="ml3 mr3">
																		<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.share")}</label>
																	</div>
																	<div className="mr3">
																		<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.second")}</label>
																	</div>
																	<div className="mr3">
																		<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.view")}</label>
																	</div>
																</div>
															</div>
															<div className="row right">
																<Link to="/blog-details" className='center'>
																	{T("blog_details.readmore")}
																	<img src={arrow_left} style={{ width: '30px', transform: 'rotate(180deg) translateY(-10px)' }} alt="arrow-left" />
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</Link>
									</ScrollAnimation>

									<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
										<Link to="/blog-details">
											<div className="blog-card-2">
												<div>
													<img src={blog_img_3} alt="blog_img_3" />
													<span className='text-light'>{T("blog_details.mobileapp")}</span>
												</div>
												<div className="blog-content">
													<div className="row">
														<div className="col-12">
															<div className="row ml0">
																<img src={calendar} alt="calendar" style={{ width: '20px' }} />
																<label>{T("blog_details.date")}</label>
															</div>
															<h5 className='text-dark'>{T("blog.subscribe.desc")}</h5>
															<div className="row">
																<div className="justify">
																	<div className="ml3 mr3">
																		<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.share")}</label>
																	</div>
																	<div className="mr3">
																		<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.second")}</label>
																	</div>
																	<div className="mr3">
																		<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.view")}</label>
																	</div>
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
										</Link>
									</ScrollAnimation>

									<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
										<Link to="/blog-details">
											<div className="blog-card-2">
												<div>
													<img src={blog_img_4} alt="blog_img_4" />
													<span className='text-light'>{T("blog_details.mobileapp")}</span>
												</div>
												<div className="blog-content">
													<div className="row">
														<div className="col-12">
															<div className="row ml0">
																<img src={calendar} alt="calendar" style={{ width: '20px' }} />
																<label>{T("blog_details.date")}</label>
															</div>
															<h5 className='text-dark'>{T("blog.subscribe.desc")}</h5>
															<div className="row">
																<div className="justify">
																	<div className="ml3 mr3">
																		<img src={share} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.share")}</label>
																	</div>
																	<div className="mr3">
																		<img src={clock} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.second")}</label>
																	</div>
																	<div className="mr3">
																		<img src={eye} style={{ width: '20px', height: '15px', marginRight: '5px' }} alt="back" />
																		<label>{T("blog_details.view")}</label>
																	</div>
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
										</Link>
									</ScrollAnimation>
									<div className="row center mt3">
										<button className='btn-yo'>{T("btn.load_more")}</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-12">
							<div className="row center p2">
								<div className="col-12">
									<div className="row mt3 middle">
										<div className="col-lg-3 col-md-12"><hr /></div>
										<div className="col-lg-9 col-md-12">
											<h3 className='text-primary'>{T("blog.recent_video")}</h3>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-6 col-md-12">
											<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
												<div>
													<img src={Rectangle1} className="video-img" />
													<img src={play} className="play-img" />
												</div>
											</ScrollAnimation>
										</div>
										<div className="col-lg-6 col-md-12">
											<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
												<div>
													<img src={Rectangle2} className="video-img" />
													<img src={play} className="play-img" />
												</div>
											</ScrollAnimation>
										</div>
										<div className="col-lg-6 col-md-12">
											<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
												<div>
													<img src={Rectangle3} className="video-img" />
													<img src={play} className="play-img" />
												</div>
											</ScrollAnimation>
										</div>
										<div className="col-lg-6 col-md-12">
											<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
												<div>
													<img src={Rectangle4} className="video-img" />
													<img src={play} className="play-img" />
												</div>
											</ScrollAnimation>
										</div>
									</div>
									<div className="row mt3 middle">
										<div className="col-lg-3 col-md-12"><hr /></div>
										<div className="col-lg-9 col-md-12">
											<h3 className='text-primary'>{T("blog.get_touch")}</h3>
										</div>
									</div>
									<div className="row">
										<input type="text" placeholder={T("blog_details.reply.name")} className="w100" />
									</div>
									<div className="row">
										<textarea rows={3} placeholder={T("contact.sec2.message")} className="w100" />
									</div>
									<div className="row mt3">
										<button className='btn-yo'>
											{T("blog_details.reply.send")}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-2">
				<div className="container">
					<div className="row middle">
						<div className="col-xl-6 col-md-12">
							<div className="row">
								<div className="col-12 ">
									<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
										<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.5)', top: '-10%' }}>{T("blog.subscribe.title")}</h3>
									</ScrollAnimation>
									<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
										<h1 className='text-primary h1 title' style={{ zIndex: 2 }}>{T("blog.subscribe.title")}</h1>
									</ScrollAnimation>
									<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
										<h5 className='text-dark'>
											{T("blog.subscribe.desc")}
										</h5>
									</ScrollAnimation>
									<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
										<div className="row middle col-12">
											<input type="text" style={{ border: 'none!important', padding: '1em 2em' }} placeholder={T("login.place.email")} className="w100 pl3" onChange={e => updateStatus({ email: e.target.value })} />
											<button className='btn-yo' style={{ padding: '17px 1.4em', position: 'absolute', right: '0', top: '8%' }} onClick={() => { submit() }}>{T("title.subscribe")}</button>
										</div>
									</ScrollAnimation>
								</div>
							</div>
						</div>
						<div className="col-xl-6 col-md-12">
							<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
								<img src={subscribe} className="m0 p0" />
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

export default Blog;