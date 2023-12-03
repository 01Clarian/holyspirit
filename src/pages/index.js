import Meta from "./Meta";
import Community from "./Community";
import Tokenomics from "./Tokenomics";
import Wallet from "./Wallet";
import Home01 from "./Home01";


const routes = [
  { path: '/', component: <Home01 />},
  { path: '/tokenomics', component: <Tokenomics />},
  { path: '/wallet', component: <Wallet />},
  { path: '/meta', component: <Meta />},
  { path: '/community', component: <Community />},



]

export default routes;