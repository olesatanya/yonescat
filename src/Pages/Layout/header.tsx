import React from 'react'
import { Link } from 'react-router-dom'
import SelectInput from '../../components/SelectInput'
import useStore from '../../useStore'
import SideMenu from '../Layout/sidemenu'

import logo from '../../assets/img/logo_white.svg'
import menu from '../../assets/img/menu.webp'
import phone from '../../assets/img/phone.svg'
import password from '../../assets/img/key.svg'
import home from '../../assets/img/home.webp';
import yo from '../../assets/img/yo-black.svg';
import header_back from '../../assets/img/header_back.webp';
import header_back2 from '../../assets/img/blog_header.webp';


interface HeaderType {
    headerBack: string
    showSideMenu: boolean
}
interface HeaderProps {
    type: string
    subpage: string

}
const Header = ({ type, subpage }: HeaderProps) => {
    const [state, setStates] = React.useState<HeaderType>({
        headerBack: '',
        showSideMenu: false
    })
    const { T, changeLang, lang } = useStore()
    const updateStatus = (params: Partial<HeaderType>) => setStates({ ...state, ...params })

    const refHeader = React.useRef<HTMLElement>(null)

    React.useEffect(() => {
        const onHandler = (ev) => {
            var sticky = refHeader.current?.offsetHeight;
            sticky = sticky ? sticky - 40 : 0;
            if (window.pageYOffset > sticky) {
                refHeader.current?.classList.add("sticky");
            } else {
                refHeader.current?.classList.remove("sticky");
            }
        }
        window.addEventListener('scroll', onHandler);
        return () => window.removeEventListener('scroll', onHandler)
    })
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="header-panel" style={{ backgroundColor: state.headerBack, background: type !== "landing" ? `url(${subpage === "" ? header_back : header_back2}), rgba(0, 0, 0, 0.7)` : '', backgroundBlendMode: 'darken' }}>
                <header className='' ref={refHeader}>
                    <div className="container">
                        <div className='justify' >
                            <div className='justify'>
                                <Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
                            </div>
                            <div className='header-menu-bar '>
                                <Link to="/solutions" className={`header-menu ${type === "solutions" ? 'active' : ''}`}><span></span>{T("menu.solutions")}</Link>
                                <Link to="/infrastructure" className={`header-menu ${type === "infrastructure" ? 'active' : ''}`}><span></span>{T("menu.infrastructure")}</Link>
                                <Link to="/hosting" className={`header-menu ${type === "hosting" ? 'active' : ''}`}><span></span>{T("menu.hosting")}</Link>
                                <Link to="/contactus" className={`header-menu ${type === "support" ? 'active' : ''}`}><span></span>{T("menu.support")}</Link>
                            </div>
                            <div></div>
                            <div className='justify header-right-menu-bar' >
                                <a href="tel:08002289090" className='header-phone justify' >
                                    <img src={phone} className="mr2  header-menu-icon" alt={'phone'} />
                                    <h4 className='text-light'>800 228 9090</h4>
                                </a>
                                <Link to="/login" className='btn-login btn-yo'>{T("login.btn.login")}</Link>
{/*                                 
                                <div style={{ width: '140px' }} > */}
                                    <SelectInput name="Select State" type="language" valueIndex={lang} items={["English", "Arabic", "Chinese"]} onValueChange={(value) => { changeLang(value) }} />
                                {/* </div> */}
                                <Link to="/login"><img src={password} className="btn-login header-menu-icon" alt={'login'} /></Link>
                                <span style={{ cursor: 'pointer' }} onClick={() => { updateStatus({ showSideMenu: true }) }}><img src={menu} className="header-menu-icon" alt={'menu'} /></span>
                            </div>
                        </div>
                        {type === "landing" ? <></> : <hr style={{ borderTop: '1px solid var(--font-black-color)' }} />}
                    </div>
                </header>

                {type === "landing" ? <></> : <>
                    <div className="container relative">
                        <div className="row p3 pb0">
                            <div className="col-12 relative">
                                <h3 className='h3 text-stroke left'>{T(`menu.${type}`)}</h3>
                                <h3 className='text-light h3 ' style={{ zIndex: 2 }}>{T(`menu.${type}`)}</h3>
                            </div>
                        </div>
                        <div className="row m0 pb3">
                            <div className="col-12" style={{ fontSize: '24px' }}>
                                <Link to="/"><img src={home} style={{ width: '20px' }} alt={'home'} /></Link>
                                <label className='text-light'> / </label>
                                <Link to={`/${type}`}><label className='text-primary'> {T(`menu.${type}`)} </label></Link>
                                {subpage !== '' ? <>
                                    <label className='text-light'> / </label>
                                    <Link to={`/${type}`}><label className='text-primary'> {subpage} </label></Link>
                                </> : <></>}
                            </div>
                        </div>
                        <img src={yo} alt="yo-back" className='yo-back' />
                    </div>
                </>}
            </div>

            <SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu: false })} />
        </>
    )
};

export default Header;