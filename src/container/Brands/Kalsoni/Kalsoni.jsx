import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../../client'; // Assuming the client and urlFor utilities are at this path
import './Kalsoni.scss'; // Assuming you have an SCSS file for Kalsoni

const Kalsoni = () => {
    const [kalsoniImages, setKalsoniImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "kalsoni"]'; // Adjust the content type as needed
        client.fetch(query).then((data) => {
            setKalsoniImages(data);
        });
    }, []);

    return (
        <div className="app__works">
            <h1>Hello Kalsoni</h1>
            <div className="app__work-portfolio">
                {kalsoniImages.map((kalsoni, index) => (
                    <div className="app__work-item" key={index}>
                        <img 
                            className="portfolio-image"
                            src={urlFor(kalsoni.imgUrl)} 
                            alt={kalsoni.name || "Kalsoni Image"} 
                        />
                        <div className="image-overlay">{kalsoni.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kalsoni;

