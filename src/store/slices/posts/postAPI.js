import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function() {
        const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const {data: images} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100')
        const {data: comments} = await axios.get('https://jsonplaceholder.typicode.com/comments')

        return  posts.map(post => ({
            id: post.id + 'A',
            img: images.find(img => post.id === img.id).url,
            name: post.title.slice(0, post.title.indexOf(' ')),
            likesCount: Math.round(Math.random() * 300 + 200),
            postText: post.body,
            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
            comments: [
                ...comments.filter(comment => comment.postId === post.id)
                            .map(comment => ({
                                id: comment.id.toString(),
                                name: comment.name.slice(0, comment.name.indexOf(' ')),
                                body: comment.body
                            }))
                        ]
        }))
    }
    )