/** @format */
import { configureStore } from "@reduxjs/toolkit";
import allArticleReducer from "./AllArticles";
import AnnouncementReducer from "./Announcement";
import ProjectUpdateReducer from "./ProjectUpdate";
import PlatformReducer from "./Platform";
import TechnologyReducer from "./Technology";
import TutorialReducer from "./Tutorial";
import alertReducer from "./alert/index";

export const store = configureStore({
  reducer: {
    AllArticle: allArticleReducer,
    Announcement: AnnouncementReducer,
    ProjectUpdate: ProjectUpdateReducer,
    Platform: PlatformReducer,
    Technology: TechnologyReducer,
    Tutorial: TutorialReducer,
    alert: alertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
