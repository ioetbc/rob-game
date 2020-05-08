
import React, { Component } from 'react';
import { motion } from 'framer-motion'
import style from '../styles/project.module.scss'

class Project extends Component {
    render() {

        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerDirection: 1
              }
            }
          }
          
          const item = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }

        return (
            <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            >
                <div className={style.projectWrapper}>
                    <header className={style.projectHeader}>
                        <h1 className={style.projectHeading}>WorkLock</h1>
                        <p className={style.pre}>
                            Brand identity, Print design, Logo Design, Motion Graphics. Website design and Icon design
                        </p>
                        <a className={style.link} href="worklock.co.uk">Go to site</a>
                    </header>
                    <main className={style.main}>
                        <section>
                            <img className="fullWidthImage" src="/images/project-main.jpg" />                        
                        </section>

                        <section>
                            <div className={style.col3}>
                                <img src="/images/project-main.jpg" />
                                <h5 className={style.title}>Core Principles</h5>
                                <div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                        
                                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infa</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <img className="fullWidthImage" src="/images/project-main.jpg" />
                        </section>

                        <section>
                            <div className={style.col3}>
                                <img src="/images/project-main.jpg" />

                                <h5 className={style.title}>Iconography</h5>
                                <div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <img className="fullWidthImage" src="/images/project-main.jpg" />
                        </section>

                        <section>
                            <div className={style.content}>
                                <div className={style.quoteWrapper}>
                                    <p className={style.quote}>
                                        "It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted."
                                    </p>
                                    <div>
                                    <p
                                        className={style.quoteName}
                                        style={{ marginBottom: 0 }}
                                    >
                                        Will Cole
                                    </p>
                                    <p className={style.quoteCompany}>Worklock founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.col2}>
                                <img className="fullWidthImage" src="/images/project-main.jpg" />
                                <img className="fullWidthImage" src="/images/project-main.jpg" />
                            </div>
                        </section>

                    </main>
                </div>
            </motion.div>
        )
    }
}

export default Project;