import React from "react";
import "../Events/Events.css";
import events from "../../jsonFiles/events.json";
import Marquee from "react-fast-marquee";

function Events() {
  return (
    <>
      <div className="event_section">
        <Marquee
          pauseOnHover={true}
          speed={40}
          loop={0}
          gradient={false}
          // gradientColor={[128,0,0]}
          // gradientWidth={250}
        >
          {events.map((event) => (
            <div key={event.id} className="event__img">
              <img src={event.image} alt="daksha" />
              <div className="event__img__details">
                <h3>{event.heading}</h3>
                <p>{event.time}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default Events;
