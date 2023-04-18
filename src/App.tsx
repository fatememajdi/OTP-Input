/* eslint-disable @typescript-eslint/ban-types */
import React, { lazy, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HotKeys } from 'react-hotkeys'
import { useSelector } from 'react-redux'

// ----------------------------------------------pages
const Verification = lazy(() => import('./pages/verification/verification'))
const Products = lazy(() => import('./pages/products/products'))
const Users = lazy(() => import('./pages/users/users'))

// -------------------------------------------------components
const Dialog = lazy(() => import('./components/dialog/dialog'))

function App() {
  const [showDialog, setShowDialog] = useState(false)
  const [focusedTextField, setFocusedTextField] = useState(false)
  const toggleDialog = async () => setShowDialog(s => !s)
  const changeFocusTextField = async () => setFocusedTextField(f => !f)
  const currentDialog: string = useSelector(
    (state: dialog) => state.body
  )

  const keyMap = {
    SHOW_DIALOG: 'command+shift',
    FOCUS_ON_TEXTFIELD: 'a'
  }

  const handlers = {
    SHOW_DIALOG: (_event: any) => toggleDialog(),
    FOCUS_ON_TEXTFIELD: (_event: any) => changeFocusTextField()
  }
  return <HotKeys keyMap={keyMap} handlers={handlers}>
    <Routes >
      <Route path='/' element={<Verification />} />
      <Route path='/products' element={<Products />} />
      <Route path='/users' element={<Users />} />
      <Route path='/verification' element={<Verification />} />
    </Routes >
    <Dialog focused={focusedTextField} showDialog={showDialog} text={currentDialog} />
  </HotKeys>
}

export default App
