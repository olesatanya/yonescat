

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
const Solution_mobile = () => {
	const [state, setStates] = React.useState<MsgType>({
		email: ''
	})
	const { T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })


	return (
		<div className="solution-details">
			<Header type="solutions" subpage={T("solutions.card.title3")} />

			<div className="section-1">
				<div className="container pl3 pr3">
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<b className='text-primary  mr3 ml3 '>  {T("solution.ecommerce.text1")}</b>
						</ScrollAnimation>
					</div>
					<div className="row center">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 bold'>  {T("solution.ecommerce.text2")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.ecommerce.text3")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.ecommerce.text4")}</p>
						</ScrollAnimation>
					</div>
					<div className="row ">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary  mr3 ml3 '>  {T("solution.ecommerce.text5")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>   {T("solution.ecommerce.text6")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-primary mr3 ml3 '>  {T("solution.ecommerce.text7")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark item-text ">  {T("solution.ecommerce.text8")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1969 - </b>    {T("solution.ecommerce.text9")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1979 - </b>    {T("solution.ecommerce.text10")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1982 - </b>   {T("solution.ecommerce.text11")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1992 - </b>   {T("solution.ecommerce.text12")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1994 - </b>    {T("solution.ecommerce.text13")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1995 - </b>    {T("solution.ecommerce.text14")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1998 - </b>    {T("solution.ecommerce.text15")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>1999 - </b>    {T("solution.ecommerce.text16")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2000 - </b>   {T("solution.ecommerce.text17")}</p>
						</ScrollAnimation>
					</div>



					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2004 - </b>    {T("solution.ecommerce.text18")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2005 - </b>    {T("solution.ecommerce.text19")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2005 - </b>    {T("solution.ecommerce.text20")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2009 - </b>   {T("solution.ecommerce.text21")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2011 - </b>    {T("solution.ecommerce.text22")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2011 - </b>    {T("solution.ecommerce.text23")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2011 - </b>    {T("solution.ecommerce.text24")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2014 - </b>    {T("solution.ecommerce.text25")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2014 - </b>   {T("solution.ecommerce.text26")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2017 - </b>    {T("solution.ecommerce.text27")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2017 - </b>    {T("solution.ecommerce.text28")}</p>
						</ScrollAnimation>
					</div>


					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark item-text mr3 ml3 '> <b>2021 - </b>   {T("solution.ecommerce.text29")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>   {T("solution.ecommerce.text30")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">   {T("solution.ecommerce.text31")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className='text-dark mr3 ml3 '>  {T("solution.ecommerce.text32")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">   {T("solution.ecommerce.text33")}</p>
						</ScrollAnimation>
					</div>

					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3"> {T("solution.ecommerce.text34")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">  {T("solution.ecommerce.text35")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">  {T("solution.ecommerce.text36")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">  {T("solution.ecommerce.text37")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">{T("solution.ecommerce.text38")} </p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text39")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3"> {T("solution.ecommerce.text40")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text41")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3"> {T("solution.ecommerce.text42")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text43")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className=" text-primary mr3 ml3">{T("solution.ecommerce.text44")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text45")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text46")}</p>
						</ScrollAnimation>
					</div>
					<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<p className='text-dark item-text mr3 ml3 '> {T("solution.ecommerce.text47")}</p>
							</div>
							<div className="col-lg-6 col-md-12">
								<p className='text-dark item-text mr3 ml3 '>{T("solution.ecommerce.text48")} </p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<p className='text-dark item-text mr3 ml3 '>{T("solution.ecommerce.text49")} </p>
							</div>
							<div className="col-lg-6 col-md-12">
								<p className='text-dark item-text mr3 ml3 '> {T("solution.ecommerce.text50")}</p>
							</div>
						</div>
						<div className="row center">
							<div className="col-9">
								<p className='text-dark item-text mr3 ml3 '> {T("solution.ecommerce.text51")}</p>
							</div>
						</div>
					</ScrollAnimation>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-primary mr3 ml3 ">{T("solution.ecommerce.text52")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text53")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-primary mr3 ml3 ">{T("solution.ecommerce.text54")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text55")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-primary mr3 ml3 ">{T("solution.ecommerce.text56")}</p>
						</ScrollAnimation>
					</div>
					<div className="row">
						<ScrollAnimation animateIn="fadeIn" animateOut="fadeOutUp">
							<p className="text-dark mr3 ml3 ">{T("solution.ecommerce.text57")}</p>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<Footer />
		</div >
	)
};

export default Solution_mobile;