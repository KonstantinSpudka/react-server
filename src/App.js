

import './App.css'
import PurchaseForm from './components/forms/PurchaseForm'
import PurchasesList from './components/PurchasesList'


function App () {
  return (
    <>
      <header>
        <h1>Purchases List</h1>
      </header>
      <main>
        <PurchaseForm />
        <PurchasesList />
      </main>
    </>
  )
}

export default App

// 1. 'https://ullhgy.sse.codesandbox.io/'
// 2. get 'https://ullhgy.sse.codesandbox.io/contacts'
//    post 'https://ullhgy.sse.codesandbox.io/contacts' {}
//    patch 'https://ullhgy.sse.codesandbox.io/contacts/10' {}
//    delete 'https://ullhgy.sse.codesandbox.io/contacts/20'