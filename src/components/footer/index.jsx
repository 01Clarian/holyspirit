import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import verified from '../../assets/images/product/verified.png';
import './styles.scss'

function Footer(props) {

    const [productLink] = useState([
        {
            title: 'Spot',
            path: '/spot'
        },
        {
            title: 'Inverse Perpetual',
            path: '#'
        },
        {
            title: 'USDT Perpetual',
            path: '#'
        },
        {
            title: 'Exchange',
            path: '#'
        },
        {
            title: 'Launchpad',
            path: '#'
        },
        {
            title: 'Binance Pay',
            path: '#'
        },
    ]);
    const [servicesLink] = useState([
        {
            title: 'Buy Crypto',
            path: '#'
        },
        {
            title: 'Markets',
            path: '#'
        },
        {
            title: 'Tranding Fee',
            path: '#'
        },
        {
            title: 'Affiliate Program',
            path: '#'
        },
        {
            title: 'Referral Program',
            path: '#'
        },
        {
            title: 'API',
            path: '#'
        },
    ]);


    const [listSocial] = useState([
        {
            icon: 'icon-facebook-f',
            path: '#'
        },
        {
            icon: 'icon-instagram',
            path: '#'
        },
        {
            icon: 'icon-youtube',
            path: '#'
        },
        {
            icon: 'icon-twitter',
            path: '#'
        },
    ])
    

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <footer className="footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="widget widget-infor">
                                <p className="content"><span style={{color:'yellow'}}>Holy Spirit Contract:</span> 0x2c266aa7d0c4edcb1dc1cda0973dcc8bcf010ed6
</p>
                                <ul className="social-item">
                                    <li><Link to="https://twitter.com/HolySpiritERC20"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="https://t.me/HolySpiritERC20"><i className="fab fa-telegram-plane"></i></Link></li>
                                </ul>
                                <Link target='_blank' to='https://honeypot.is/ethereum?address=0x2c266aa7d0c4edcb1dc1cda0973dcc8bcf010ed6'>
                                <p className="copy-right">
                                <img id="logo_footer" 
                                style={{    
                                    filter: `drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`, // creates a circular shadow
                                boxShadow: 'inset 0 0 5px rgba(655, 255, 55, 0.2)', // subtle inner glow
                            }}
                                className='logo-dark' src={verified} alt="Logo" />

                                </p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-5">
                            <div className="widget widget-menu">
                                <div className="menu menu-1">
                                    <h6 className="widget-title">Community Funded</h6>
                                    <ul >
                                        <li><span style={{color:'yellow'}}>Dev Donations:</span> 0x5e05618f18A426dcde61915fde27361AFF7C0940</li>
                                    </ul>
                                </div>
                                <div className="menu menu-4">
                                    <h6 className="widget-title">Contact</h6>
                                    <ul >
                                        <li>holyspiritcoin@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
           </footer>
    );
}

export default Footer;