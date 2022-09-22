import React, { useContext, useEffect, useState } from "react";
import "../Banner/Banner.css";
import Media from "react-media";
import { LanguageContext } from "../../Context/LanguageContext";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bgImg1 from "../Banner/background_image.png";
import bgImg2 from "../Banner/Assosiation_Day.png";
import bgImg3 from "../Banner/Daksha.png";
import bgImg4 from "../Banner/IT.jpg";
import { db } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import Line from "../Line/Line";

function Banner(props) {
  const [bannerImg, setBannerImg] = useState([]);
  const { language, setLanguage } = useContext(LanguageContext);
  const [news, setNews] = useState([]);
  useEffect(() => {
    const img = query(
      collection(db, "bannerImages"),
      orderBy("created", "desc")
    );
    onSnapshot(img, (QuerySnapshot) => {
      setBannerImg(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    const q = query(collection(db, "news"), orderBy("created", "desc"));
    onSnapshot(q, (snapshot) => {
      setNews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  console.log(bannerImg);
  const sliceBannerImg = bannerImg.slice(0,7)


  return (
    <>
      <div className="carousel_wrapper">
        <div className="announcement_banner announcement_banner_blur">
          <div className="blur_headings">
            <h1 className="mb-2">GECSKP News</h1>
          </div>

          <div className="announcement_scroll">
            {news.map((news) => {
              return (
                <>
                  <div key={news.id}>
                    <p className="mt-2">
                      <a href={news.pdfURL}>
                        {language ? news.malayalamNews : news.englishNews}
                      </a>
                    </p>
                    <div className="header_announcement_line"></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <Carousel
          autoPlay={true}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div className="carousel">
            <img className="carousel_main_img" src={bgImg1} />
            <div className="carousel_details">
              <div className="carousel_details_section text-start">
                <h1 className="">
                  Government Engineering College, Palakkad, <br />{" "}
                  Sreekrishnapuram
                </h1>

                <h4>
                  <span>
                    Vision : <br />{" "}
                  </span>
                  <i>
                    {" "}
                    Excellence through the wings of science and technology.
                  </i>
                </h4>

                <h4>
                  <span>
                    Mission : <br />
                  </span>
                  <i>
                    To transform youth to talented engineers with creativity and
                    integrity who can meet the technological challenges for the
                    service of society.
                  </i>
                </h4>
              </div>
            </div>
          </div>

          {sliceBannerImg.map((img) => {
            return (
              <>
                <div className="carousel">
                  <img className="carousel_img" src={img.data.imgUrl} />
                  <div className="carousel_details_div">
                    <div className="carousel_headings">
                      <h2>{img.data.bannerHeading}</h2>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
