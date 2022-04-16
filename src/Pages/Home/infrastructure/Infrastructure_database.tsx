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

const Infrastructure_database = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	return (
		<div className="solution-details">
			<Header type="infrastructure" subpage={T("infrastructure.card.title3")} />
			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary  mr3 ml3 '> {T("infrastructure.database.text1")}</p>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("infrastructure.database.text2")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("infrastructure.database.text3")}</p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text4")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> {T("infrastructure.database.text5")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> {T("infrastructure.database.text6")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary  item-textmr3 ml3 '>  {T("infrastructure.database.text7")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("infrastructure.database.text8")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '> {T("infrastructure.database.text9")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("infrastructure.database.text10")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("infrastructure.database.text11")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("infrastructure.database.text12")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("infrastructure.database.text13")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("infrastructure.database.text14")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text15")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text16")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text17")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text18")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> {T("infrastructure.database.text19")}</p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("infrastructure.database.text20")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("infrastructure.database.text21")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text22")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text23")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '>{T("infrastructure.database.text24")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '> {T("infrastructure.database.text25")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  mr3 ml3'>{T("infrastructure.database.text26")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text  mr3 ml3'>{T("infrastructure.database.text27")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  item-text mr3 ml3'>{T("infrastructure.database.text28")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  item-text mr3 ml3'>{T("infrastructure.database.text29")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  item-text mr3 ml3'>{T("infrastructure.database.text30")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark  item-text mr3 ml3'>{T("infrastructure.database.text31")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3'>{T("infrastructure.database.text32")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3'>{T("infrastructure.database.text3")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3'>{T("infrastructure.database.text34")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark   mr3 ml3'>{T("infrastructure.database.text35")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold   mr3 ml3'>{T("infrastructure.database.text36")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text37")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold   mr3 ml3'>{T("infrastructure.database.text38")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text39")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold   mr3 ml3'>{T("infrastructure.database.text40")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text41")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold   mr3 ml3'>{T("infrastructure.database.text42")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text43")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary    mr3 ml3'>{T("infrastructure.database.text44")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text45")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text    mr3 ml3'>{T("infrastructure.database.text46")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text    mr3 ml3'>{T("infrastructure.database.text47")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text    mr3 ml3'>{T("infrastructure.database.text48")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary    mr3 ml3'>{T("infrastructure.database.text49")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark    mr3 ml3'>{T("infrastructure.database.text50")}</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	)
};

export default Infrastructure_database;