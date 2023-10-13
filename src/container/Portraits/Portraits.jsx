import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client'; // Assuming the client and urlFor utilities are at this path
import './Portraits.scss'; // Assuming you have an SCSS file for Portraits

const Portraits = () => {
    const [portraitImages, setPortraitImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "portraits"]'; // Assuming "_type" should be "portraits"
        client.fetch(query).then((data) => {
            setPortraitImages(data);
        });
    }, []);

    return (
        <div className="app__works">
            <h1>Hello</h1>
            <div className="app__work-portfolio">
                {portraitImages.map((portrait, index) => (
                    <div className="app__work-item" key={index}>
                        <img 
                            className="portfolio-image"
                            src={urlFor(portrait.imgUrl)} 
                            alt={portrait.name || "Portrait Image"} 
                        />
                        <div className="image-overlay">{portrait.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portraits;
