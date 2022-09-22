import "../EventBody/EventBody.css";
import { useEffect } from "react";
import eventPageDetails from "../../jsonFiles/eventPageDetails.json";
import { useState } from "react";
import { EventOverlayContext } from "../../Context/EventOverlayContext";
import { useContext } from "react";

const EventOverlay = () => {
    const { setOverlay, overlay, overlayImages } =
        useContext(EventOverlayContext);

    return (
        <>
            <div className="event_overlay_section">
                {overlayImages.map((details) => {
                    return (
                        <>
                            <div className="event_overlay">
                                <div className="overlay_heading">
                                    <div className="heading">
                                        <h1 className="event_overlay_heading">
                                            DAKSHA '22
                                        </h1>
                                    </div>
                                    <div className="close_icon">
                                        <i
                                            onClick={() => {
                                                setOverlay(!overlay);
                                            }}
                                            className="bi bi-x event_overlay_icon"
                                        ></i>
                                    </div>
                                </div>

                                <div className="overlay_images_section">
                                    <div className="overlay_para_div">
                                        <p className="overlay_para">
                                            {details.aboutDaksha}
                                        </p>
                                    </div>

                                    <img
                                        className="overlay_img"
                                        src={details.img_1}
                                        alt=""
                                    />
                                    <img
                                        className="overlay_img"
                                        src={details.img_2}
                                        alt=""
                                    />
                                    <img
                                        className="overlay_img"
                                        src={details.img_3}
                                        alt=""
                                    />
                                    <img
                                        className="overlay_img"
                                        src={details.img_4}
                                        alt=""
                                    />
                                    <img
                                        className="overlay_img"
                                        src={details.img_5}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

function EventBody() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [overlay, setOverlay] = useState(false);
    const [overlayImages, setOverlayImages] = useState("");

    const eventClick = (details) => {
        setOverlay(!overlay);
        setOverlayImages(details);
    };

    return (
        <EventOverlayContext.Provider
            value={{ setOverlay, overlay, overlayImages }}
        >
            <div className="event_body">
                <div className="event_container">
                    {eventPageDetails.map((details, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => eventClick(details.dakshaImages)}
                                className="event_banner"
                            >
                                <img
                                    className="event_img"
                                    src={details.imageURL}
                                    alt=""
                                />
                                <h3 className="event_heading">
                                    {details.eventHeading}
                                </h3>
                            </div>
                        );
                    })}
                </div>
                {overlay ? <EventOverlay /> : null}
            </div>
        </EventOverlayContext.Provider>
    );
}

export default EventBody;
