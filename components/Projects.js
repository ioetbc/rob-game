import react, { Component, Fragment, useEffect } from 'react';
import style from '../styles/Projects.module.scss'
import Probject from '../components/Probject';
// import observeProbjects from '../utils/observeProbjects';


const Projects = ({ probjects }) => {
    return (
      <main className={`container ${style.container}`}>
		<div className={style.wrapper}>
			<div className={style.placeholder}></div>
			{probjects.map(p => <Probject probject={p} />)}
		</div>
    </main>
    );
}

export default Projects;