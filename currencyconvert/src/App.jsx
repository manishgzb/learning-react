import { useState } from "react"
import InputBox from "./components/InputBox"
import { use } from "react"
import useCurrencyInfo from "./hooks/currencyInfo"
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)
  const data = useCurrencyInfo(from)
  const Options = Object.keys(data)
  function convert() {
    setconvertedAmount(amount * data[to])
  }
  return (
    <div className="h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/001/871/305/non_2x/money-background-design-in-blue-color-for-accounting-banking-investment-and-financial-needs-designs-can-be-used-for-template-print-media-brochure-layer-card-website-landing-page-apps-web-free-vector.jpg')]">
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();

      }}>
        <InputBox label={"From"} selectedCurrency={from} amount={amount}
          onCurrencyChange={(currency) => {
            setfrom(currency)
          }}
          onAmountChange={(amount) => {
            setAmount(amount)
          }}
          currencyOptions={Options}
        ></InputBox>
        <InputBox label={"To"} selectedCurrency={to} amount={convertedAmount}
          onCurrencyChange={(currency) => {
            setto(currency)
          }}
          currencyOptions={Options}
        ></InputBox>
        <button type="submit"
          className="bg-blue-500 w-full h-8 text-lg rounded-md m-3">Convert {from} to {to}</button>
      </form>

    </div>

  )
}

export default App
