import React from "react";
import "./Post.scss"
import { useDispatch } from "react-redux/";
import { postSliceActions } from "../../store/PostsSlice";
const Post = ({ id ,img, offer, discount }) => {
    const dispatch = useDispatch()
    const deletePost =e => {
        dispatch(postSliceActions.deletePost(id))
    }

    const editPost = e => {
        dispatch(postSliceActions.editPost({id, img, offer, discount}))
    }
  return (
    <div className="post">
      <img src={img} />
      <div className="post-info">
        <h3>{offer}</h3>
        <h3>{discount} % off</h3>
      </div>
      <div className="post-controls">
        <button onClick={editPost}>edit</button>
        <button onClick={deletePost}>delete</button>
      </div>
    </div>
  );
};

export default Post;
