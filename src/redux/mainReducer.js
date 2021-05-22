import like from "../assets/images/like.png"
import post2 from "../assets/images/img_sidebar/Rectangle_5.jpg";
import post3 from "../assets/images/img_sidebar/Rectangle_6.jpg";

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_MESSAGE_POST = 'UPDATE_NEW_MESSAGE_POST'

let initialState = {
    mainPage: [
        {
            text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
            name: "eugene",
            id: 1,
            like: like,
            countLike: 0
        },
        {
            text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
            header: "How written cod quite and self",
            name: "sasha",
            id: 2,
            img: post2,
            like: like,
            countLike: 0
        },
        {
            text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
            header: "Bye new notebook from 150 000 $",
            name: "igor",
            id: 3,
            like: like,
            countLike: 0
        },
        {
            text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, porromaiores. Est sint cupiditate nihil! Inventore voluptatum illo rem,ut quis opti o nisi praesentium beatae dicta exercitationem possimus     doloribus natus.",
            header: "Как я сходил на FrontEnd Conf 2021",
            name: "lexa",
            id: 4,
            img: post3,
            like: like,
            countLike: 0
        },
    ],
    newMessages: 'frfrfr',
}

export const mainReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                header: "New Post",
                text: state.newMessages,
                name: "carl",
                like: like,
                id: 5,
                countLike: 0
            }
            state.mainPage.push(newPost)
            debugger
            state.newMessages = ''
            return state;
        case UPDATE_NEW_MESSAGE_POST:
            state.newMessages = action.newMessage
            return state
        default:
            return state
    }
}

export const AddNewPostCreator = () => ({
    type: ADD_NEW_POST
})

export const UpdafeNewMessagePostCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_POST,
    newMessage: text
})

export default mainReducer