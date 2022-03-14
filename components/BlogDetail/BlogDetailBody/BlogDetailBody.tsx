import ShareIcon from "@material-ui/icons/Share";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  content?: any;
}

const useStyles = makeStyles((theme) => ({
  c_BlogDetailBody_contentRoot: {
    marginTop: "2rem",
    "& p": {
      // ...theme.typography.body1,
      color: "white !important",
    },
    "& li::marker": {
      // background: "linear-gradient(to right, #7F64E2 0%, #41A6EF  100%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      color: "white ",
    },
  },
  c_BlogDetailBody_ulRoot: {
    "li::before": {
      // background: "linear-gradient(to right, #7F64E2 0%, #41A6EF  100%)",
      // WebkitBackgroundClip: "text",
      // WebkitTextFillColor: "transparent",
      color: "white",
      display: "inlineBlock",
    },
  },
  atag: {
    // background: "linear-gradient(to right, #ff7c4c 0%, #ffb03a 100%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    textDecoration: "underline",
    color: "white",
  },
}));

export default function BlogDetailBody({ content }: Props) {
  const classes = useStyles();

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <>
          <p style={{ color: "white !important" }}>{children}</p>
        </>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <>
          <h1 style={{ color: "white !important" }}>{children}</h1>
        </>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <>
          <h2 style={{ color: "white !important" }}>{children}</h2>
        </>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <>
          <h3 style={{ color: "white !important" }}>{children}</h3>
        </>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <>
          <h4 style={{ color: "white !important" }}>{children}</h4>
        </>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <>
          <h5 style={{ color: "white !important" }}>{children}</h5>
        </>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <>
          <h6 style={{ color: "white !important" }}>{children}</h6>
        </>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <>
          <ol style={{ color: "white !important" }}>{children}</ol>
        </>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <>
          <ul style={{ color: "white !important" }}>{children}</ul>
        </>
      ),

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
          <a
            target="_blank"
            rel="noreferrer noopener"
            className={classes.atag}
            style={{
              background: "linear-gradient(to right, #ff7c4c 0%, #ffb03a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "underline !important",
            }}
            href={uri}
          >
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
