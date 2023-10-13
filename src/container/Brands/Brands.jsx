import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../../client';
import './Brands.scss';
import Belongings from './Belongings/Belongings';
import Slfmade from './Slfmade/Slfmade';
import Kalsoni from './Kalsoni/Kalsoni';

const Brands = () => {
    const [brandImages, setBrandImages] = useState([]);

    useEffect(() => {
        const query = '*[_type == "brands"]';
        client.fetch(query).then((data) => {
            setBrandImages(data);
        });
    }, []);

    const links = [  
        { path: "/Slfmade", name: "Slfmade" },
        { path: "/Belongings", name: "Belongings" },
        { path: "/Kalsoni", name: "Kalsoni" }
    ];

    return (
        <div className="app__works">
            <div className="app__work-portfolio">
                {brandImages.map((brand, index) => (
                    <div className="app__work-item" key={index}>
                        <Link to={links[index].path} className="brand-link">
                            <img
                                className="portfolio-image"
                                src={urlFor(brand.imgUrl)}
                                alt={brand.name || "Brand Image"}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;
