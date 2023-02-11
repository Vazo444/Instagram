import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost as addPost_login, selectLogin } from '../../store/slices/login/loginSlices';
import { addPost as addPost_post } from '../../store/slices/posts/postsSlicec';
import './CreatePost.css'
const CreatePost = () => {
    const { currentUser } = useSelector(selectLogin)
    const navigate = useNavigate()
    const formRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!currentUser){
            navigate('/login')
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()

        const {img: {value: img}, desc: {value: desc}} = formRef.current
        const newPost = {
            id: new Date().getTime().toString(),
            img: img,
            name: currentUser.username,
            likesCount: Math.round(Math.random() * 300 + 200),
            postText: desc,
            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes Ago',
            comments: []
        }

        dispatch(addPost_login(newPost))
        dispatch(addPost_post(newPost))


        formRef.current.reset()
    }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit}>
                <label className="input-file">
                    <input type='text' name='img' placeholder='img'/>
                    <input type='text' name='desc' placeholder='desc'/>
                    <button>ADD NEW POST</button>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
