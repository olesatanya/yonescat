
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStore from './useStore';

import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Aboutus from './Pages/Home/Aboutus';
import Blog from './Pages/Home/Blog';
import BlogDetails from './Pages/Home/BlogDetails';
import Contactus from './Pages/Home/Contactus'
import Hosting from './Pages/Home/Hosting';
import Infrastructure from './Pages/Home/Infrastructure';
import Landing from './Pages/Home/Landing';
import Projects from './Pages/Home/Projects';
import Solutions from './Pages/Home/Solutions';
import Loading from './components/Loading';
import Error from './Pages/Home/404';
import FAQ from './Pages/Home/FAQ';
import Knowledge from './Pages/Home/Knowledge';
import Legal from './Pages/Home/Legal';


import SolutionDetails_cloud from './Pages/Home/solutions/SolutionDetails_cloud';
import SolutionDetails_data from './Pages/Home/solutions/SolutionDetails_data';
import SolutionDetails_decentralize from './Pages/Home/solutions/SolutionDetails_decentralize';
import SolutionDetails_ecomm from './Pages/Home/solutions/SolutionDetails_ecomm';
import SolutionDetails_iot from './Pages/Home/solutions/SolutionDetails_iot';
import SolutionDetails_mobile from './Pages/Home/solutions/SolutionDetails_mobile';
import SolutionDetails_virtual_re from './Pages/Home/solutions/SolutionDetails_virtual_re';

import HostingDetails_shared from './Pages/Home/hosting/HostingDetails_shared';
import HostingDetails_dedicated from './Pages/Home/hosting/HostingDetails_dedicated';
import HostingDetails_game from './Pages/Home/hosting/HostingDetails_game';
import HostingDetails_cloud from './Pages/Home/hosting/HostingDetails_cloud';
import HostingDetails_email from './Pages/Home/hosting/HostingDetails_email';
import HostingDetails_developer from './Pages/Home/hosting/HostingDetails_developer';
import HostingDetails_ssl from './Pages/Home/hosting/HostingDetails_ssl';
import HostingDetails_vps from './Pages/Home/hosting/HostingDetails_vps';
import HostingDetails_domain from './Pages/Home/hosting/HostingDetails_domain';

import Infrastructure_data from './Pages/Home/infrastructure/Infrastructure_data';
import Infrastructure_ddos from './Pages/Home/infrastructure/Infrastructure_ddos';
import Infrastructure_database from './Pages/Home/infrastructure/Infrastructure_database';
import Infrastructure_eoffice from './Pages/Home/infrastructure/Infrastructure_eoffice';
import Infrastructure_gsuite from './Pages/Home/infrastructure/Infrastructure_gsuite';
import Infrastructure_voip from './Pages/Home/infrastructure/Infrastructure_voip';
import Infrastructure_iptv from './Pages/Home/infrastructure/Infrastructure_iptv';


function App() {
	const { user, updated, loading } = useStore();
	React.useEffect(() => {
		if (user !== null) {
			if (updated === 0) {
			}
		}
	})

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/register" component={Register}></Route>
				<Route exact path="/aboutus" component={Aboutus}></Route>
				<Route exact path="/blog" component={Blog}></Route>
				<Route exact path="/blog-details" component={BlogDetails}></Route>
				<Route exact path="/contactus" component={Contactus}></Route>
				<Route exact path="/hosting" component={Hosting}></Route>
				<Route exact path="/infrastructure" component={Infrastructure}></Route>
				<Route exact path="/landing" component={Landing}></Route>
				<Route exact path="/projects" component={Projects}></Route>
				<Route exact path="/solutions" component={Solutions}></Route>
				<Route exact path="/404" component={Error}></Route>
				<Route exact path="/faq" component={FAQ}></Route>
				<Route exact path="/knowledge" component={Knowledge}></Route>
				<Route exact path="/legal" component={Legal}></Route>

				<Route exact path="/solution-details/cloud" component={SolutionDetails_cloud}></Route>
				<Route exact path="/solution-details/data" component={SolutionDetails_data}></Route>
				<Route exact path="/solution-details/decentralize" component={SolutionDetails_decentralize}></Route>
				<Route exact path="/solution-details/ecommerce" component={SolutionDetails_ecomm}></Route>
				<Route exact path="/solution-details/iot" component={SolutionDetails_iot}></Route>
				<Route exact path="/solution-details/mobile-app" component={SolutionDetails_mobile}></Route>
				<Route exact path="/solution-details/virtual-reality" component={SolutionDetails_virtual_re}></Route>


				<Route exact path="/infrastructure-details/data" component={Infrastructure_data}></Route>
				<Route exact path="/infrastructure-details/ddos" component={Infrastructure_ddos}></Route>
				<Route exact path="/infrastructure-details/database" component={Infrastructure_database}></Route>
				<Route exact path="/infrastructure-details/office" component={Infrastructure_eoffice}></Route>
				<Route exact path="/infrastructure-details/g-suite" component={Infrastructure_gsuite}></Route>
				<Route exact path="/infrastructure-details/voip" component={Infrastructure_voip}></Route>
				<Route exact path="/infrastructure-details/iptv" component={Infrastructure_iptv}></Route>

				<Route exact path="/hosting-details/shared" component={HostingDetails_shared}></Route>
				<Route exact path="/hosting-details/dedicated" component={HostingDetails_dedicated}></Route>
				<Route exact path="/hosting-details/game" component={HostingDetails_game}></Route>
				<Route exact path="/hosting-details/cloud" component={HostingDetails_cloud}></Route>
				<Route exact path="/hosting-details/email" component={HostingDetails_email}></Route>
				<Route exact path="/hosting-details/developer" component={HostingDetails_developer}></Route>
				<Route exact path="/hosting-details/ssl" component={HostingDetails_ssl}></Route>
				<Route exact path="/hosting-details/vps" component={HostingDetails_vps}></Route>
				<Route exact path="/hosting-details/domain" component={HostingDetails_domain}></Route>

				<Route path="*" component={Error}></Route>
			</Switch>
			<ToastContainer />
			<Loading type="cylon" width={200} height={150} color={"#f22a73"} opacity={0.4} show={!!loading} />
		</BrowserRouter>
	)
}

export default App;
