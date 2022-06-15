import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { IPosts, IPostsComponent } from "./posts.inteface";
import styles from "./posts.module.scss";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Pagination from "../../components/pagination/pagination";
import Loader from "../../components/loader/loader";

const cx = classNames.bind(styles);

const Posts = ({
  postsList,
  pagesCountArray,
  onClick,
  inputValue,
  handleInput,
  handleButtonFind,
  handleButtonClear,
  handlePagination,
  pageNumber,
  isLoading,
}: IPostsComponent): JSX.Element => {
  return (
    <>
      <div className={cx("container")}>
        {isLoading && (
          <div className={cx("loader")}>
            <Loader />
          </div>
        )}
        <div className={cx("posts")}>
          <div className={cx("buttons")}>
            <Input inputValue={inputValue} onChange={handleInput}></Input>
            <Button onClick={handleButtonFind} btnClassName={"find"}>
              Найти
            </Button>
            <Button onClick={handleButtonClear} btnClassName={"find"}>
              Очистить поиск
            </Button>
          </div>
          {postsList.map(({ id, title, body }: IPosts) => {
            return (
              <ul key={id}>
                <li className={cx("list__item")}>
                  <Link
                    to={`post/${id}`}
                    onClick={() => onClick(id)}
                    className={cx("link")}
                  >
                    {title}
                  </Link>
                  ;
                </li>
              </ul>
            );
          })}
        </div>
        <Pagination
          activeProp={pageNumber}
          countPages={pagesCountArray}
          handlePagination={handlePagination}
        />
      </div>
    </>
  );
};
export default Posts;
