import React from "react";
import classNames from "classnames/bind";
import styles from "./pagination.module.scss";
import { IPagination } from "./pagination.types";

const cx = classNames.bind(styles);

const Pagination = ({ handlePagination, countPages, ...rest }: IPagination) => {
  return (
    <div className={cx("pagination")}>
      <div className={cx("pagination__block")}>
        {countPages.map((item) => {
          return (
            <button
              {...rest}
              key={item}
              onClick={() => handlePagination(item)}
              className={cx(`pagination__item`)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
