import React, { useState, useDebugValue } from 'react'

import logo from './logo.svg'
import './App.css'

interface State {
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState<State['count']>(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [selectedFloorIndex, setSelectedFloorIndex] = React.useState<number>(0)
  const [selectedTableIndex, setSelectedTableIndex] = React.useState<number>(0)
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)
  const [isSubmitState, setSubmitState] = React.useState(false)
  const [isChangePage, setChangePage] = React.useState(false)
  const [changePageNumber, setChangePageNumber] = React.useState(0)
  for (const state of [
    selectedIndex,
    selectedFloorIndex,
    selectedTabIndex,
    selectedTabIndex,
    isSubmitState,
    isChangePage,
    changePageNumber,
    selectedTableIndex,
  ]) {
    useDebugValue(state)
  }

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="h-26 w-52 px-4 py-3 my-4 border border-white border-solid rounded"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            count is: {count}
          </button>
        </p>

        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </main>
  )
}

export default App
