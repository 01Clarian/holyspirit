import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import flydove from '../../assets/images/icon/flydove.gif'

import dovehome from '../../assets/images/banner/dovehome.jpeg'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import { Link, NavLink } from 'react-router-dom';

Banner01.propTypes = {
    data : PropTypes.array,
};

function Banner01(props) {
    const {data} = props;
    
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <p className="heading" style={{color:'rgb(243, 243, 171)', fontSize:'20px', marginBottom:'12px', marginTop:'12px'}}>
                                            <span style={{color:'white'}}>Holy Spirit Contract:</span> <span className='shrinker'>0x2c266aa7d0c4edcb1dc1cda0973dcc8bcf010ed6  </span> 
                                            </p>
                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home home1"
                            loop= {true}
                        >
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide >
                                    <div className="tf-slider-item">
                                        <div className="content-inner" style={{marginTop:'-90px'}}>
                                            <h1 className="heading">
                                            <span>LIGHT</span> THE WAY<span> </span>& SHINE BRIGHT  
                                            </h1>
                                            <p className="sub-heading">Find Your Way, Live Free, Thrive 🔥</p>
                                            <div className="btn-slider ">
                                                <NavLink to="/tokenomics" className="tf-button style-2">Tokenomics</NavLink>
                                                <NavLink to="/meta" className="tf-button style-2">Launch App</NavLink>
                                            </div>

                                        </div>
                                        <div className="image" style={{marginRight:'70px'}}>
                                            <div className="img-slider-main ani5"><img src={dovehome} alt="Holy Spirit Dove"/></div>
                                            
                                            <div className="current-bid">
                                                <div className="title">GIVE & RECIEVE</div>
                                                <Link target="_blank" to='https://t.me/HolySpiritERCPortal' className="price">JOIN THE COMMUNITY</Link>
                                            </div>
                                            <div className=" ani5"
                                            style={{backgroundImage:'https://oncedelivered.files.wordpress.com/2018/10/holy-spirit-like-a-dove.jpg?w=1386'}}
                                            >
                                                <div className="inner">
                                                    <h6 className="name">{idx.name}</h6>
                                                    <p className="author">{idx.tag}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner01;