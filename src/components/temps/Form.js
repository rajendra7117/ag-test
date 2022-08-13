import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/";
import { templateSliceActions } from "../../store/TemplateSlice";
import { postSliceActions } from "../../store/PostsSlice";
import { useSelector } from "react-redux/es/exports";
import "./form.scss";
const Form = () => {
    const selectedPost = useSelector(state => state.posts.currentPost)
  const [textState, setTextState] = useState({
    value: Object.keys(selectedPost).length>0 ? selectedPost.offer : '',
    isValid: false,
    touched: false,
  });
  const [numberState, setNumberState] = useState({
    value: Object.keys(selectedPost).length>0 ? selectedPost.discount : '',
    isValid: false,
    touched: false,
  });

  

  const dispatch = useDispatch()
  const textHandler = (e) => {
        setTextState({...textState, value: e.target.value, isValid: true})
  };

  const numberHandler = (e) => {
    setNumberState({...numberState, value:e.target.value, isValid: true});
  };

  const textBlurHandler = (e) => {
    setTextState({...textState, touched:true});
  };

  const numberBlurHandler = (e) => {
    setNumberState({...numberState, touched: true});
  };

  const submitHandler =e => {
    e.preventDefault()
    if(Object.keys(selectedPost).length>0){
        dispatch(postSliceActions.savePost({id: selectedPost.id, img:selectedPost.img, offer: textState.value, discount: numberState.value}))
        return;
    }
    dispatch(templateSliceActions.showPreview({offer: textState.value, discount: numberState.value}))
  }

  const cancel = e => {
    if(Object.keys(selectedPost).length>0){
        dispatch(postSliceActions.editPost({}))
    }
        dispatch(templateSliceActions.unSelectTemp())
  }

  useEffect(() => {
        if(textState.value===''){
            setTextState({...textState, isValid:false})
        }
        if(numberState.value===''){
            setNumberState({...numberState, isValid:false})
        }
  }, [textState.value, numberState.value])
  return (
    <div className="form-div">
      <form className="temp-form" >
        <div>
          <label>offer heading</label>
          <input
            type="text"
            placeholder="offer heading"
            onChange={textHandler}
            onBlur={textBlurHandler}
            value={textState.value}
            
          />
        </div>
        <div>
          <label>offer discount</label>
          <input
            type="number"
            placeholder="offer heading"
            min={0}
            max={100}
            value={numberState.value}
            onChange={numberHandler}
            onBlur={numberBlurHandler}
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={cancel}>cancel</button>
          <button type="submit" onClick={submitHandler} disabled={(textState.isValid && numberState.isValid) ? false : true}>next</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
