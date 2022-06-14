import { IPosts } from "../../pages/posts/posts.inteface";

export interface IPostsState {
  postsData: { limit: number; posts: IPosts[]; skip: number; total: number };
  isLoadind: boolean;
  error: string;
}

export interface IOnePostState {
  postData: IPosts;
  isLoadind: boolean;
  error: string;
}
