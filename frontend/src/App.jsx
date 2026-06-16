import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <section
  id="center"
  className="min-h-screen flex items-center justify-center bg-gray-100"
>
  <div className="text-center max-w-2xl px-6">
    <h1 className="text-4xl font-bold text-red-800 mb-4">
      Welcome to the ATM Application
    </h1>

    <p className="text-lg text-gray-700 mb-8">
      Edit{" "}
      <code className="bg-gray-200 px-1 rounded">
        src/App.jsx
      </code>{" "}
      and save to test{" "}
      <code className="bg-gray-200 px-1 rounded">
        HMR
      </code>
    </p>

    <button
      type="button"
      onClick={() => setCount((count) => count + 1)}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
    >
      Count is {count}
    </button>
  </div>
  </section>


     
    </>
  )
}

export default App
