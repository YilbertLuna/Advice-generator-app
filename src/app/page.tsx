'use client'

import { useState, useEffect } from "react";
import { advice } from "./interfaces/interface";
import { FaDiceFive } from "react-icons/fa";

export default function Home(): JSX.Element {
  const [error, setError] = useState<boolean>(false)
  const [advice, setAdvice] = useState<advice | null>()

  const handleAdvices = () => {
    const api = 'https://api.adviceslip.com/advice'
  
    const getDavice = async () => {
      try {
        const res = await fetch(api)
        const data = await res.json()

        if(res.status !== 200) {
          setError(true)
          setAdvice(null)
          return
        }

        setAdvice(data)
        setError(false)

      } catch (error) {
        console.log(error)
      }
    }
    getDavice()
  }


  useEffect(() => {

    handleAdvices()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="bg-DarkGrayishBlue p-8 rounded-xl max-w-xs space-y-3">
        <h1 className="text-NeonGreen text-center font-Manrope text-lg">ADVICE {advice?.slip.id}</h1>

        { advice && <p className="text-center text-LightCyan font-Manrope text-quote">{advice?.slip.advice}</p>}
        { error && <p className="text-center text-LightCyan font-Manrope text-quote">Error</p>}

      </div>
      <div onClick={handleAdvices} className="flex justify-center items-center bg-NeonGreen -mt-5 rounded-full w-16 h-16 cursor-pointer">
        <FaDiceFive className="text-quote"/>
      </div>
    </main>
  );
}
