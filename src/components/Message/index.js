// Write your code here
import './index.css'

const Message = props => {
  const {islogin} = props
  const mes = islogin ? 'Please Login' : 'Welcome User'
  return <h1 className="heading">{mes}</h1>
}
export default Message
