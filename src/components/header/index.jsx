import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import { Button } from 'react-bootstrap';
import './styles.scss';
import dove00 from '../../assets/images/logo/dove00.png';
import uniswap from '../../assets/images/icon/uniswap.png';
import coinbase from '../../assets/images/icon/coinbase.png';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);
  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const links = document.querySelectorAll('#main-nav a');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <header className={`header ${scroll ? 'is-fixed' : 'is-fixed'}`}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div id="site-logo" className="clearfix">
                <div id="site-logo-inner">
                  <Link to="/" rel="home" className="main-logo">
                    <img
                      id="logo_header"
                      style={{
                        filter: `drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`,
                        borderRadius: '50%',
                        boxShadow: 'inset 0 0 5px rgba(655, 255, 55, 0.2)',
                      }}
                      className="logo-dark"
                      src={dove00}
                      alt="Holy Spirit"
                    />
                  </Link>
                </div>
              </div>

              <div className="header-center" style={{ height: '100%' }}>
                <nav
                  id="main-nav"
                  className={`main-nav ${menuActive ? 'active' : ''}`}
                >
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleDropdown(idx)}
                        className={`menu-item ${
                          data.namesub ? 'menu-item-has-children' : ''
                        } ${activeIndex === idx ? 'active' : ''}`}
                      >
                        <Link to={data.links}>{data.name}</Link>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li key={submenu.id} className="menu-item">
                                <NavLink to={submenu.links}>
                                  {submenu.sub}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <Link to="/wallet" className="tf-button ">
                  <span>Connect Wallet</span>
                </Link>

                <div>
                  <Button
                    style={{ margin: '5px' }}
                    variant="primary"
                    href="https://twitter.com/HolySpiritERC20"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    variant="success"
                    href="https://t.me/HolySpiritERC20"
                  >
                    <i className="fab fa-telegram"></i>
                  </Button>
                  <Button
                  style={{ margin: '5px' }}
                    variant="secondary"
                    href="https://github.com/01clarian/holyspirit"
                  >
                    <i className="fab fa-github"></i>
                  </Button>
                  <Button
                  style={{  backgroundColor:'orange' }}
                    
                    href="https://instagram.com/holyspirittoken?igshid=OGQ5ZDc2ODk2ZA=="
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Link
                    target="_blank"
                    to="https://app.uniswap.org/tokens/ethereum/0x2c266aa7d0c4edcb1dc1cda0973dcc8bcf010ed6"
                  >
                    <img
                      src={uniswap}
                      width="40px"
                      alt="uniswap"
                      style={{ margin: '7px' }}
                    />
                  </Link>
                  <Link target="_blank" to="https://coinbase.com">
                    <img src={coinbase} width="40px" alt="coinbase" />
                  </Link>
                </div>
              </div>

              <div
                className={`mobile-button ${menuActive ? 'active' : ''}`}
                onClick={handleMenuActive}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;