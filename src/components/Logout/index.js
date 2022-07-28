// Write your code here
import './index.css'

const Logout = props => {
  const {onchange} = props
  return (
    <button type="button" onClick={onchange}>
      Logout
    </button>
  )
}
export default Logout
