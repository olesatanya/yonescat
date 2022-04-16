

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

const Solution_Data = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	return (
		<div className="solution-details">

			<Header type="solutions" subpage={T("solutions.card.title4")} />
			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<b className='text-primary  mr3 ml3 '> {T("solution.data.text1")} </b>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 bold '>{T("solution.data.text2")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>
								{T("solution.data.text3")}
							</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.data.text4")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3  '>{T("solution.data.text5")} </p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold  mr3 ml3 '>{T("solution.data.text6")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark bold mr3 ml3 '> {T("solution.data.text7")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text8")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text9")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '> {T("solution.data.text10")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text11")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text12")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text13")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text14")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.data.text15")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text16")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text17")}
							</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text18")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>   {T("solution.data.text19")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text20")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("solution.data.text21")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.data.text22")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text23")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text24")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.data.text25")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("solution.data.text26")} </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text27")} </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.data.text28")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text29")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.data.text30")} </p>
						</ScrollAnimation>
					</div>


					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.data.text31")} </p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	)
};

export default Solution_Data;