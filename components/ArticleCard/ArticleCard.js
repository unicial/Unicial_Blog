import Link from "../Link/Link";
import moment from "moment";

export default function ArticleCard({
  contentType,
  title,
  slug,
  date,
  coverImage,
}) {

  return (
    <Link href="/[contentType]/[slug]" as={`/${contentType}/${slug}`}>
      <div className="c-articleCardContainer">
        <img src={coverImage} className="c-articleCard-imgContainer" />
        <div className="textclass">
          <div className="c-articleCard-dateContainer">
            <span className="c-articleCard-dateTitle">DESIGN RESOURCES</span>
            <span className="c-articleCard-comma"></span>

            <span className="c-articleCard-dateLabel">
              {moment(date).format("MMMM Do , YYYY")}
            </span>
          </div>
          <div className="c-articleCard-DownPart">
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
      </div>
    </Link>
  );
}
