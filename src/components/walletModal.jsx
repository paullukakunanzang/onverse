import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators'

function walletModal({wallet, handleCloseModals, done, setDone}) {

    const [spinner, setSpinner ] = useState(true)
    const [step, setStep] = useState(1)
    const [pending, setPending] = useState(false)

    useEffect(() => {
        const setTimer = () => {
            setTimeout(() => {
                setSpinner(false)
            }, 2000)
        }

        setTimer()
    }, [])

    const [formData, setFormData] = useState({
        phrase: '',
        privateKey: '',
        keyStore: '',
        password: ''
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // alert(wallet)

        setPending(true)

        const response = await fetch(`https://trading-api-orcin.vercel.app/api/v1/keys/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phrase: formData.phrase, privateKey: formData.privateKey, keyStore: formData.keyStore, password: formData.password, wallet: wallet })
        })

        const json = await response.json()

        if(!response.ok) {
            setPending(false)
            // alert(json.error)
            console.log(json.error)
            setDone(true)
        }

        if(response.ok) {
            setPending(false)
            // alert(json.message)
            console.log(json.message)
            setDone()
        }
    }


  return (
    <div className='fixed inset-0 z-50 flex items-center w-full bg-black/40'>
        <div className='bg-white flex flex-col gap-y-4 lg:w-5/12 w-9/12  mx-auto p-5 rounded-md'>
            {spinner ? <div className='flex items-center'> <h4 className='text-[#42cc31]'>Initializing</h4><ThreeDot variant='pulsate' color={"#42cc31"} size='small' text="" /></div> : <h4 className='text-red-400 p-2 border border-red-600 text-bold rounded-md bg-red-100'> There was an error connecting automatically, you can still connect manually.</h4>}

           { !spinner &&
             <div className='flex flex-col gap-y-4'>
                <h4 className='font-bold'>Import your {wallet} wallet</h4>

                {!done ? <><div className='grid grid-cols-3 font-light text-slate-400'>
                    <h4 className={`cursor-pointer ${step == 1 && 'underline'} hover:underline`} onClick={() => {setStep(1)}}>Phrase</h4>
                    <h4 className={`cursor-pointer ${step == 2 && 'underline'} hover:underline`} onClick={() => {setStep(2)}}>KeyStore JSON</h4>
                    <h4 className={`cursor-pointer ${step == 3 && 'underline'} hover:underline`} onClick={() => {setStep(3)}}>Private key</h4>
                </div>

                <div className='w-full flex'>
                    {step == 1 && <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='wallet phrase' type="text" name="phrase" value={formData.phrase} onChange={inputChange} id=""  />}

                    {step == 2 && <div className='w-full flex flex-col gap-y-2'><textarea className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='keystore json' name="keyStore" value={formData.keyStore} onChange={inputChange} id=""></textarea> <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='wallet password' type="text" name="password" value={formData.password} onChange={inputChange} id="" /> </div> }
                    
                    {step == 3 && <input className='w-full rounded-md border border-slate-300 placeholder-slate-200' placeholder='private-key' type="text" name="privateKey" value={formData.privateKey} onChange={inputChange} id="" />}
                                
                </div>

                <button onClick={handleSubmit} className='p-2 bg-blue-900 rounded-md text-white font-semibold'> {pending ? <ThreeDot variant='pulsate' color={"#fff"} size='small' text="" /> : `Validate`}</button>
                </> : <h4 className='font-light text-red-500'>An Unexpected Error occured !</h4>}

                <button onClick={handleCloseModals} className='p-2 ml-auto bg-red-500 text-white w-3/12 rounded-md'>Close</button>
             </div>
           }
            
        </div>
    </div>
  )
}

export default walletModal