import React, { useEffect, useState } from "react";
import "../Body/Body.css";
import BodyNews from "../BodyNews/BodyNews";
import PrincipleMessage from "../PrincipleMessage/PrincipleMessage";
import Faculty from "../Faculty/Faculty";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Events from "../Events/Events";
import Marquee from "react-fast-marquee";
import BodyAnnouncement from "../BodyAnnouncement/BodyAnnouncement";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const ImpDates = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "upcommingEvents"),
      orderBy("created", "desc")
    );
    onSnapshot(q, (QuerySnapshot) => {
      setData(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sliceEvents = data.slice(0, 3);
  return (
    <>
      <div className="col-lg-12 col-md-12">
        <div className="row">
          <div className="col-lg-12">
            <p className="dates_heading">Important Dates</p>
          </div>
          <div className="col-lg-12 dates_line_div">
            <div className="dates_line"></div>
          </div>

          {sliceEvents.map((date) => {
            return (
              <>
                <div className="col-lg-4 col-12">
                  <div className="date">
                    <div>
                      <p className="month">{date.data.month}</p>
                      <p className="day">{date.data.day}</p>
                    </div>
                    <h2>{date.data.eventName}</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

function Body() {
  const [upcommingEvents, setUpcommingEvents] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "upcommingEvents"),
      orderBy("created", "desc")
    );
    onSnapshot(q, (QuerySnapshot) => {
      setUpcommingEvents(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sliceEvents = upcommingEvents.slice(0, 2);
  console.log(sliceEvents);

  return (
    <div className="body_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 body__announcement__section">
            <BodyAnnouncement />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-12">
            <div className="row">
              {sliceEvents.map((event) => {
                return (
                  <>
                    <div className="col-lg-6 col-md-6 col-6 upcomming__events">
                      <img src={event.data.imgUrl} alt="" />
                      <p>{event.data.about}</p>
                    </div>
                  </>
                );
              })}
              <ImpDates />
              <div className="col-lg-6 col-md-6 mt-5 upcomming__events events__bottom">
                <img src="/images/Assosiation_Day.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-lg-6 col-md-6 mt-5 upcomming__events events__bottom">
                <img src="/images/Daksha.png" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12 body__news__section">
            <BodyNews />
          </div>
        </div>
      </div>

      <PrincipleMessage />
      <div className="faculty__body__section">
        <div className="container">
          <div className="faculty__body__heading">
            <h1>Meet the faculty</h1>
            <p>
              View all <KeyboardArrowRightIcon className="faculty__icon" />
            </p>
          </div>
          <Faculty />
        </div>
      </div>

      <Events />
    </div>
  );
}

export default Body;
