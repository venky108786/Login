// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {islogin: true}

  onchange = () => {
    this.setState(prv => ({islogin: !prv.islogin}))
  }

  render() {
    const {islogin} = this.state
    return (
      <div className="bg">
        <div className="bg1">
          <Message islogin={islogin} />
          {islogin ? (
            <Login login={this.onchange} />
          ) : (
            <Logout logout={this.onchange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
