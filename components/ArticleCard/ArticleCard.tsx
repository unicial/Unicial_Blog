export default function ArticleCard() {
  return (
    <>
      <div className="c-articleCardContainer">
        <img
          src="/images/article_bg1.png"
          className="c-articleCard-imgContainer"
        />
        <div className="c-articleCard-dateContainer">
          <span className="c-articleCard-dateTitle">DESIGN RESOURCES</span>
          <span className="c-articleCard-comma"></span>
          <span className="c-articleCard-dateLabel">JAN 2, &nbsp; 2022</span>
        </div>
        <div className="c-articleCard-mainContent">
          Brand new marketplace section: My Store!
        </div>
        <div className="c-articleCard-readMore">READ MORE </div>
      </div>
    </>
  );
}
