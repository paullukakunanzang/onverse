import { useState } from 'react'
import { ConnectModal, Header, Hero, Starters, WalletModal } from './components'

function App() {

  const [connectModal, setConnectModal] = useState(false)
  const [walletModal, setWalletModal] = useState(false)

  const handleSetModal = () => {
    setConnectModal(true)
  }

  const handleSetWalletModal = () => {
    setWalletModal(true)
  }

  const handleCloseModals = () => {
    setWalletModal(false)
    setConnectModal(false)
  } 
 
  return (
    <>
      <div className='w-full h-auto flex flex-col bg-[#0F1624] gap-y-8 py-8'>
        <Header handleSetModal={handleSetModal} />
        <div className='w-10/12 flex flex-col lg:gap-y-8 gap-y-4 mx-auto'>
          <Hero handleSetModal={handleSetModal} />
          <Starters handleSetModal={handleSetModal} />
        </div>
      </div>
      {connectModal && <ConnectModal handleSetWalletModal={handleSetWalletModal} />}
      {walletModal && <WalletModal handleCloseModals={handleCloseModals}/>}
    </>

  )
}

export default App
