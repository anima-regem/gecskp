import React from "react";
import "../PrincipleMessage/PrincipleMessage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import bgImg from "../../";

function PrincipleMessage() {
    return (
        <div className="PrincipleMessage_section">
            <div className="PrincipleMessage">
                <div className="background_design">
                    <div className="container">
                        <div className="row principle_heading pt-5">
                            <h1>Vision & Mission Statement</h1>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-12 message_logo">
                                <img
                                    className="logo_img"
                                    src="/images/logo.png"
                                    alt=""
                                />
                                <h3 className="message_logo_para">
                                    Government Engineering College, Palakkad,{" "}
                                    <br /> Sreekrishnapuram
                                </h3>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="col-lg-12 pt-5">
                                    <h2>Vision</h2>
                                    <p className="vision_para">
                                        "Excellence through the wings of science
                                        and technology."
                                    </p>
                                </div>
                                <div className="col-lg-12 pt-4 pb-5">
                                    <h2>Mission</h2>
                                    <p className="mission_para">
                                        "To transform youth to talented
                                        engineers with creativity and integrity
                                        who can meet the technological
                                        challenges for the service of society."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 pt-5 pb-5 message_div">
                                <h1>Message from principal</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="principle_img">
                                        <img
                                            src="/images/principle_img.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <p className="message">
                                        Warm Greetings! <br />
                                        Fresh hopes of a bright future keep us
                                        going in the post-pandemic era. Lessons
                                        leart well should make us better
                                        citizens who are responsible towards
                                        nature and fellow beings. Being one of
                                        the worst affected segments by COVID-19,
                                        the technical education sector should
                                        take up the duty of exploring various
                                        means of technological interventions to
                                        improve quality of life and to reducing
                                        human suffering. Typical domains are
                                        agriculture and healthcare in the
                                        country. Collaboration among different
                                        knowledge systems is essential to make
                                        the country reach among the best in the
                                        world.
                                    </p>
                                    <h2 className="principle_name">
                                        Dr. PC Reghuraj
                                    </h2>
                                    <p className="principle">Principal</p>
                                </div>
                                <div className="col-lg-6 col-6 mobile_img_div">
                                    <img
                                        className="principle_mobile_img"
                                        src="/images/principle_img.png"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 col-6 mobile_para_div">
                                    <h3 className="mobile_principle_name">
                                        Dr. PC Reghuraj
                                    </h3>
                                    <p className="principle_mobile">
                                        Principal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrincipleMessage;
