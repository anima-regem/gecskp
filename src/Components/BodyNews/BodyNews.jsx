import React, { useState, useEffect } from "react";
import "../BodyNews/BodyNews.css";
import { db } from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import News from "../../jsonFiles/news.json";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
import { useNavigate} from "react-router";
import { Link } from "react-router-dom";

function BodyNews() {
  const navigate = useNavigate()
  const {language} = useContext(LanguageContext)
  const [news, setNews] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("created", "desc"));
    onSnapshot(q, (snapshot) => {
      setNews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  // console.log(news);

  const NewsLine = () => {
    return <div className="news__line"></div>;
  };

  const NewsSection = () => {
    return (
      <>
        <div className="marquee_container">
          <div className="marquee_news">
            {news.map((news) => {
              return (
                <div key={news.id} className="body__news__headings">
                  <h4>From {news.newsFrom}</h4>
                  <p><a href={news.pdfURL}>{news.englishNews}</a></p>
                  <NewsLine />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="body__news text-center">
      <div className="news_heading">
        <h1>KTU Notification</h1>
        <NewsLine />
      </div>
      <NewsSection />

      <div className="news__showMore">
        <p>more news</p>
      </div>
    </div>
  );
}

export default BodyNews;
