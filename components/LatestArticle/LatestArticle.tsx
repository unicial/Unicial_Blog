import { useEffect, useState } from "react";
import { getLatestPost } from "../../lib";
import moment from "moment";

export default function LatestArticle() {
  const [latestPost, setLatestPost] = useState<any | undefined>();

  useEffect(() => {
    getLatestPost().then((e: any) => {
      setLatestPost(e);
    });
  }, []);

  // console.log("latestpost##", latestPost.fields.date);

  return (
    <>
      <div className="c-latestArticle-container">
        <div className="c-latestArticle-leftPart">
          <div className="c-latestArticle-dateContainer">
            <span className="c-latestArticle-dateTitle">DESIGN RESOURCES</span>
            <span className="c-latestArticle-comma"></span>
            <span className="c-latestArticle-dateLabel">
              {moment(latestPost?.fields.date).format("MMMM Do , YYYY")}
            </span>
          </div>
          <div className="c-latestArticle-mainTitle">
            {latestPost?.fields.title}
          </div>
          <div className="c-latestArticle-mainContent">
            {latestPost?.fields.description}
          </div>
        </div>
        <div className="c-latestArticle-rightPart">
          <img
            src={latestPost?.fields.coverImage?.fields.file.url}
            className="c-latestArticle-image"
          />
        </div>
      </div>
    </>
  );
}
