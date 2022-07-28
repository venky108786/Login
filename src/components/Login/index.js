// Write your code here
import './index.css'

const Login = props => {
  const {onchange} = props
  return (
    <button type="button" onClick={onchange}>
      Login
    </button>
  )
}
export default Login
