import { useSelector } from 'react-redux'
import { selectLogin } from '../../store/slices/login/loginSlices'
import { selectMesseges } from '../../store/slices/messages/messagesSlices'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {
	const { activeUserId } = useSelector(selectMesseges)
	const { users } = useSelector(selectLogin)

	const user = users.find(user => user.id === activeUserId)

  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p>{user?.username}</p>
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
