import React from 'react'
import Card from './Components/Card'


function App() {
  return (
    <>
      <h1 className='text-center mt-6 text-7xl'>Hello World</h1>
      <div className='card bg-base-100 w-96 shadow-xl'>
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "3000" />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "5000" />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "8000" />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "2000" />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "2500" />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="Shoes" description="If a dog chews shoes whose shoes does he choose?" Price= "32000" />
      </div>

    </>
  )
}

export default App