import React from 'react'

function InputBox({
  label,
  selectedCurrency="usd",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
}) {
  return (
    <div className='bg-white rounded-md p-3 m-2'>
      <div className='flex justify-between'>
        <label htmlFor="amountInputBox">{label}</label>
        <label htmlFor='selectCurrency'>Curreny Type</label>
      </div>
      <div className='flex justify-between'>
        <input className='w-3/4 outline-none' 
        value={amount} id="amountInputBox"
        onChange={(e)=>{
          onAmountChange &&
          onAmountChange(Number(e.target.value))
        }}
        type="number" />
        <select className='w-1/4 outline-none' id='selectCurrency'
        onChange={(e)=>{
          onCurrencyChange && onCurrencyChange(e.target.value)
        }}
        value={selectedCurrency}>
          {
            currencyOptions.map((currency)=>(
              <option value={currency}  key={currency}>{currency}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default InputBox