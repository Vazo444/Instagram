import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delPostL, selectLogin } from '../../store/slices/login/loginSlices';
import { delPost } from '../../store/slices/posts/postsSlicec';
import './Profile.css'
const Profile = () => {

    const dispatch = useDispatch()
    const { currentUser } = useSelector(selectLogin)
    const navigate = useNavigate()


    useEffect(() => {
        if(!currentUser){
            navigate('/login')
        }
    }, [])
    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={`https://www.mdgllc.net/wp-content/uploads/2018/02/user_img-300x284.png`} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser?.name}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.images.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
            {
                currentUser?.images.map(el => (
                    <div key={el.id} className="gallery-item">
                        <img src={el.img} className="gallery-image" alt=""/>
                        <div className="gallery-item-info">
                        <span className='delPost'
                            onClick={() => {
                                dispatch(delPost(el.id))
                                dispatch(delPostL(el.id))
                            }
                            }
                        > X </span>
                            <ul>
                                <li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
                                <li className="gallery-item-comments"><span >Comments</span> {el.comment.length} </li>
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    
        </>
    );
}

export default Profile;
