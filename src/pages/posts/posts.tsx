import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { IPosts, IPostsComponent } from "./posts.inteface";
import styles from "./posts.module.scss";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Pagination from "../../components/pagination/pagination";

const cx = classNames.bind(styles);

const Posts = ({
  postsList,
  pageLimit,
  pagesCountArray,
  onClick,
  inputValue,
  handleInput,
  handleButton,
  handlePagination,
}: IPostsComponent): JSX.Element => {
  return (
    <>
      <div className={cx("container")}>
        {!postsList.length && <div className={cx("loader")}>грузится</div>}
        <div className={cx("posts")}>
          <Button onClick={handleButton}>Найти</Button>
          <Input inputValue={inputValue} onChange={handleInput}></Input>
          {postsList.map(({ id, title, body }: IPosts) => {
            return (
              <ul key={id}>
                <li>
                  <Link to={`post/${id}`} onClick={() => onClick(id)}>
                    {title}
                  </Link>
                  ;
                </li>
              </ul>
            );
          })}
        </div>
        <Pagination countPages={pagesCountArray} handlePagination={handlePagination}/>
      </div>
    </>
  );
};
export default Posts;
