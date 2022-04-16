/// Yonescat Services in Decentralized Systems

import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../assets/css/animate.min.css'
import '../../assets/css/solution_details.css'
import Footer from '../Layout/footer'
import SideMenu from '../Layout/sidemenu'


import useStore from '../../useStore'
// import { tips, validateEmail, validateUsername } from '../../util'
import SelectInput from '../../components/SelectInput'


import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import phone from '../../assets/img/phone.svg'
import password from '../../assets/img/password.webp'
import home from '../../assets/img/home.webp';
import header_back from '../../assets/img/blog_header.webp';
// import solution_1 from '../../assets/img/solution-1.webp';
// import solution_2 from '../../assets/img/solution-2.webp';
// import solution_3 from '../../assets/img/solution-3.webp';
// import solution_4 from '../../assets/img/solution-4.webp';
// import solution_5 from '../../assets/img/solution-5.webp';
// import play from '../../assets/img/play-circle.svg';

interface MsgType {
	email: string
	switchChecked: boolean
	faqOpen1: boolean
	faqOpen2: boolean
	faqOpen3: boolean
	faqOpen4: boolean
	showSideMenu: boolean
}

const Blog_Details = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: '',
		switchChecked: false,
		faqOpen1: true,
		faqOpen2: false,
		faqOpen3: false,
		faqOpen4: true,
		showSideMenu: false
	})
	const {  T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	

	return (
		<div className="solution-details">
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
								<Link to="/solutions" className="header-menu active"><span></span>{T("menu.solutions")}</Link>
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
								<h3 className='text-stroke h2 title' style={{ zIndex: 0, WebkitTextStroke: '1px rgba(255,255,255,0.1)', top: '-20%' }}>{T("solution.detail.title")}</h3>
								<h1 className='text-light h1 title' style={{ zIndex: 2 }}>{T("solution.detail.title")}</h1>
							</div>
						</div>
						<div className="row m0 pb3">
							<div className="col-12" style={{ fontSize: '24px' }}>
								<Link to="/blog"><img src={home} style={{ width: '20px' }} alt={'home'} /></Link>
								<label className='text-light'> / </label>
								<Link to="/blog"><label className='text-primary'> {T("solution.detail.title")} </label></Link>
								<label className='text-light'> / </label>
								<Link to="/blog"><label className='text-primary'> {T("solution.detail.subtitle")} </label></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<b className='text-primary  mr3 ml3 '>Yonescat Services in Decentralized Systems </b>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Secure, trustless, rapid, scalable, and stable; Yonescat delivers effective dApps across verticals and industries.</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Decentralized systems are gaining widespread attention with the advent of blockchain technology, such as Ethereum, Bitcoin, PolkaDot, Zeus coin and other cryptocurrencies. These systems use the characteristics of cryptography, chains, wallets, tokens and coins to reach an agreement on the financial transactions based on the smart contract system. The result is a verifiable distributed ledger that eliminates the need for central banking authorities. These ledgers are distributed to all cryptocurrency users, but the blockchain itself is decentralized.

							</p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary  mr3 ml3 '>Our team provide in-depth solutions to create stable Decentralized applications.  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>At Yonescat, we relish the new modelling for building massively scalable and profitable applications that could emerge with the modern world, cutting-edge technologies.   </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>We serve businesses through scarce-asset models, stored ledgers, and peer-to-peer technologies within the Decentralized dilemma. These features assist us at starting point for building a new type of software called Decentralized applications, short for dApps. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Yonescat - Decentralized and dApps</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Blockchain can no longer have a revolutionary impact on finance, but it is a reality because our dApps are already bringing value and benefits to consumers.  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Decentralized Finance (DeFi) and Decentralized Applications (dApps) allow anyone with an internet connection to participate in a new generation of financial services. Therefore, our DeFi dApps are a formidable alternative to traditional financial services. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Thanks to the reliable, immutable and transparent properties of blockchain, they are becoming more and more popular and difficult to close. Get the transparency of blockchain, most dApps have open source software that users can review and review on their own.
							</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Our projects are protected and promoted by either the Proof of Work (PoW) consensus mechanism, the Proof of Stake (PoS) consensus mechanism, or a combination of both. There are many other types of consensus mechanisms, but these two are the most widely used so we prefer them. Precisely, get a unique way to maintain network security while avoiding centralization issues.  </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Yonescat Provides Private Blockchains for your Business</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Although the original Bitcoin blockchain provided functional democratically without interference or influence from banks or central regulators, personalized blockchain integration can operate within closed parameters.    </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>At Yonescat, we can implement your own blockchain and control the transactions added to the chain. It remains a secure system, but like the traditional banking system, it is based on the trust of decision-makers. Our digital platform provides personalized versions of blockchain technology, such as Ripple, R3 Corda, and Hyperledger Fabric restricting access to transaction data to the third parties involved in the transaction, rather than exposing the data in a public ledger similar to Bitcoin. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Let us legalize Smart Contracts and Decentralized networks for you</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>A "blockchain" is a computer-coded system for chaining unmodifiable and unchangeable, reliable and efficient transactions. IBM stated:</p>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>"Every transaction is recorded as a" block "of data. Each block is connected to the previous and next blocks. Transactions are blocked together in an irreversible chain (blockchain)."</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>A "blockchain" is a computer-coded system for chaining unmodifiable and unchangeable, reliable and efficient transactions. IBM stated:</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>A set of rules (so-called smart contracts) are stored on the blockchain and executed automatically to speed up transactions. Smart contracts can define corporate bond transfer terms, travel insurance payment terms, and more. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Therefore, smart contracts are an agreement between the parties that are entirely contained in the computer code and blockchain. Our distributed ledger platform and Smart contracts are short and focused on paying for more goods and services. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>To be lawfully enforceable, our DeFi and smart contract always meet basic requirements of law. Our standard legal agreements on binding contracts allow businesses to achieve the best of both worlds, faster electronic payments. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Yonescat ensures Tamper-proof system architecture</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>Architecture relies heavily on the needs of a particular decentralized application; we attempt to clarify some of the basic interaction patterns on which these applications are built.  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Our Client ⬌ Ð Platform: Fully decentralized application. </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>The client (browser or mobile application) communicates directly with the distributed platform using Crypto "wallet" and Ledger.
							</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>Our Ð Platform ⬌ Client ⬌ Backend ⬌ Ð Platform: Centralized or semi-centralized application.  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>The client interacts with distributed platforms and servers with little in common. The currencies traded on the exchange are only recorded in traditional databases. Consumers can "replenish" database credits by sending the asset to a specific address, performing some actions in the app and then withdrawing the asset, but keeping everything in connection with it.
							</p>
						</ScrollAnimation>
						<div className="row">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<p className='text-primary mr3 ml3 '>Get our assistance, today! </p>
							</ScrollAnimation>
						</div>
						<div className="row">
							<ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
								<p className='text-dark mr3 ml3 '>At Yonescat, we combine the above approaches. We provide businesses – small to large enterprises – with application that provides various services in exchange for crypto, allowing them to log in, sign information with their crypto identity, and proceed with business modules.
								</p>
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