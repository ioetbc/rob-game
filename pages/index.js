import React, { Component, Fragment } from 'react';
import Head from 'next/head'


class App extends Component {

    componentDidMount() {
	var controller = new ScrollMagic.Controller({vertical: false});
    var controller2 = new ScrollMagic.Controller({vertical: false});
	var controller3 = new ScrollMagic.Controller({vertical: false});
    var controller4 = new ScrollMagic.Controller({vertical: false});

	var tween = TweenMax.to("#target", 0.5, { "max-width": "+=300" });
	var tween2 = TweenMax.to("#target2", 0.5, { "max-width": "+=300" });
	var tween3 = TweenMax.to("#target3", 0.5, { "max-width": "+=300" });
	var tween4 = TweenMax.to("#target4", 0.5, { "max-width": "+=300" });
    
    const halfScreenWidth = window.innerWidth / 2

	new ScrollMagic.Scene({ triggerElement: "#target", duration: halfScreenWidth })
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    
	new ScrollMagic.Scene({ triggerElement: "#target2", duration: halfScreenWidth })
        .setTween(tween2)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller2);

    new ScrollMagic.Scene({ triggerElement: "#target3", duration: halfScreenWidth })
        .setTween(tween3)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller3);

    new ScrollMagic.Scene({ triggerElement: "#target4", duration: halfScreenWidth })
        .setTween(tween4)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller4);
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
                </Head>

                <div id="example-wrapper" class="horizontal">
                    <div class="scrollContent">
                        <section className="video"></section>
                            <div id="target" class="box2 blue">
                                <div class="image-wrapper">
                                    <img src="/images/palceholder-probject-image.jpeg" />                                
                                </div>
                            </div>

                            <div id="target2" class="box2 blue">
                                <div class="image-wrapper">
                                    <img src="/images/palceholder-probject-image-2.jpeg" />
                                </div>
                            </div>
                            <div id="target3" class="box2 blue">
                                <div class="image-wrapper">
                                    <img src="/images/palceholder-probject-image-3.jpeg" />
                                </div>
                            </div>

                            <div id="target4" class="box2 blue">
                                <div class="image-wrapper">
                                    <img src="/images/palceholder-probject-image-4.jpeg" />
                                </div>
                            </div>

                            <div class="spacer s_viewport"></div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default App;