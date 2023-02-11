import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLetter, resetLetter, selectMesseges, sendToAllMess } from '../../store/slices/messages/messagesSlices'

function MessengerChatForm() {
	const dispatch = useDispatch()
	const formRef = useRef(null)
	const {allMesseges} = useSelector(selectMesseges)

	const handleSubmit = (e) => {
		e.preventDefault()

		const {text: {value: text}} = formRef.current

		dispatch(getLetter(text))
		dispatch(sendToAllMess())
		dispatch(resetLetter())

		formRef.current.reset()
	}
  return (
	 <form className='Chat-input' ref={formRef} onSubmit={handleSubmit}>
		<input type='text' name='text' placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
	 </form>
  )
}

export default MessengerChatForm
