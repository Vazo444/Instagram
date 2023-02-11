import './MessengerPeoplesMessages.css'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectLogin } from '../../store/slices/login/loginSlices'

function MessengerPeoplesMessages() {
	const {users, currentUser} = useSelector(selectLogin)

// 	const message = [
// 		{
// 			 id: '1',
// 			 img: IMAGES.cover1,
// 			 name: 'user_1',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '2',
// 			 img: IMAGES.cover2,
// 			 name: 'user_2',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '3',
// 			 img: IMAGES.cover3,
// 			 name: 'user_3',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '4',
// 			 img: IMAGES.cover4,
// 			 name: 'user_4',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '5',
// 			 img: IMAGES.cover5,
// 			 name: 'user_5',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '6',
// 			 img: IMAGES.cover6,
// 			 name: 'user_6',
// 			 active: 'Active 30m ago'
// 		}
//   ]
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			users.filter(user => user.id !== currentUser?.id)
				.map(el => <MessengerPeoplesMessage key={el.id} id={el.id} img={'https://www.mdgllc.net/wp-content/uploads/2018/02/user_img-300x284.png'} name={el.username} active={'Active ' + Math.round(Math.random() * 35 + 5) + 'm' + ' ago'}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages