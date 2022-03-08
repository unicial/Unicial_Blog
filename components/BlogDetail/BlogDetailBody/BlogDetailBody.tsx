import ShareIcon from "@material-ui/icons/Share";
export default function BlogDetailBody() {
  return (
    <>
      <div className="c-blogDetailBody-root">
        <div className="c-blogDetailBody-container">
          <div className="c-blogDetailBody-shareContainer">
            <div className="c-blogDetailBody-markContainer">
              <img
                src="/images/logo.svg"
                className="c-blogDetailBody-markImg"
              />
              <span className="c-blogDetailBody-markDescription">
                DAO Governance Squad
              </span>
            </div>
            <a className="c-blogDetailBody-linkContainer" href="#">
              <span className="c-blogDetailBody-linkTitle">SHARE</span>
              <ShareIcon className="c-blogDetailBody-linkIcon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
