import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { requestPost } from "../../redux/reducers/actionCreators";
import { clearState } from "../../redux/reducers/onePostSlice";
import { IPost } from "../posts/posts.inteface";

const Post = ({ id }: IPost): JSX.Element => {
  const [postBody, setPostBody] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");

  const {
    isLoadind,
    postData: { body, title },
  } = useAppSelector((state) => state.onePostReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPostBody(body);
    setPostTitle(title);
  }, [body, title]);

  return (
    <div className="">
      <Link
        to="/"
        onClick={() => {
          dispatch(clearState());
        }}
      >
        На главную
      </Link>
      {isLoadind && <Loader />}
      <div className="">{postTitle}</div>
      <div className="">{postBody}</div>
    </div>
  );
};

export default Post;
