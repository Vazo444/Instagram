import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { commentOpen } from '../../hoc/commentOpen'
import IMAGES from '../../images'
import { selectLogin } from '../../store/slices/login/loginSlices'
import { addComent } from '../../store/slices/posts/postsSlicec'

function Post({id, img, name, likesCount, postText, timeAgo, comments, comment, open}) {

    const dispatch = useDispatch()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectLogin)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(addComent(
            {
            id,
            name: currentUser.username,
            body: formRef.current[0].value
        }))

        formRef.current.reset()
    }

  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={`https://www.mdgllc.net/wp-content/uploads/2018/02/user_img-300x284.png`} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!postText || <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
        </div>
        
        {
        (comment ?
        <div 
            style={{
                padding: '20px'
            }}
        >
            {
                comments?.map(comment => (
                    <div key={comment.id}> 
                        <h2>{comment.name}</h2>
                        <p
                            style={{
                                fontSize: '15px'
                            }}
                        >{comment.body}</p>
                    </div>
                ))
            }
        </div> :  <button onClick={open}>SHOW ALL COMMENTS</button>)
        }
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input type="text" className="comment-box" placeholder="Add a comment" onFocus={open}/>
                <button className="comment-btn">post</button>
            </div>
        </form>
    </div>
  )
}

export default commentOpen(Post)