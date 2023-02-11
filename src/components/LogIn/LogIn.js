import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../store/slices/login/loginAPI'
import { logCurrentUser, selectLogin } from '../../store/slices/login/loginSlices'
import './LogIn.css'

const LogIn = () => {

    const formRef = useRef(null)
    const dispatch = useDispatch()
    const {users} = useSelector(selectLogin)
    const {currentUser} = useSelector(selectLogin)
    const navigate = useNavigate()

    useEffect(() => {
        if(!users.length){
            dispatch(fetchLogin())
        }
    }, [])

    useEffect(() => {
        if(currentUser){
            navigate('/')
        }
    }, [currentUser])

    const handleSubmit = (e) => {
        e.preventDefault()

        const {login: {value: login}, password: {value: password}} = formRef.current
        
        dispatch(logCurrentUser({login, password}))

        formRef.current.reset()

        console.log(users);
    }

  return (
    <div className="container">
                <div className="main-container">
                    <div className="main-content">
                        <div className="slide-container" >
                            {/* <img /> */}
                <img src='https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png' alt='asda'/>
                            <div className="slide-content" id="slide-content"></div>
                                            </div>
                                            <div className="form-container">
                                                <div className="form-content box">
                                                    <div className="logo">
                                                        <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png" alt="Instagram logo" className="logo-light"/>
                                                            <img src="./images/logo-dark.png" alt="Instagram logo" className="logo-dark"/>
                                                            </div>
                                                            <div className="signin-form" id="signin-form">
                                                                <form className="form-group " onSubmit={handleSubmit} ref={formRef}>
                                                                    <input name='login' defaultValue={'bret'} type="text" placeholder="Phone number, username or email"/>   
                                                                    <input name='password' defaultValue={'gwenborough'} type="password" placeholder="Password.."/>
                                                                    <button className="btn-login" id="signin-btn" >
                                                                        Log In
                                                                    </button>
                                                                </form>
                                                                <div className="btn-group">
                                                                </div>
                                                                <div className="divine">
                                                                    <div></div>
                                                                    <div>OR</div>
                                                                    <div></div>
                                                                </div>
                                                                <div className="btn-group">
                                                                    <button className="btn-fb">
                                                                        <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt=""/>
                                                                            <span>Log in with Facebook</span>
                                                                    </button>
                                                                </div>
                                                                <p href="#" className="forgot-pw">Forgot password?</p>
                                                            </div>
                                                    </div>
                                                    <div className="box goto">
                                                        <p>
                                                            Don't have an account?
                                                            <span>Sign up</span>
                                                        </p>
                                                    </div>

                                                    <div className="app-download">
                                                        <p>Get the app.</p>
                                                        <div className="store-link">
                                                            <p>
                                                                <img style={{width:"150px"}} src="https://static.cdninstagram.com/rsrc.php/v3/yr/r/fDjwyLC88oO.png" alt="app store"/>
                                                            </p>
                                                            <p >
                                                                <img style={{width:"150px"}} src="https://static.cdninstagram.com/rsrc.php/v3/yv/r/_UbeIRgTpG-.png" alt="google play"/>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <div className="links">
                                                <p >About</p>
                                                <p >Blog</p>
                                                <p >Jobs</p>
                                                <p >Help</p>
                                                <p >API</p>
                                                <p >Privacy</p>
                                                <p >Terms</p>
                                                <p>Top Accounts</p>
                                                <p >Hashtags</p>
                                                <p >Locations</p>
                                                <p id="darkmode-toggle">Darkmode</p>
                                            </div>
                                            <div className="copyright">
                                                © 2021 Instagram from Facebook
                                            </div>
                                        </div>
                                    </div>
  )
}

export default LogIn
