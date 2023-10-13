import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client'; // Assuming the client and urlFor utilities are at this path
import './Graduations.scss'; // Assuming you have an SCSS file for Graduations

const Graduations = () => {
    const [graduationImages, setGraduationImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "graduations"]'; // Assuming "_type" should be "graduations"
        client.fetch(query).then((data) => {
            setGraduationImages(data);
        });
    }, []);

    return (
        <div className="app__works">
            <h1>Hello</h1>
            <div className="app__work-portfolio">
                {graduationImages.map((graduation, index) => (
                    <div className="app__work-item" key={index}>
                        <img 
                            className="portfolio-image"
                            src={urlFor(graduation.imgUrl)} 
                            alt={graduation.name || "Graduation Image"} 
                        />
                        <div className="image-overlay">{graduation.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Graduations;
