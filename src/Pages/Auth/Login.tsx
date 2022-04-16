import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from "react-animated-css";

import '../../assets/css/auth/login.css'
import '../../assets/css/animate.min.css'

import logo from '../../assets/img/logo_black.webp'
import arrow_left from '../../assets/img/arrow_left.svg'
// import ellipse1 from '../../assets/img/Ellipse_1.webp'
// import ellipse2 from '../../assets/img/Ellipse_2.webp'
// import ellipse3 from '../../assets/img/Ellipse_3.webp'
import icon_google from '../../assets/img/google_icon.webp'// '../../../assets/img/google_icon.webp'
import icon_facebook from '../../assets/img/facebook_icon.webp'

import SelectInput from '../../components/SelectInput'
import useStore from '../../useStore'
import { tips, validateEmail } from '../../util'

interface LoginType {
	email: string
	password: string
	remember: boolean
}

const Register = () => {
	const { call, update, T, changeLang, lang } = useStore()
	const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })
	const [state, setStates] = React.useState<LoginType>({
		email: '',
		password: '',
		remember: false
	})
	const refEmail = React.useRef<HTMLInputElement>(null)
	const refPassword = React.useRef<HTMLInputElement>(null)

	const submit = async () => {
		const { email, password } = state
		if (email === '' || !validateEmail(email)) {
			tips("Invalid e-mail")
			refEmail.current?.focus()
			return
		} else if (password.length == 0) {
			tips("Invalid password")
			refPassword.current?.focus()
			return
		}
		update({ loading: true })
		const res = await call("login", { email, password });
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
			<div className="login">		<div className="login-panel">
				<div>
					<div className="flex justify">
						<Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
						<Link to="/" className='row middle pointer'>
							<img src={arrow_left} style={{ width: '20px', height: '20px' }} alt="back" />
							<b>{T('menu.back')}</b>
						</Link>
					</div>
					<div className="row p0 mt3 middle">
						<div className="col-xl-8 col-md-12">
							<h3 className='text-stroke h2 title'>{T('login.title')}</h3>
							<h3 className='text-primary h2 title'>{T('login.title')}</h3>
						</div>
						<div className="col-xl-4 col-md-12">
							<SelectInput name="Select State" type='' valueIndex={lang} items={["English", "Arabic", "Chinese"]} onValueChange={(value) => { changeLang(value) }} />
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<p className='text-dark'>{T('login.desc')}</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button className='btn-white w100'>
								<img src={icon_google} alt="google icon" style={{ margin: '0 1em', width: '30px', height: '30px' }} />
								{T('login.google')} &nbsp;</button>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<button className='btn-white w100'><img src={icon_facebook} alt="facebook icon" style={{ margin: '0 1em', width: '30px', height: '30px' }} />{T('login.facebook')}</button>
						</div>
					</div>
					<div className="row mt3">
						<div className="col-2">
							<hr />
						</div>
						<div className="col-8 text-center">
							<label className=' text-dark'>{T('login.desc-2')}</label>
						</div>
						<div className="col-2">
							<hr />
						</div>
					</div>
					<div className="row mt2">
						<div className="col-12">
							<input type="text" className="w100" placeholder={T('login.place.email')} ref={refEmail} value={state.email} onChange={e => updateStatus({ email: e.target.value })}></input>
						</div>
					</div>
					<div className="row mt2">
						<div className="col-12">
							<input type="password" className='w100' placeholder={T('login.place.password')} ref={refPassword} value={state.password} onChange={e => updateStatus({ password: e.target.value })}></input>
						</div>
					</div>
					<div className="justify mt3">

						<div className='row middle ml mr3' onClick={() => updateStatus({ remember: !state.remember })}>
							<div className='radio-label text-dark' onClick={() => updateStatus({ remember: !state.remember })}><span className={`radio ${state.remember == true ? "checked" : ""}`}></span>{T("login.remember")}</div>

						</div>
						<Link className="text-primary " to="/contactus">
							{T('login.forget')}
						</Link>

					</div>
					<div className="row mt3">
						<div className="col-12">
							<button className='btn-yo w100' style={{ width: '100%', height: 'auto' }} onClick={submit}>{T("login.btn.login")}</button>
						</div>
					</div>
					<div className="row mt2">
						<div className="col-12">
							<label>{T("login.register.label")} </label>
							<Link className="text-primary" to="/register">
								&nbsp;{T('login.btn.register')}
							</Link>
						</div>
					</div>
					<div className="row mt5">
						<div className="col-12"><p className='copyright'>{T("copyright")}</p></div>
					</div>
				</div>
			</div>
				<div className="back-panel">
					{/* <img src={ellipse1} className="ellipse1" alt='' />
					<img src={ellipse2} className="ellipse2" alt='' />
					<img src={ellipse3} className="ellipse3" alt='' /> */}
				</div>
			</div>
		</Animated>
	)
};

export default Register;