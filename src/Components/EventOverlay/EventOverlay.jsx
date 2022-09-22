import React from 'react'
import { useContext } from "react";
import { EventOverlayContext } from '../../Context/EventOverlayContext';
// import '../EventOverlay/EventOverlay.css'
import { useSpring,animated } from 'react-spring';

const EventOverlay = () => {

  const eventOverlayAnimation = useSpring({
    from:{width:'0',height:'0'},
    to:{width:'1100px',height:'650px'},
  })
  const overlayImageAnimation = useSpring({
    from: { opacity: 0,width:'0',height:'0'},
    to: { opacity: 1}
  })

    const { setOverlay, overlay, overlayImages } =
      useContext(EventOverlayContext);
  
    return (
      <>
        <div className="event_overlay_section">
          {overlayImages.map((details) => {
            return (
              <>
                <animated.div style={eventOverlayAnimation} className="event_overlay">
                  <div className="overlay_heading">
                    <div className="heading">
                      <h1 className="event_overlay_heading">DAKSHA ‘22</h1>
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
                      <p className="overlay_para">{details.aboutDaksha}</p>
                    </div>
  
                    <img className="overlay_img" src={details.img_1} alt="image" />
                    <img className="overlay_img" src={details.img_2} alt="image" />
                    <img className="overlay_img" src={details.img_3} alt="image" />
                    <img className="overlay_img" src={details.img_4} alt="image" />
                    <img className="overlay_img" src={details.img_5} alt="image" />
                  </div>
                </animated.div>
              </>
            );
          })}
        </div>
      </>
    );
  };

export default EventOverlay