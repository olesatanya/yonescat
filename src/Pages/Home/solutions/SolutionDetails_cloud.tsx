

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

const Solution_cloud = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	return (
		<div className="solution-details">
			<Header type="solutions" subpage={T("solutions.card.title2")} />
			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '> {T("solution.cloud.text1")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("solution.cloud.text2")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.cloud.text3")}  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.cloud.text4")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.cloud.text5")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '> {T("solution.cloud.text6")}  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.cloud.text7")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '> {T("solution.cloud.text8")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.cloud.text9")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">{T("solution.cloud.text10")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml5 '> {T("solution.cloud.text11")} </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">{T("solution.cloud.text12")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml5 '>{T("solution.cloud.text13")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">{T("solution.cloud.text14")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml5 '>{T("solution.cloud.text15")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark">{T("solution.cloud.text16")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark"> {T("solution.cloud.text17")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark">{T("solution.cloud.text18")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark"> {T("solution.cloud.text19")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark">{T("solution.cloud.text20")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark"> {T("solution.cloud.text21")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark">{T("solution.cloud.text22")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark">{T("solution.cloud.text23")}  </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="item-text text-dark"> {T("solution.cloud.text24")}  </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>{T("solution.cloud.text25")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>{T("solution.cloud.text26")} </p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3   '> {T("solution.cloud.text27")} <br />
							</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	)
};

export default Solution_cloud;