import './Messenger.css'
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from '../../store/slices/login/loginSlices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetActiveUserId, selectMesseges } from '../../store/slices/messages/messagesSlices';


function Messenger() {
	const {currentUser} =useSelector(selectLogin)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(resetActiveUserId())
	}, [])

	useEffect(() => {
		if(!currentUser){
			navigate('/login')
		}
	}, [currentUser])

  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<i className="fa-duotone fa-pen-to-square"></i>
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						<p>General</p>
					</div>
					<MessengerPeoplesMessages />
				</div>
			</div>
				<MessengerChatSection />
		</div>
	 </div>
  )
}

export default Messenger
