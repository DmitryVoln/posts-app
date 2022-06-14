import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { IPosts } from "../posts/posts.inteface";
import {
  requestPosts,
  requestPostsByString,
} from "../../redux/reducers/actionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Posts from "../posts/posts";
import Post from "../post/post";
import { pagesListMaker } from "../../utils/pagesListMaker";

const POSTS_ON_PAGE = 10;

const Main = (): JSX.Element => {
  const [postsList, setPostsList] = useState<IPosts[]>([]);
  const [pageLimit, setPageLimit] = useState<number>(0);
  const [pagesCountArray, setPagesCountArray] = useState<number[]>([]);
  const [postId, setPostId] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("postId")) {
      setPostId(localStorage.getItem("postId") || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("postId", postId);
  }, [postId]);

  const {
    postsData: { posts, limit, total },
  } = useAppSelector((state) => state.postsReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (searchValue) {
      dispatch(requestPostsByString(searchValue, pageLimit));
      return;
    }
    dispatch(requestPosts(pageLimit));
  }, [dispatch, searchValue, pageLimit]);

  useEffect(() => {
    setPostsList(posts);
    setPagesCountArray(pagesListMaker(total, POSTS_ON_PAGE));
  }, [posts, limit]);

  const linkSetter = (id: string) => {
    setPostId(id);
  };

  const postsSearcher = () => {
    setPageLimit(0);
    setSearchValue(inputValue);
  };

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handlePagination = (value: number) => {
    console.log(value);
    setPageLimit(value - 1);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              postsList={postsList}
              pageLimit={pageLimit}
              onClick={linkSetter}
              inputValue={inputValue}
              handleInput={handleInput}
              handleButton={postsSearcher}
              handlePagination={handlePagination}
              pagesCountArray={pagesCountArray}
            />
          }
        />
        <Route path={`post/${postId}`} element={<Post id={postId} />} />
      </Routes>
    </>
  );
};
export default Main;
