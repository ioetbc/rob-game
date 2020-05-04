import React, { Component, Fragment } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { transition: false }
    }

    componentDidMount() {

        const item = document.getElementById('example-wrapper')
        item.addEventListener('wheel', (e) => item.scrollLeft -= (e.deltaY * 1.5));
        
        var controller = new ScrollMagic.Controller({ vertical: false });

        var tween = TweenMax.to("#target", 1, { width: "+=800px" });
        var tween2 = TweenMax.to("#target2", 1, { width: "+=800px" });
        var tween3 = TweenMax.to("#target3", 1, { width: "+=800px" });
        var tween4 = TweenMax.to("#target4", 1, { width: "+=800px" });
        var tween5 = TweenMax.to("#target5", 1, { width: "+=800px" });
        var tween6 = TweenMax.to("#target6", 1, { width: "+=800px" });
        var tween7 = TweenMax.to("#target7", 1, { width: "+=800px" });
        var tween8 = TweenMax.to("#target8", 1, { width: "+=800px" });
        var tween9 = TweenMax.to("#target9", 1, { width: "+=800px" });
        var tween10 = TweenMax.to("#target10", 1, { width: "+=800px" });
        var tween11 = TweenMax.to("#target11", 1, { width: "+=800px" });
        var tween12 = TweenMax.to("#target12", 1, { width: "+=800px" });
        var tween13 = TweenMax.to("#target13", 1, { width: "+=800px" });
        var tween14 = TweenMax.to("#target14", 1, { width: "+=800px" });


        
        const halfScreenWidth = window.innerWidth / 2

        new ScrollMagic.Scene({ triggerElement: "#target", duration: halfScreenWidth })
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
        
        new ScrollMagic.Scene({ triggerElement: "#target2", duration: halfScreenWidth })
            .setTween(tween2)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#target3", duration: halfScreenWidth })
            .setTween(tween3)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#target4", duration: halfScreenWidth })
            .setTween(tween4)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

            new ScrollMagic.Scene({ triggerElement: "#target5", duration: halfScreenWidth })
            .setTween(tween5)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target6", duration: halfScreenWidth })
            .setTween(tween6)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target7", duration: halfScreenWidth })
            .setTween(tween7)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target8", duration: halfScreenWidth })
            .setTween(tween8)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target9", duration: halfScreenWidth })
            .setTween(tween9)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target10", duration: halfScreenWidth })
            .setTween(tween10)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target11", duration: halfScreenWidth })
            .setTween(tween11)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target12", duration: halfScreenWidth })
            .setTween(tween12)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target13", duration: halfScreenWidth })
            .setTween(tween13)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
            new ScrollMagic.Scene({ triggerElement: "#target14", duration: halfScreenWidth })
            .setTween(tween14)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);


    }

//     <motion.div
//     class="test red"
//     initial={{ y: "200%", height: '100vh' }}
//     exit={{ y: "-100%", height: 0 }}
//     transition={{
//         delay: 2,
//         duration: 4,
//         y: { type: "spring" }                        }}
    
// />

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
                </Head>

                <div id="example-wrapper" class="horizontal">
                        <div class="scrollContent">
                            <section className="video">
                            </section>

                                <Link href="/project" onClick={() => this.setState({ transition: true })}>
                                    <div id="target" class="box2 blue">
                                        <div class="image-wrapper">
                                            <img id="hello" src="/images/palceholder-probject-image.jpeg" />                                
                                        </div>
                                    </div>
                                </Link>

                                <div id="target2" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello2" src="/images/palceholder-probject-image-2.jpeg" />
                                    </div>
                                </div>
                                <div id="target3" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello3" src="/images/palceholder-probject-image-3.jpeg" />
                                    </div>
                                </div>

                                <div id="target4" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image.jpeg" />
                                    </div>
                                </div>
                                <div id="target5" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-2.jpeg" />
                                    </div>
                                </div>
                                <div id="target6" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-3.jpeg" />
                                    </div>
                                </div>
                                <div id="target7" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image.jpeg" />
                                    </div>
                                </div>
                                <div id="target8" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-2.jpeg" />
                                    </div>
                                </div>
                                <div id="target9" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-3.jpeg" />
                                    </div>
                                </div>
                                <div id="target10" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image.jpeg" />
                                    </div>
                                </div>
                                <div id="target11" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-2.jpeg" />
                                    </div>
                                </div>
                                <div id="target12" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-3.jpeg" />
                                    </div>
                                </div>
                                <div id="target13" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image.jpeg" />
                                    </div>
                                </div>
                                <div id="target14" class="box2 blue">
                                    <div class="image-wrapper">
                                        <img id="hello4" src="/images/palceholder-probject-image-2.jpeg" />
                                    </div>
                                </div>



                                <div class="spacer s_viewport"></div>
                        </div>
                    </div>                
                <motion.div
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
                />
                    </Fragment>

        )
    }
}

export default App;