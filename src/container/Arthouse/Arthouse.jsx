import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Arthouse.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';
const Arthouse = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> Art House Coming Soon</h2>


    </>
  );
};

export default AppWrap(Arthouse, );