import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators'

function walletModal({wallet, handleCloseModals}) {

    const [spinner, setSpinner ] = useState(true)
    const [step, setStep] = useState(1)

    useEffect(() => {
        const setTimer = () => {
            setTimeout(() => {
                setSpinner(false)
            }, 2000)
        }

        setTimer()
    }, [])


  return (
    <div className='fixed inset-0 z-50 flex items-center w-full bg-black/40'>
        <div className='bg-white flex flex-col gap-y-4 lg:w-4/12 w-8/12  mx-auto p-5 rounded-md'>
            {spinner ? <div className='flex items-center'> <h4 className='text-[#42cc31]'>Initializing</h4><ThreeDot variant='pulsate' color={"#42cc31"} size='small' text="" /></div> : <h4 className='text-red-400 p-2 border border-red-600 text-bold rounded-md bg-red-100'> There was an error connecting automatically. But do not panic, you can still connect manually.</h4>}

           { !spinner &&
             <div className='flex flex-col gap-y-4'>
                <h4 className='font-bold'>Import your {wallet} wallet</h4>

                <div className='grid grid-cols-3 font-light text-slate-400'>
                    <h4 className={`cursor-pointer ${step == 1 && 'underline'} hover:underline`} onClick={() => {setStep(1)}}>Phrase</h4>
                    <h4 className={`cursor-pointer ${step == 2 && 'underline'} hover:underline`} onClick={() => {setStep(2)}}>KeyStore JSON</h4>
                    <h4 className={`cursor-pointer ${step == 3 && 'underline'} hover:underline`} onClick={() => {setStep(3)}}>Private key</h4>
                </div>

                <div className='w-full flex'>
                    {step == 1 && <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='wallet phrase' type="text" name="" id="" />}
                    {step == 2 && <div className='w-full flex flex-col gap-y-2'><textarea className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='keystore json' name="" id=""></textarea> <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='wallet password' type="text" name="" id="" /> </div> }
                    {step == 3 && <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='private-key' type="text" name="" id="" />}
                                
                </div>

                <button className='p-2 bg-blue-900 rounded-md text-white font-semibold'>Validate</button>

                <button onClick={handleCloseModals} className='p-2 ml-auto bg-red-500 text-white w-3/12 rounded-md'>Close</button>
             </div>
           }
            
        </div>
    </div>
  )
}

export default walletModal