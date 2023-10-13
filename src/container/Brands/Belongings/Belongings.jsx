import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../../client';
import './Belongings.scss';
import { images } from '../../../constants';

const Belongings = () => {
    const [belongingImages, setBelongingImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "belongings"]';
        client.fetch(query).then((data) => {
            setBelongingImages(data);
        });
    }, []);

    return (
        <div className="belongings-container">
            {/* Logo */}
                <img src={images.belongingslogo} alt="belongingslogo" className="logo" />
          



            {/* Images Grid */}
            <div className="images-grid">
                {belongingImages.map((belonging, index) => (
                    <div className="app__work-item" key={index}>
                        <img
                            className="portfolio-image"
                            src={urlFor(belonging.imgUrl)}
                            alt={belonging.name || "Belonging Image"}
                        />
                        <div className="image-overlay">{belonging.name}</div>
                    </div>
                ))}
            </div>

            {/* Video Grid */}
            <div className="video-grid">
                <video autoPlay muted loop>
                    <source src={images.blngs} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Belongings;
