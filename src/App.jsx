import { useEffect, useRef, useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import './components/Input'
import Input from './components/Input'
import Title from './components/Title'
import Button from './components/Button'

function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [tip, setTip] = useState(0)
  const [result, setResult] = useState(0)
  const [selectedTipButton, setSelectedTipButton] = useState(null)

  const billPut = value => {
    setBill(value);
  }
  const peoplePut = value => {
    setPeople(value);
  }
  const tipPut = value => {
    setTip(value);
    setSelectedTipButton(value);
  }

  const customTipPut = value => {
    setTip(value);
    setSelectedTipButton(null);
  }

  const resetAll = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setResult(0);
    setSelectedTipButton(null);
  }

  useEffect(() => {
    calcularResultado()
  }, [bill, people, tip]);

  const calcularResultado = () => {
    if (tip > 0 && bill > 0 && people > 0) {
      const totalTip = bill * (tip / 100);
      const tipPerPerson = totalTip / people;
      setResult(tipPerPerson);
    } else {
      setResult(0);
    }
  }

  return (
    <>
      <header className='text-center my-10'>
        <h1 className='uppercase tracking-[1rem] text-3xl font-bold text-green-900'>
          <span className='block'>spli</span>tter
        </h1>
      </header>
      <main className='bg-white rounded-t-3xl px-10 py-5 md:py-5 w-full md:flex md:gap-10 md:w-[55%] md:mx-auto md:rounded-3xl'>
        <div className='md:w-[50%] md:my-15'>
          <Title name="Bill" />
          <Input onInputChange={billPut} placeholder='0' svg="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" />
          <div className='my-7 md:my-10'>
            <Title name="Select Tip %" />
            <div className='grid grid-cols-2 gap-5 my-5 md:grid-cols-3'>
              <Button value="5" main selected={selectedTipButton === "5"} onClick={tipPut} />
              <Button value="10" main selected={selectedTipButton === "10"} onClick={tipPut} />
              <Button value="15" main selected={selectedTipButton === "15"} onClick={tipPut} />
              <Button value="25" main selected={selectedTipButton === "25"} onClick={tipPut} />
              <Button value="50" main selected={selectedTipButton === "50"} onClick={tipPut} />
              <Input placeholder="Custom" onInputChange={customTipPut} />
            </div>
          </div>
          <div>
            <Title name="Number of People" />
            <Input onInputChange={peoplePut} placeholder="0" svg="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </div>
        </div>
        <div className='bg-green-900 px-5 py-10 mt-12 md:w-1/2 md:mt-0 rounded-2xl text-white md:flex md:flex-col md:justify-between'>
          <div className='grid grid-cols-2 md:gap-5 md:p-5'>
            <div className='flex flex-col'>
              <p className='font-bold text-md m-1'>Tip Amount</p>
              <p className='text-sm text-green-400'>/ person</p>
            </div>
            <div className='flex text-right items-center justify-end text-green-400'>
              <svg xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" fill='currentColor' /></svg>
              <p className='text-4xl text-green-400 font-bold'>{result.toFixed(2)}</p>
            </div>
            <div className='flex flex-col my-5'>
              <p className='font-bold text-md m-1 '>Total</p>
              <p className='text-sm text-green-400'>/ person</p>
            </div>
            <div className='flex text-right items-center justify-end text-green-400'>
              <svg xmlns="http://www.w3.org/2000/svg" width={14} viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" fill='currentColor' /></svg>
              <p className='text-4xl text-green-400 font-bold'>{people > 0 ? (result + (bill / people)).toFixed(2) : "0.00"}</p>
            </div>

          </div>
          <Button value="RESET" disabled={result === 0} onClick={resetAll} />
        </div>
      </main>

    </>
  )
}

export default App
