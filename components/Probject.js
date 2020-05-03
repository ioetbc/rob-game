import react, { Component, Fragment, useEffect } from 'react';
import style from '../styles/Projects.module.scss'

const Probject = ({ probject }) => {
    return (
        <div className={`probject ${style.probject}`} >
            <h3>title</h3>
            <p>description</p>
            <img className={`probject-image:${probject}`} src="/images/palceholder-probject-image.jpg" />
        </div>
    );
}

export default Probject;