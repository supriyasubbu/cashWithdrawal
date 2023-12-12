import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="withdraw-bg-container">
        <div className="withdraw-card">
          <div className="withdraw-profile">
            <div className="withdraw-logo">S</div>
            <p className="withdraw-name">Sarah Williams</p>
          </div>
          <div className="user-balance">
            <p className="your-balance">Your Balance</p>
            <p className="rupees">
              {balance}
              <br />
              <span className="in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(each => (
              <DenominationItem
                denominationItem={each}
                updateBalance={this.updateBalance}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
