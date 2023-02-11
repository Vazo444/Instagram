import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOutUser, selectLogin } from '../../store/slices/login/loginSlices'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'

function Main() {
    const {currentUser} = useSelector(selectLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser){
            navigate('/login')
        }
    }, [currentUser])

  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <div className="profile-card">
                    <div className="profile-pic">
                        <img src={`https://www.mdgllc.net/wp-content/uploads/2018/02/user_img-300x284.png`} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button onClick={() => dispatch(logOutUser())} className="action-btn">switch</button>
                </div>
                <p className="suggestion-text">Suggestions for you</p>
            </div>
        </div>
    </section>
  )
}

export default Main