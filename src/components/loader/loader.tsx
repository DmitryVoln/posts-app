import classNames from "classnames/bind";
import styles from "./loader.module.scss";

const cx = classNames.bind(styles);

const Loader = (): JSX.Element => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("loader")}></div>;
    </div>
  );
};

export default Loader;
