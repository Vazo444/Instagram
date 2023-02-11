import { useSelector } from 'react-redux'
import { selectLogin } from '../../store/slices/login/loginSlices'
import { selectMesseges } from '../../store/slices/messages/messagesSlices'
import './MessengerChat.css'

function MessengerChat() {
  const { currentUser } = useSelector(selectLogin)
  const { allMesseges, activeUserId } = useSelector(selectMesseges)


  const currentDialogPage = allMesseges.filter(messege => (activeUserId === messege.toId && messege.fromId === currentUser.id) || (activeUserId === messege.fromId && messege.toId ===currentUser.id))
    return (
	 <div className='MessengerChat'>
    {
      currentDialogPage.map(messeg => (
        <div key={messeg.id}>
          {messeg.txt !== '' ? <h2 style={{fontWeight: '800'}}>{messeg.sendedUsername}</h2> : undefined}
          <h3>{messeg.txt}</h3>
        </div>
      ))
    }
	 </div>
  )
}

export default MessengerChat
