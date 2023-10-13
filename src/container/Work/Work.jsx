import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppWrap } from '../../wrapper';
import './Work.scss';
import { urlFor, client } from '../../client';
import Brands from "../Brands/Brands";
import Graduations from "../Graduations/Graduations";
import Portraits from "../Portraits/Portraits";

const Work = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';
        client.fetch(query).then(data => {
            setWorks(data);
        });
    }, []);

    const links = [
        { path: "/Brands", name: "Brands" }, 
        { path: "/portraits", name: "Portraits" },
        { path: "/Graduations", name: "Graduations" },
        { path: "/podcast", name: "Podcast" },
       
    ];
    const imageTexts = ["Brands", "Portraits", "Graduations", "Podcast"];


    return (
        <>
            <h2 className="head-text"> <span>Portfolio</span> </h2>
            <div className="app__work-portfolio">
                {works.slice(0, 4).map((work, index) => (
                    <div className="app__work-item" key={index}>
                    <Link to={links[index].path} className="work-link">
                        <img
                            src={urlFor(work.imgUrl)}
                            alt="Description here" // Example alt text
                            className="portfolio-image"
                        />
                        <div className="work-overlay">{imageTexts[index]}</div>
                    </Link>
                </div>
                
                ))}
            </div>
        </>
    )
}

export default AppWrap(Work, 'work');
