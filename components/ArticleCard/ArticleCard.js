import Link from "../Link/Link";

export default function ArticleCard({
  title,
  subtitle,
  authorName,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  return (
    <Link href="/announcements/[slug]" as={`/announcements/${slug}`}>
      <div className="c-articleCardContainer">
        <div className="c-articleCard-imgContainer">
          <img src="/images/article_bg2.png" className="c-articleCard-img" />
        </div>
        <div className="textclass">
          <div className="c-articleCard-dateContainer">
            <span className="c-articleCard-dateTitle">DESIGN RESOURCES</span>
            <span className="c-articleCard-comma"></span>
            <span className="c-articleCard-dateLabel">JAN 2, &nbsp; 2022</span>
          </div>
          <div className="c-articleCard-mainContent">
            Brand new marketplace section: My Store!
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
