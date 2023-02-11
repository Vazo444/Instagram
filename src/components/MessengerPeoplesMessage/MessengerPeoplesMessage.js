import { useDispatch, useSelector } from 'react-redux'
import { selectLogin } from '../../store/slices/login/loginSlices'
import { getActive, selectMesseges } from '../../store/slices/messages/messagesSlices'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage({name,active,img, id}) {
	const dispatch = useDispatch()
	const { activeUserId } = useSelector(selectMesseges)
	const {currentUser} = useSelector(selectLogin)

  return (
	 <div className='Messenger-left-col-people-message' style={{backgroundColor: id === activeUserId ? 'darkgray' : 'white'}} 
	 	onClick={() => dispatch(getActive({
			id: new Date().getTime().toString(),
			fromId: currentUser.id,
			toId: id,
			sendedUsername: currentUser.username,
			txt: ''
		}))}>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
