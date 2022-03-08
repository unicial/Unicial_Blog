export default function BlogDetailHeader() {
  return (
    <>
      <div className="c-blogDetailHeader-container">
        <img
          className="c-blogDetailHeader-bgContainer"
          src="/images/article_bg2.png"
        />
        <div className="c-blogDetailHeader-mainContentContainer">
          {/* ----copy part start from articleCard---- */}
          <div className="c-articleCard-dateContainer">
            <span className="c-articleCard-dateTitle">ANNOUNCEMENTS</span>
            <span className="c-articleCard-comma"></span>
            <span className="c-articleCard-dateLabel">JAN 2, &nbsp; 2022</span>
          </div>
          {/* ----copy part end---- */}
          <div className="c-blogDetailHeader-title">
            Introducing the Transparency OS
          </div>
          <div className="c-blogDetailHeader-description">
            Processing public information into actionable insights.
          </div>
        </div>
      </div>
    </>
  );
}
