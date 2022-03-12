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
            {morePosts?.map((morePost) => (
              <Grid item xs={12} sm={6} md={4}>
                <ArticleCard
                  title={morePost.fields.title}
                  slug={morePost.fields.slug}
                  date={morePost.fields.date}
                  coverImage={morePost.fields.coverImage?.fields.file.url}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
