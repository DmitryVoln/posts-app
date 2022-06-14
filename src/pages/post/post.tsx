import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { requestPost } from "../../redux/reducers/actionCreators";
import { IPost } from "../posts/posts.inteface";

const Post = ({ id }: IPost): JSX.Element => {
  const [postBody, setPostBody] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");


  const {
    postData: { body, title },
  } = useAppSelector((state) => state.onePostReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestPost(id));
  }, [dispatch]);

  useEffect(() => {
    setPostBody(body);
    setPostTitle(title);
  }, [body, title]);

  return (
    <div className="">
      <Link to="/">На главную</Link>
      <div className="">{postTitle}</div>
      <div className="">{postBody}</div>
    </div>
  );
};

export default Post;
