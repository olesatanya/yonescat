import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from "react-animated-css"

import '../../assets/css/auth/register.css'
import '../../assets/css/animate.min.css'

import logo from '../../assets/img/logo_black.webp'
import arrow_left from '../../assets/img/arrow_left.svg'
// import ellipse1 from '../../assets/img/Ellipse_1.webp'
// import ellipse2 from '../../assets/img/Ellipse_2.webp'
// import ellipse3 from '../../assets/img/Ellipse_3.webp'

import SelectInput from '../../components/SelectInput'
import useStore from '../../useStore'
import { tips, validateEmail } from '../../util'



interface RegisterType {
	firstname: string
	lastname: string
	email: string
	phone: string
	company: string
	street: string
	postcode: string
	city: string
	status: string
	country: string
	password: string
	confirmPassword: string
	question: string
	answer: string
}

const Register = () => {
	const { call, update, T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })

	const selectState = ["State1", "state2", "state3"];  /// fetch from database or json
	const selectCountry = ["China", "US", "UK"];  /// 


	const [state, setStates] = React.useState<RegisterType>({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		company: '',
		street: '',
		postcode: '',
		city: '',
		status: '',
		country: '',
		password: '',
		confirmPassword: '',
		question: '',
		answer: ''
	})



	const submit = async () => {

		const { firstname, lastname, email, phone, company, street, postcode, city, status, country, password, confirmPassword, question, answer } = state
		if (email === '' || !validateEmail(email)) {
			tips("Invalid e-mail")
			return
		} else if (password.length == 0) {
			tips("Invalid password")
			return
		} else if (firstname.length == 0) {
			tips("Invalid firstname")
			return
		} else if (lastname.length == 0) {
			tips("Invalid lastname")
			return
		} else if (phone.length == 0) {
			tips("Invalid phone")
			return
		} else if (company.length == 0) {
			tips("Invalid company")
			return
		} else if (street.length == 0) {
			tips("Invalid street")
			return
		} else if (postcode.length == 0) {
			tips("Invalid postcode")
			return
		} else if (city.length == 0) {
			tips("Invalid city")
			return
		} else if (status.length == 0) {
			tips("Invalid status")
			return
		} else if (country.length == 0) {
			tips("Invalid country")
			return
		} else if (question.length == 0) {
			tips("Invalid question")
			return
		} else if (answer.length == 0) {
			tips("Invalid answer")
			return
		}
		if (password != confirmPassword) {
			tips("Invalid password")
			return
		}
		update({ loading: true })
		const res = await call("register", { email, password });
		if (res) {
			tips("Success")
		}
		update({ loading: false })
		setTimeout(() => {
			update({ loading: false })
		}, 2000);
	}


	return (
		<Animated animationIn="fadeIn" animationInDuration={2000} animationOut="fadeOut" isVisible={true}>
			<div className="register">
				<div className="register-panel">
					<div>
						<div className="flex justify">
							<Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
							<Link to="/" className='row middle pointer'>
								<img src={arrow_left} style={{ width: '20px', height: '20px' }} alt="back" />
								<b>{T("menu.back")}</b>
							</Link>
						</div>
						<div className="row p0 m0 middle">
							<div className="col-xl-8 col-md-12">
								<h3 className='text-stroke h4 title'>{T("register.title")}</h3>
								<h3 className='text-primary h3 title'>{T("register.title")}</h3>
							</div>
							<div className="col-xl-4 col-md-12">
								<SelectInput name="Select State" type='' valueIndex={lang} items={["English", "Arabic", "Chinese"]} onValueChange={(value) => { changeLang(value) }} />
							</div>
						</div>
						<div className="row">
							<div className="col-12"><label className='text-primary'>{T("register.desc")}</label></div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<input type="text" className='w100 m1' placeholder={T("register.place.firstname")} value={state.firstname} onChange={e => updateStatus({ firstname: e.target.value })}></input>
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100 m1" placeholder={T("register.place.lastname")} value={state.lastname} onChange={e => updateStatus({ lastname: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.email")} value={state.email} onChange={e => updateStatus({ email: e.target.value })}></input>
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.phone")} value={state.phone} onChange={e => updateStatus({ phone: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt3">
							<div className="col-12"><label className='text-primary'>{T("register.place.desc-2")}</label></div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<input type="text" className='w100' placeholder={T("register.place.company")} value={state.company} onChange={e => updateStatus({ company: e.target.value })}></input>
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.street")} value={state.street} onChange={e => updateStatus({ street: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.postcode")} value={state.postcode} onChange={e => updateStatus({ postcode: e.target.value })}></input>
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.status")} value={state.city} onChange={e => updateStatus({ city: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<SelectInput name={T("register.place.status")} type='' valueIndex={0} items={selectState} onValueChange={(value) => { updateStatus({ state: value }) }} />
							</div>
							<div className="col-lg-6 col-md-12">
								<SelectInput name={T("register.place.country")} type='' valueIndex={0} items={selectCountry} onValueChange={(value) => { updateStatus({ country: value }) }} />
							</div>
						</div>
						<div className="row mt3">
							<div className="col-12"><label className='text-primary'>{T("register.place.question")}</label></div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<input type="password" className='w100' placeholder={T("register.place.password")} value={state.password} onChange={e => updateStatus({ password: e.target.value })}></input>
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="password" className="w100" placeholder={T("register.place.confirmPassword")} value={state.confirmPassword} onChange={e => updateStatus({ confirmPassword: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt3">
							<div className="col-12"><label className='text-primary'>{T("register.secure")}</label></div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<SelectInput name="Select Question" type='' valueIndex={0} items={selectCountry} onValueChange={(value) => { updateStatus({ question: value }) }} />
							</div>
							<div className="col-lg-6 col-md-12">
								<input type="text" className="w100" placeholder={T("register.place.answer")} value={state.answer} onChange={e => updateStatus({ answer: e.target.value })}></input>
							</div>
						</div>
						<div className="row mt2">
							<div className="col-lg-6 col-md-12">
								<button className='btn-yo w100' style={{ width: '100%', height: 'auto' }} onClick={submit}>{T("register.btn")}</button>
							</div>
							<div className="col-lg-6 col-md-12 row middle center">
								<label>{T("register.login")} </label>
								<Link className="text-primary" to="/login">
									&nbsp;{T("register.btn.login")}
								</Link>
							</div>
						</div>
						<div className="row mt3">
							<div className="col-12"><p className='copyright'>{T("copyright")}</p></div>
						</div>
					</div>
				</div>
				<div className="back-panel">
					{/* <img src={ellipse1} className="ellipse1" alt='' />
					<img src={ellipse2} className="ellipse2" alt='' />
					<img src={ellipse3} className="ellipse3" alt='' /> */}
				</div>
			</div >

		</Animated>
	)
};

export default Register;