import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import church from '../assets/images/product/church.png'

Meta.propTypes = {
    
};

function Meta(props) {
    return (
        <div>
                
        <section className="tf-contact" style={{marginTop:'60px'}}>
            <div className="tf-container">
                <div className="row ">
                    <div className="col-md-6">
                        <div className="image ani4">
                            <img src={church} alt="Holy Spirit" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="tf-heading style-3">
                            <h4 className="heading">Upcoming MetaChurch Launch...</h4>
                            <p className="sub-heading">

                            <div style={{ color: '#fff', fontWeight: 'bold' }}>
  Strap yourselves in, because metaChurch is about to launch you into a whole new dimension of spiritual connection! 🔥
</div>

<p style={{ color: '#fff', marginTop: '1em' }}>
  Forget dusty pews and awkward handshakes – this ain't your grandma's church. We're talking a fully decentralized, community-run haven where you can worship, connect, and grow on your own terms. ✨
</p>

<p style={{ color: '#fff', marginTop: '1em' }}>
  Imagine:<strong> 🤯 VR sermons that transport you to the heart of the action.</strong> Feeling a bit burnt out by the usual Sunday service routine? No worries! metaChurch is gonna have you front and center for mind-blowing VR sermons that'll leave you feeling like you've walked straight into the Bible. ⛪️➡️🌌
</p>

<p style={{ color: '#fff', marginTop: '1em' }}>
  <strong>🤝 DAO-powered decision making.</strong> No more top-down decrees – you'll have a real say in how metaChurch evolves. Every member will be a voting stakeholder, shaping the future of the community together. ✊
</p>

<p style={{ color: '#fff', marginTop: '1em' }}>
  <strong>🌐 Global connections with like-minded souls.</strong> Ditch the geographical limitations! metaChurch is breaking down borders, bringing together believers from every corner of the globe for meaningful interactions and faith-filled discussions. 🙏🌍
</p>

<p style={{ color: '#fff', marginTop: '1em' }}>
  <strong>💫 A personalized spiritual journey.</strong> metaChurch ain't about cookie-cutter faith. You'll be able to curate your own experience, explore different practices, and discover what truly sets your soul on fire. 🔥
</p>

<p style={{ color: '#fff', marginTop: '1em' }}>
  metaChurch is more than just a church – it's a revolution. It's a chance to redefine what faith can look like in the digital age. 💥 So mark your calendars, spread the word, and get ready to experience the future of spirituality! 🚀 Let's go, metaChurch fam! Let's build something beautiful, together. 🙏💖
</p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </div>
    );
}

export default Meta;