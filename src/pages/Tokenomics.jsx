import React from 'react';
import img1 from '../assets/images/product/magic.png'


Tokenomics.propTypes = {
    
};

function Tokenomics(props) {
    return (
        <div className='page-explore' style={{marginTop:'120px'}}>
            <section className="tf-baner-live-auction style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-liver-auction-wrap">
                                <div className="content">
                                    <div className="heading">
                                        <h2 className="title">TOKENOMICS</h2>
                                        <span className="label">RISING FROM THE ASHES <span className="icon"><i className="fab fa-ethereum"></i></span></span>
                                    </div>
                                    <div style={{margin:'8px'}}>
                                    <h5 className="title">Total Supply: <span style={{color:'yellow'}}>777,777,777,777 HOLY </span></h5>
                                    <h5 className="title">Contract: <span style={{color:'yellow'}}>Renounced 📖 </span></h5>
                                    <h5 className="title">LP is burnt at 1.8ETH<span style={{color:'yellow'}}>🔥</span></h5>
                                    <h5 className="title">No team token<span style={{color:'yellow'}}></span></h5>
                                    <h5 className="title">0% Tax<span style={{color:'yellow'}}></span></h5>
                                    <h6 className="title"
                                    >This is a community powered project.<span style={{color:'yellow'}}></span></h6>
                                    </div>
                                </div>
                                <div className="image" style={{marginTop:'3px'}}>
                                    <img src={img1} width='40%' 
                                    style={{marginBottom:'100px',
                                    filter: `drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))`, // creates a circular shadow
                                    boxShadow: 'inset 0 0 5px rgba(655, 255, 55, 0.2)', // subtle inner glow
                                    }} alt="Binasea" className="img1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Tokenomics;