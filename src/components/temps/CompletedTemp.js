import React from "react";
import { useSelector, useDispatch } from "react-redux/";
import { templateSliceActions } from "../../store/TemplateSlice";
import { postSliceActions } from "../../store/PostsSlice";
import "./CompletedTemp.scss";

const CompletedTemp = () => {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.templates.selectedTemp);
  const post = useSelector((state) => state.templates.postData);
  const cancel = (e) => {
    dispatch(templateSliceActions.cancelPreview());
  };
  const save = (e) => {
    dispatch(
      postSliceActions.addPost({
        id: `${temp.img}-${post.offer}-${Math.random(0, 100000)}`,
        img: temp.img,
        offer: post.offer,
        discount: post.discount,
      })
    );
    dispatch(templateSliceActions.cancelPreview());
  };

  return (
    <div className="completed-temp">
      <img src={temp.img} />
      <div className="text">
        <h2>{post.offer}</h2>
        <h3>{post.discount}% off</h3>
      </div>
      <div>
        <button onClick={cancel}>cancel</button>
        <button onClick={save}>save</button>
      </div>
    </div>
  );
};

export default CompletedTemp;
