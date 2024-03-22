//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


//include bootstrap npm library into the bundle
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './icons.js';

//include your index.scss file into the bundle
import '../styles/index.css';

//import your own components
import Layout from './Layout.jsx';

//render your react application
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);