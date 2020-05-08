
import React, { Component } from 'react';
import { motion } from 'framer-motion'
import dish from '../styles/project.module.scss'

class Project extends Component {
    render() {
        return (
            <motion.div exit={{ opacity: 0 }}>
                <div className={dish.projectWrapper}>
                    <header>
                        <h1>WorkLock</h1>
                        <p className="prePara">
                            Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design
                        </p>
                        <a href="worklock.co.uk">Go to site</a>
                    </header>
                    <main>
                        <img className="fullWidthImage" src="/images/project-main.jpg" />

                        <div className="columnMax3">
                            <img className="columnMax3Image" src="/images/project-main.jpg" />
                            <h5 className="title">Core Principles</h5>
                            <div className="regPara">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infa</p>
                            </div>
                        </div>

                        <img className="fullWidthImage" src="/images/project-main.jpg" />

                        <div className="columnMax3">
                            <img className="columnMax3Image" src="/images/project-main.jpg" />
                            <h5 className="title">Iconography</h5>
                            <div className="regPara">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>

                        <img className="fullWidthImage" src="/images/project-main.jpg" />

                        <div className="columnMax2">
                            <div className="regPara">
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <h5 className="title">Will Cole</h5>
                            <p className="subHeading">WorkLock founder</p>
                        </div>

                        <div className="columnMax2Image">
                            <img className="fullWidthImage" src="/images/project-main.jpg" />
                            <img className="fullWidthImage" src="/images/project-main.jpg" />
                        </div>

                    </main>
                </div>
            </motion.div>
        )
    }
}

export default Project;