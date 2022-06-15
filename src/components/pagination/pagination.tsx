import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./pagination.module.scss";
import { IPagination } from "./pagination.types";

const cx = classNames.bind(styles);

const Pagination = ({
  handlePagination,
  countPages,
  activeProp,
  ...rest
}: IPagination): JSX.Element => {
  const [active, setActive] = useState<number>(activeProp);
  return (
    <div className={cx("pagination")}>
      <div className={cx("block")}>
        {countPages.map((item) => {
          return (
            <button
              {...rest}
              key={item}
              onClick={() => {
                handlePagination(item);
                setActive(item);
              }}
              className={cx(`item`, { item__active: item === active })}
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
