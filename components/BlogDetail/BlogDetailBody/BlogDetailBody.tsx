import ShareIcon from "@material-ui/icons/Share";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  content?: any;
}

const useStyles = makeStyles((theme) => ({
  c_BlogDetailBody_contentRoot: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    marginTop: "2rem",
    "& p": {
      ...theme.typography.body1,
      color: "white !important",
    },
    "& h1, h2, h3, h4, h5": {
      fontSize: "1.5rem",
      marginBottom: "0",
      marginTop: "2rem",
      color: "white !important",
    },
    "& a": {
      background: "linear-gradient(to right, #ff7c4c 0%, #ffb03a 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    "& li::marker": {
      // background: "linear-gradient(to right, #7F64E2 0%, #41A6EF  100%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      color: "white !important",
    },
  },
}));

export default function BlogDetailBody({ content }: Props) {
  const classes = useStyles();

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { url, fileName } = node.data.target.fields.file;
        return (
          <img
            src={url}
            alt={fileName}
            style={{ height: "auto", width: "100%", margin: "1em 0" }}
          />
        );
      },
      [INLINES.HYPERLINK]: (node: any) => {
        const { uri } = node.data;
        const { value } = node.content[0];
        return (
          <a target="_blank" rel="noreferrer noopener" href={uri}>
            {value}
          </a>
        );
      },
    },
  };

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
          <div className={classes.c_BlogDetailBody_contentRoot}>
            {documentToReactComponents(content, options)}
          </div>
        </div>
      </div>
    </>
  );
}
