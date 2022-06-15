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
  const [groupOfPostsFromDBNumber, setgroupOfPostsFromDBNumber] =
    useState<number>(0);
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
    isLoadind,
    postsData: { posts, limit, total },
  } = useAppSelector((state) => state.postsReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (searchValue) {
      dispatch(requestPostsByString(searchValue, groupOfPostsFromDBNumber));
      return;
    }
    dispatch(requestPosts(groupOfPostsFromDBNumber));
  }, [dispatch, searchValue, groupOfPostsFromDBNumber]);

  useEffect(() => {
    setPostsList(posts);
    setPagesCountArray(pagesListMaker(total, POSTS_ON_PAGE));
  }, [posts, limit, total]);

  const linkSetter = (id: string) => {
    setPostId(id);
  };

  const postsSearcher = () => {
    setgroupOfPostsFromDBNumber(0);
    setSearchValue(inputValue);
  };

  const valueCleaner = () => {
    setInputValue("");
    setSearchValue("");
  };

  const handleInput = (value: string) => {
    setInputValue(value);
  };

  const handlePagination = (currentPage: number) => {
    const groupOfPostsForCurrentPage = currentPage - 1;
    setgroupOfPostsFromDBNumber(groupOfPostsForCurrentPage);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              postsList={postsList}
              onClick={linkSetter}
              inputValue={inputValue}
              handleInput={handleInput}
              handleButtonFind={postsSearcher}
              handleButtonClear={valueCleaner}
              handlePagination={handlePagination}
              pagesCountArray={pagesCountArray}
              pageNumber={groupOfPostsFromDBNumber + 1}
              isLoading={isLoadind}
            />
          }
        />
        <Route path={`post/${postId}`} element={<Post id={postId} />} />
      </Routes>
    </>
  );
};
export default Main;
