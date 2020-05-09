import style from '../styles/about.module.scss';

const About = () => {
    return (
        <div className={style.aboutWrapper}>
            <div className={style.aboutContent}>
            <div className={style.fuck}>
                <div className={style.intro}>
                        <h2>About Me</h2>
                        <div className={style.col2}>
                            <h5 className={style.headingSmall}>Rob Game</h5>
                            <p>A Hampshire based designer with give years of experience working at digital agencies, marketing agencies and freelancing</p>
                        </div>
                    </div>
                </div>

                <div className={style.fuck}>
                    <div className={style.skillSet}>
                        <h5 className={style.headingSmall}>Skill Set</h5>
                        <ul>
                            <li>Design</li>
                            <li>Branding</li>
                            <li>Illustration</li>
                            <li>Motion Graphics</li>
                            <li>Direction</li>
                        </ul>
                    </div>
                </div>

                <div className={style.experience}>
                    <div className={style.work}>
                        <h2>Experience</h2>
                        <div className={style.col2}>
                            <h5 className={style.headingSmall}>Current Postitions</h5>
                            <p>Think Creative - Designer World Food Programme, Consultant Freelance</p>
                        </div>
                        <div className={style.col2}>
                            <h5 className={style.headingSmall}>Previous Postitions</h5>
                            <ul>
                                <li>Big Mallet - lead designer</li>
                                <li>Clockwork Pie - designer</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.interests}>
                        <div className={style.col2}>
                            <h5 className={style.headingSmall}>Interests and preferences</h5>
                            <ul>
                                <li>Playing Guitar</li>
                                <li>Strenth and conditioning</li>
                                <li>Eating Lasagne</li>
                                <li>Black coffee</li>
                                <li>Video games</li>
                                <li>Jaffa cakes</li>
                            </ul>
                        </div>
                        <div className={style.col2}>
                            <h5 className={style.headingSmall}>Achievments</h5>
                            <div>
                                <p>Distinction in Creative multimedia and Design FDA</p>
                                <p>A levels in Media Studies, Music Technolog and English Lit/Lang</p>
                                <p>250kg Deadlift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;