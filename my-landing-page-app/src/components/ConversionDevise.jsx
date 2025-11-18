import { useState } from "react"
import axios from "axios"
import Commentaire from './Commentaire.jsx'
import CommentaireList from "./CommentaireList.jsx"

export default function ConversionDevise({comments, setComments}) {
    const [fromDevise, setFromDevise] = useState("USD")
    const [toDevise, setToDevise] = useState("EUR")
    const [montant, setMontant] = useState("")
    const [resultat, setResultat]  = useState(undefined)
    const devises = [
        {name: "Dollar Americain", code: "USD", flag:"🇺🇸"},
        {name: "Euro", code: "EUR", flag:"🇪🇺"},
        {name: "Livre Sterning", code: "GBP", flag:"🇬🇧"},
        {name: "Yen Japonais", code: "JPY", flag:"🇯🇵"},
    ]
    
        const convertir = async () => {
            try {
                const response = await axios.get(`https://api.frankfurter.app/latest?from=EUR`, {
                    params: {
                        from: fromDevise,
                        to: toDevise,
                        amount: montant
                    }
                })
                const tauxChange = response.data.rates[toDevise]
                setResultat(tauxChange)
                
            } catch (error) {
                console.error("Erreur lors de la conversion", error)
            }
        }
    

  return (
    <div className="md:flex md:flex-cols-2 block mt-20 justify-between w-full md:w-3/3 gap-10">
        <div className=" bg-white rounded-lg md:w-1/3 w-full">
            <h1 className="text-5xl text-center pb-15">Conversion de devise</h1>
                <div className="inline w-full"> 
                    <label className="block ">Montant :</label>
                    <input className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full" type="number"  value={montant || ""} onChange={(e) => setMontant(e.target.value)} placeholder={fromDevise}  />
                </div>
                <div className="inline my-20">
                    <label className="block">
                        De :
                    </label>
                    <select className="border-[#E5E7EB] rounded-lg border-2 border-solid p-3 w-full" value={fromDevise} onChange={(e) => setFromDevise(e.target.value)}>
                        {devises.map(money => 
                            <option value={money.code}>{money.flag} {money.name} ({money.code})</option>
                        )}
                    </select>
                </div>
                <div className="inline my-20">
                    <label className="block">
                        Vers :
                    </label>
                    <select className="border-[#E5E7EB] rounded-lg border-2 border-solid p-3 w-full" value={toDevise} onChange={(e) => setToDevise(e.target.value)}>
                        {devises.map(money => 
                            <option value={money.code}>{money.flag} {money.name} ({money.code})</option>
                        )}
                    </select>
                </div>
                <button className="rounded-lg mt-10 mb-10 p-5 block bg-[#E5E7EB] w-full" onClick={convertir}>Convertir</button>
                <div className="bg-[#7B4DEE] h-40 text-white rounded-lg text p-5">
                    <p>Résultat : {resultat !== undefined && <p className="font-semibold text-[40px]">{resultat.toFixed(2)} {setToDevise}
                        <div className="text-sm">
                            {toDevise}
                        </div>
                    </p>
                    } </p>
    
                </div>
        </div>
        <div className="md:w-2/3  w-full">
            <Commentaire comments={comments} setComments={setComments} />
            <div>
                <h2 className="text-center pt-10">Avis recents</h2>
                <CommentaireList comments={comments}/>
            </div>
        </div>
    </div>
  )
}