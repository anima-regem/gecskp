import React, { useEffect, useState } from "react";
import "../Footer/Footer.css";
import Gandhi from "../Gandhi/Gandhi";
import Line from "../Line/Line";
import Logo from "../Logo/Logo";
import CloudIcon from "@mui/icons-material/Cloud";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import FooterLogo from "../FooterLogo/FooterLogo";
import FooterGandhi from "../FooterGandhi/FooterGandhi";
import axios from "axios";

function Footer() {
  const [weather, setWeather] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=10.9074&lon=76.4126&appid=29bb59576ee061d8f8509f126dd5d400`;
  const palakkadLatLong = [10.775, 76.651];
  const sreekrishnapuramLatLong = [10.9074, 76.4126];
  const Palakkad = [10.775, 76.651];

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     setWeather(res.data);
  //   });
  // }, []);

  let farenheitKelvin = weather.main ? weather.main.temp : null;

  let farenheit = (farenheitKelvin - 273.15) * 1.8 + 32; //kelvin to farenheit
  let celsius = ((farenheit - 32) * 5) / 9; //farenheit to celcius

  // [(°F-32)×5]/9.
  //console.log(celsius);

  const FooterLine = () => {
    return <div className="footer_line"></div>;
  };

  return (
    <div className="footer_section">
      <div className="footer">
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-4">
              <p className="footer__heading">HELPFUL LINKS</p>
              <FooterLine />
              <div className="footer__links">
                <p>DDFS</p>
                <p>Admission</p>
                <p>Hostel</p>
                <p>DTE Website</p>
                <p>KTU Website</p>
                <p>Site map</p>
                <p>news letter</p>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="footer__heading">COLLEGE REG IDs</p>
              <FooterLine />
              <div className="footer__links">
                <p>AICTE Permanent ID: 1-5142601</p>
                <p>AISHE ID : C-43298</p>
                <p>National Scholarship Portal ID : KL-C01234</p>
                <p>Swayam Local Chapter ID : 1430</p>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="footer__heading">GECSKP LIVE</p>
              <FooterLine />
              <div className="footer_weather_section">
                <div className="footer_weather">
                  <p>WEATHER</p>
                  <div className="weather_data">
                    <CloudIcon />
                    <p>
                      {farenheit.toFixed(2)}
                      <span>&#176;</span>F/{celsius.toFixed(2)}
                      <span>&#176;</span>C
                    </p>
                  </div>
                  {/* <p><LocationOnSharpIcon/>SREEKRISHNAPURAM </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer__logo pt-4">
            <FooterLine />
            <div className="row">
              <div className="col-lg-6 col-9">
                <FooterLogo />
              </div>
              <div className="col-lg-6 col-2 text-end">
                <FooterGandhi />
              </div>
            </div>
            <FooterLine />
          </div>
        </div>
        <div className="footer__bottom text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-7">
                <p className="bottom_link">
                  2022 gecskp.ac.in | All rights reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-5 footer_bottom_privacy">
                <p className="footer_privacy">Privacy Policy</p>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
