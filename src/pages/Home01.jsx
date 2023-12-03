import React from 'react';
import dataBanner from '../assets/mock-data/data-banner';
import Banner01 from '../components/banner/Banner01';
import BlogDetails01 from '../pages/BlogDetails01';

function Home01(props) {

    return (
        <div className="home-1">
            <div id='page' style={{marginTop:'140px'}}>
                <Banner01 data={dataBanner} />
                <BlogDetails01 />
                
            </div>
        </div>

    );
}

export default Home01;