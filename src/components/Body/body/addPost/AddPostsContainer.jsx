import React from 'react'
import { AddNewPostCreator, UpdafeNewMessagePostCreator } from '../../../../redux/mainReducer';
import { AddPosts} from './AddPosts';
import {connect} from 'react-redux'



let mapStateToProps = (state) =>{
  
  return{
    mainPage: state.mainPage.mainPage,
    newMessages: state.mainPage.newMessages
  }
  
}


let mapDispatchToProps = (dispatch) =>{
  return{
    addPostfromContainer:()=>{
     dispatch(AddNewPostCreator())
    },
    updateNewPostFromContainer:(text)=>{
      dispatch(UpdafeNewMessagePostCreator(text))
    }
  }
}

const AddPostsContainer = connect(
  mapStateToProps,mapDispatchToProps)(AddPosts)

export default AddPostsContainer;