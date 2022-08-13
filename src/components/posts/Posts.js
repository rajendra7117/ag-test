import React from 'react'
import { useSelector } from 'react-redux/'
import "./Posts.scss"
import Post from './Post'
import Modal from '../UI/Modal'
import Form from '../temps/Form'
const Posts = () => {

    const posts = useSelector(state => state.posts.posts)
    const currentPost = useSelector(state => state.posts.currentPost)

    console.log(posts)
  return (
    <div className='posts'>
        {posts.map((post) => <Post key={post.id} id={post.id} img={post.img} offer={post.offer} discount={post.discount} />)}
        {Object.keys(currentPost).length>0 && <Modal> <Form /></Modal>}
    </div>
  )
}

export default Posts