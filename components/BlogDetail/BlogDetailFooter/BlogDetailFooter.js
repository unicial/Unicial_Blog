import { Grid } from "@material-ui/core";
import ArticleCard from "../../ArticleCard/ArticleCard";

// interface Props {
//   morePosts?: any;
// }

export default function BlogDetailFooter({ morePosts }) {
  console.log("morePosts", morePosts);
  return (
    <>
      <div className="c-blogDetailFooter-root">
        <div className="c-blogDetailFooter-relatedArticleContainer">
          <Grid container spacing={4}>
            {morePosts?.map((fields) => (
              <Grid item xs={12} sm={6} md={4}>
                <ArticleCard
                  title={fields.title}
                  slug={fields.slug}
                  date={fields.date}
                  coverImage={fields.coverImage?.fields.file.url}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
