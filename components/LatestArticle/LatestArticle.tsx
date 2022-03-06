export default function LatestArticle() {
  return (
    <>
      <div className="c-latestArticle-container">
        <div className="c-latestArticle-leftPart">
          <div className="c-latestArticle-dateContainer">
            <span className="c-latestArticle-dateTitle">DESIGN RESOURCES</span>
            <span className="c-latestArticle-comma"></span>
            <span className="c-latestArticle-dateLabel">
              JAN 2, &nbsp; 2022
            </span>
          </div>
          <div className="c-latestArticle-mainTitle">
            Behind the scenes of our new design system
          </div>
          <div className="c-latestArticle-mainContent">
            Sometimes we’re working within time constraints and sometimes we
            just haven’t yet agreed upon a path forward.
          </div>
        </div>
        <div className="c-latestArticle-rightPart">
          <img src="/images/earth.png" className="c-latestArticle-image" />
        </div>
      </div>
    </>
  );
}
