import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import style from '../styles/scroll.module.scss';
import Probjects from '../components/probjects';
import About from '../components/About';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <title>My page title</title>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js" />
                    <link rel="stylesheet" href="https://use.typekit.net/nvy3bvq.css"></link>
                    <link
                        rel="preload"
                        href="/fonts/acumin-pro.woff2"
                        as="font"
                        crossOrigin=""
                    />
                </Head>

                <div id="example-wrapper" className={style.horizontal}>
                    <div class={style.scrollContent}>
                        <section className="video">
                        </section>

                        <Probjects />

                        <About />

                    </div>

                </div>























                {/*<motion.div
                    class="test"
                    initial={{ y: "100%" }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.4
                    }}
                />
                <motion.div
                    class="test white"
                    initial={{ y: "100%" }}
                    exit={{ y: "-200%" }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8
                    }}
                />*/}
                    </Fragment>

        )
    }
}

export default App;