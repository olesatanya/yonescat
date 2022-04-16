import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import '../../../assets/css/animate.min.css'
import '../../../assets/css/solution_details.css'
import Footer from '../../Layout/footer'
import Header from '../../Layout/header'
import useStore from '../../../useStore'

interface MsgType {
	email: string
}


const Hosting_domain = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	return (
		<div className="solution-details">
			<Header type="hosting" subpage={T("hosting.card9.title")} />
			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary  mr3 ml3 '> {T("hosting.domain.text1")}</p>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("hosting.domain.text2")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold mr3 ml3 '>{T("hosting.domain.text3")}</p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("hosting.domain.text4")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("hosting.domain.text5")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3 '> {T("hosting.domain.text6")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3 '>  {T("hosting.domain.text7")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3'> {T("hosting.domain.text8")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3'> {T("hosting.domain.text9")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3 '> {T("hosting.domain.text10")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary   mr3 ml3 '> {T("hosting.domain.text11")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3 '> {T("hosting.domain.text12")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3 '>{T("hosting.domain.text13")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3 '>{T("hosting.domain.text14")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  bold  mr3 ml3 '>{T("hosting.domain.text15")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary   mr3 ml3 '>{T("hosting.domain.text16")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3 '>{T("hosting.domain.text17")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3 '>{T("hosting.domain.text18")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3 '>{T("hosting.domain.text19")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3'>{T("hosting.domain.text20")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3 '>{T("hosting.domain.text21")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3 '>{T("hosting.domain.text22")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3'>{T("hosting.domain.text23")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3 '>{T("hosting.domain.text24")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text   mr3 ml3'>{T("hosting.domain.text25")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary   mr3 ml3'>{T("hosting.domain.text26")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("hosting.domain.text27")}</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	)
};

export default Hosting_domain;