import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import img2 from '../assets/images/icon/uniswap.png'
import img1 from '../assets/images/icon/doveknight2.png'
import img3 from '../assets/images/icon/uniswapbuy.png'
import img5 from '../assets/images/logo/dove00.png'

BlogDetails01.propTypes = {
    
};

function BlogDetails01(props) {
    return (
        <div>            
            <section className="tf-blog-detail">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="detail-inner">
                                <div className="content-top">
                                    <h4 className="title">DECENTRALIZED SPIRITUAL EXPLORATIONS 🙏</h4>
                                    <div className="author-infor">
                                        <div >
                                            <img src={img5}    style={{
    margin: '12px',
    filter: `drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`, // creates a circular shadow
    borderRadius: '50%', // makes the image itself round
    boxShadow: 'inset 0 0 5px rgba(655, 255, 55, 0.2)', // subtle inner glow
  }}alt="token" />
                                        </div>
                                        <Link to="#">$HOLY SPIRIT</Link>
                                        <span className="mr9">|</span>
                                        <span>Light the way</span>

                                    </div>
                                <div className="image author-infor" 
                                
                                style={{
                                filter: `drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`, // creates a circular shadow
                                borderRadius: '50%', // makes the image itself round
                                }}>
                                    <img src={img1}  alt="Dove knight with sword" />
                                    </div>

                                </div>
                                <div className="content-inner">
                                    <h3 className="title">
IMAGINE A WORLD WHERE SPIRITUALITY ISN'T CONFINED TO RIGID STRUCTURES, BUT FLOWS FREELY THROUGH A PEER-TO-PEER NETWORK. WHERE MEDITATION PRACTICES AND ANCIENT WISDOM ARE SHARED OPENLY, WITHOUT INTERMEDIARIES. WHERE ALMS ARE GIVEN DIRECTLY, HEART TO HEART, BYPASSING THE CLINKING COLLECTION PLATE.

 HOLY SPIRIT TOKEN IS THE KEY THAT UNLOCKS THIS DOOR. IT'S A TOOL FOR CONSCIOUS CREATORS, A CURRENCY OF COMPASSION, A BRIDGE BETWEEN SEEKERS AND GIVERS. 💗 💗 💗 </h3>
                                </div>
                                <div className="image style-2">
                                    <img className="mr20" width='10%' src={img2} alt="Holy Spirit" />
                                    <img src={img3} width='50%' alt="how to buy" />
                                </div>
                                <div className="content-top">
                                    <h3 className="title"
                                    >ROADMAP SOON</h3>
                                    <p><span style={{fontWeight:'bold'}}>Full disclaimer:</span> This website, (info.holyspirithub.com), in no way shape or form promotes or encourages the future value price appreciation of $Holy Spirit. Crypto investments are highly speculative and risky. Please DO YOUR OWN RESEARCH when it comes to any type of crypto activity. We are not implying or suggesting at all that having faith will produce any type of crypto profit for you whatsoever.
                                    This website is not intended to be and should not be construed as an offer to sell or a solicitation to buy any security. The purpose of this site is to demonstrate the community mission to build a utilty around the $Holy Spirit that fosters an authentic relationship between practicing faith and the metaverse through implementing the benefits of the blockchain. The thesis behind this website is to encourage and empower acts of goodness
                                        by connecting the $Holy Spirit community with a metaverse platform in order to conduct religious and spiritual activities. The website provides the $Holy Spirit contract address and the uniswap link in order to provide clarity on which crypto community the metaChurch is building for and is not
                                         suggesting or encouraging you to buy the token for its future price value as that is completely outside the scope of this project. Thanks for checking this out and many blessings to you!</p>
                                </div>

                                <div className="content-bottom">
                                </div>
                            </div>                        
                        </div>                                     
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default BlogDetails01;