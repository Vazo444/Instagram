import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
    'login/fetchLogin',
    async function() {
        const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data: photos} = await axios.get('https://jsonplaceholder.typicode.com/photos')

        return users.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.address.city.toLowerCase(),
            bio: user.company.catchPhrase,
            followers: Math.round(Math.random() * 300 + 200),
            following: Math.round(Math.random() * 300 + 200),
            images: [
                ...photos.filter(photo => photo.albumId === user.id)
                        .map(post => ({
                            id: post.id,
                            img: post.url,
                            name: post.title.slice(0, post.title.indexOf(' ')),
                            likesCount: Math.round(Math.random() * 300 + 200),
                            postText: post.body,
                            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
                            comment: []
                        }))
                
            ]
        }))
    }
)
  //             {
    //                 postId: '1',
    //                 img: IMAGES.cover10,
    //                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    //                 likes: '80',
    //                 commentsCount: '5'
    //             }