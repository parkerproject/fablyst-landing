import React from 'react'
import { useStaticKit } from '@statickit/react'
import { addToMailchimp } from '@statickit/functions'

function Landing(){
    const client = useStaticKit()
    const [emailAddress, setEmailAddress] = React.useState('')
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const onSubmit = async(e)=>{
       e.preventDefault()
       const { status } = await addToMailchimp(client, { emailAddress })
       if (status === 'ok') setIsSubmitted(true)
       console.log(status)
    }


   
    return (
   <div className="h-screen w-screen bg-gray-100 flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-l">
      		<div className="text-5xl font-dark font-bold">Fablyst</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >We are building something new. </p>
          <p className="mb-8">But dont worry, you will love it.</p>
          <div className="mt-4 flex">
            {!isSubmitted ?
            <>
            <input value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} className="w-full p-2 text-gray-800 bg-white" placeholder="your@mail.com"/>
            <button onClick={onSubmit} className="px-6 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Notify me when you launch</button>
            </>
            : <p className="text-green-600">Thanks for signing up!</p>
            }
          
          </div>
    </div>
      <div className="max-w-lg">
      
    </div>
    
  </div>
</div>
    )
}

export default Landing