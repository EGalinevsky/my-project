import React from 'react'
import { AddNewPostCreator, UpdafeNewMessagePostCreator } from '../../../../redux/mainReducer';
import { AddPosts} from './AddPosts';

export const AddPostsContainer = (props) =>{
  
  let state = props.store.getState()
  console.log(state)
  const addPostfromContainer = ()=>{  
    props.store.dispatch(AddNewPostCreator())
  }

  const updateNewPostFromContainer = (text) =>{
    props.store.dispatch(UpdafeNewMessagePostCreator(text))
  }

  
  return <AddPosts addPostfromContainer={addPostfromContainer} updateNewPostFromContainer={updateNewPostFromContainer} state={state}/>  
}