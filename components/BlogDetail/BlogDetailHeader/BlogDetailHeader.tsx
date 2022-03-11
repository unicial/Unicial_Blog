import moment from "moment";

interface Props {
  title: string;
  slug: string;
  description: string;
  date: any;
  coverImage: any;
}
export default function BlogDetailHeader({
  title,
  slug,
  description,
  date,
  coverImage,
}: Props) {
  return (
    <>
      <div className="c-blogDetailHeader-container">
        <img className="c-blogDetailHeader-bgContainer" src={coverImage} />
        <div className="c-blogDetailHeader-mainContentContainer">
          {/* ----copy part start from articleCard---- */}
          <div className="c-articleCard-dateContainer">
            <span className="c-articleCard-dateTitle">ANNOUNCEMENTS</span>
            <span className="c-articleCard-comma"></span>

            <span className="c-articleCard-dateLabel">
              {moment(date).format("MMMM  Do,  YYYY")}
            </span>
          </div>
          {/* ----copy part end---- */}
          <div className="c-blogDetailHeader-title">{title}</div>
          <div className="c-blogDetailHeader-description">{description}</div>
        </div>
      </div>
    </>
  );
}
