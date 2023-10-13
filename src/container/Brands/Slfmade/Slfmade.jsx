import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../../client';
import './Slfmade.scss'; // Assuming you have an SCSS file for Slfmade
import { images } from '../../../constants';

const Slfmade = () => {
    const [slfmadeImages, setSlfmadeImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "slfmade"]'; // Assuming you have a type called "slfmade" in your sanity schema
        client.fetch(query).then((data) => {
            setSlfmadeImages(data);
        });
    }, []);

    return (
        <div className="slfmade-container"> {/* Change class name to "slfmade-container" */}
            <img src={images.slfmadelogo} alt="slfmadelogo" className="logo" />

            {/* Images Grid */}
            <div className="images-grid">
                {slfmadeImages.map((slfmade, index) => (
                    <div className="app__work-item" key={index}>
                        <img
                            className="portfolio-image"
                            src={urlFor(slfmade.imgUrl)}
                            alt={slfmade.name || "Slfmade Image"}
                        />
                        <div className="image-overlay">{slfmade.name}</div>
                    </div>
                ))}
            </div>

            {/* Video Grid */}
            <div className="video-grid">
                <video autoPlay muted loop>
                    <source src={images.slfmadevideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Slfmade;
