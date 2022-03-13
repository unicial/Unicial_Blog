import Link from "../Link/Link";
import moment from "moment";
import { useState } from "react";

export default function ArticleCard({
  contentType,
  title,
  slug,
  date,
  coverImage,
}) {
  // const [toptaburl, setToptabUrl] = useState("");

  return (
    <Link href="/[contentType]/[slug]" as={`/${contentType}/${slug}`}>
      <div className="c-articleCardContainer">
        <div className="c-articleCard-imgContainer">
          <img src={coverImage} className="c-articleCard-img" />
        </div>
        <div className="textclass">
          <div className="c-articleCard-dateContainer">
            <span className="c-articleCard-dateTitle">DESIGN RESOURCES</span>
            <span className="c-articleCard-comma"></span>

            <span className="c-articleCard-dateLabel">
              {moment(date).format("MMMM Do , YYYY")}
            </span>
          </div>
          <div className="c-articleCard-mainContent">

            {title}
          </div>
          <div className="c-articleCard-readMore-container">
            <div className="c-articleCard-readMore-tag">
              <span className="c-articleCard-readMore-span">READ MORE</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
