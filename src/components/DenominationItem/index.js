import './index.css'

const DenominationItem = props => {
  const {denominationItem, updateBalance} = props
  const {value} = denominationItem
  const updateAmount = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" onClick={updateAmount} className="list-btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
