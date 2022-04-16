import React from 'react'
import { Link } from 'react-router-dom'

import twitter from '../../assets/img/twitter.webp'
import facebook from '../../assets/img/facebook.webp'
import linked from '../../assets/img/linked.webp'
import login_bottom from '../../assets/img/login-bottom.webp'

import useStore from '../../useStore'


interface SideMenuProps {
    menushow: boolean
    onClose: () => void
}

interface MenuType {
    menuOpen1: boolean
    menuOpen2: boolean
    menuOpen3: boolean
    menuOpen4: boolean
}


const SideMenu = ({ menushow, onClose }: SideMenuProps) => {
    const [state, setStates] = React.useState<MenuType>({
        menuOpen1: true,
        menuOpen2: false,
        menuOpen3: false,
        menuOpen4: false
    })

    const updateStatus = (params: { [key: string]: string | number | boolean }) => setStates({ ...state, ...params })
    const { T } = useStore()

    return (
        <>
            <div className={`side-menu-panel ${menushow ? 'show' : 'hide'}`}>
                <div className="header-bar">
                    <div className='btn-close' onClick={onClose}>&times;</div>
                </div>
                <div className="menu-panel">
                    <div className={`menu ${state.menuOpen1 ? 'active' : ''}`} onClick={() => { updateStatus({ menuOpen1: !state.menuOpen1, menuOpen2: false, menuOpen3: false, menuOpen4: false }) }}>
                        <Link to="../solutions" className='text-primary menu-text'>{T("menu.solutions")}</Link>
                    </div>
                    <div className={`menu-items ${state.menuOpen1 ? 'active' : ''}`}>
                        <Link to="../solution-details/mobile-app" className="submenu">{T("solutions.card.title1")}</Link>
                        <Link to="../solution-details/cloud" className="submenu">{T("solutions.card.title2")}</Link>
                        <Link to="../solution-details/ecommerce" className="submenu">{T("solutions.card.title3")}</Link>
                        <Link to="../solution-details/data" className="submenu">{T("solutions.card.title4")}</Link>
                        <Link to="../solution-details/virtual-reality" className="submenu">{T("solutions.card.title5")}</Link>
                        <Link to="../solution-details/decentralize" className="submenu">{T("solutions.card.title6")}</Link>
                        <Link to="../solution-details/iot" className="submenu">{T("solutions.card.title7")}</Link>
                    </div>
                    <div className={`menu ${state.menuOpen2 ? 'active' : ''}`} onClick={() => { updateStatus({ menuOpen2: !state.menuOpen2, menuOpen1: false, menuOpen3: false, menuOpen4: false }) }}>
                        <Link to="../infrastructure" className='text-primary menu-text'>{T("menu.infrastructure")}</Link>
                    </div>
                    <div className={`menu-items ${state.menuOpen2 ? 'active' : ''}`}>
                        <Link to="../infrastructure-details/data" className="submenu">{T("infrastructure.card.title1")}</Link>
                        <Link to="../infrastructure-details/ddos" className="submenu">{T("infrastructure.card.title2")}</Link>
                        <Link to="../infrastructure-details/database" className="submenu">{T("infrastructure.card.title3")}</Link>
                        <Link to="../infrastructure-details/office" className="submenu">{T("infrastructure.card.title4")}</Link>
                        <Link to="../infrastructure-details/g-suite" className="submenu">{T("infrastructure.card.title5")}</Link>
                        <Link to="../infrastructure-details/voip" className="submenu">{T("infrastructure.card.title6")}</Link>
                        <Link to="../infrastructure-details/iptv" className="submenu">{T("infrastructure.card.title7")}</Link>
                    </div>
                    <div className={`menu ${state.menuOpen3 ? 'active' : ''}`} onClick={() => { updateStatus({ menuOpen3: !state.menuOpen3, menuOpen1: false, menuOpen2: false, menuOpen4: false }) }}>
                        <Link to="../hosting" className='text-primary menu-text'>{T("menu.hosting")}</Link>
                    </div>
                    <div className={`menu-items ${state.menuOpen3 ? 'active' : ''}`}>
                        <Link to="../hosting-details/shared" className="submenu">{T("hosting.card1.title")}</Link>
                        <Link to="../hosting-details/dedicated" className="submenu">{T("hosting.card2.title")}</Link>
                        <Link to="../hosting-details/game" className="submenu">{T("hosting.card3.title")}</Link>
                        <Link to="../hosting-details/cloud" className="submenu">{T("hosting.card4.title")}</Link>
                        <Link to="../hosting-details/email" className="submenu">{T("hosting.card5.title")}</Link>
                        <Link to="../hosting-details/developer" className="submenu">{T("hosting.card6.title")}</Link>
                        <Link to="../hosting-details/ssl" className="submenu">{T("hosting.card7.title")}</Link>
                        <Link to="../hosting-details/vps" className="submenu">{T("hosting.card8.title")}</Link>
                        <Link to="../hosting-details/domain" className="submenu">{T("hosting.card9.title")}</Link>
                    </div>
                    <div className={`menu ${state.menuOpen4 ? 'active' : ''}`} onClick={() => { updateStatus({ menuOpen4: !state.menuOpen4, menuOpen1: false, menuOpen3: false, menuOpen2: false }) }}>
                        <Link to="../contactus" className='text-primary menu-text'>{T("menu.support")}</Link>
                    </div>
                    <div className={`menu-items ${state.menuOpen4 ? 'active' : ''}`}>
                        <Link to="../knowledge" className="submenu">{T("menu.knowledge")}</Link>
                        <Link to="../legal" className="submenu">{T("menu.legal")}</Link>
                        <Link to="../blog" className="submenu">{T("menu.blogs")}</Link>
                        <Link to="../faq" className="submenu">{T("menu.faq")}</Link>
                    </div>
                </div>
                <div className="footer-bar">
                    <div className="justify middle  ">
                        <a href="/login" className="btn-login" >
                            <img src={login_bottom} alt="login" style={{width:'26px', height:'22px'}}/>
                            <label className=' text-primary' style={{ cursor: 'pointer' }}>{T("login.title")}</label>
                        </a>
                        <div className='justify center'>
                            <a href="/contactus" className="follow text-primary">
                                {T("blog.follow")}
                            </a>
                            <Link to="/" >
                                <img src={facebook} style={{ maxHeight: '35px', marginRight: '5px' }} alt="paypal-img" className="footer-accpt-link-2" />
                            </Link>
                            <Link to="/" >
                                <img src={twitter} style={{ maxHeight: '35px', marginRight: '5px' }} alt="paypal-img" className="footer-accpt-link-2" />
                            </Link>
                            <Link to="/" >
                                <img src={linked} style={{ maxHeight: '35px', marginRight: '5px' }} alt="paypal-img" className="footer-accpt-link-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SideMenu;