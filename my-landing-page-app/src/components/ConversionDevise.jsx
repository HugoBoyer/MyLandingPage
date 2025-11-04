import { useState } from "react"
import axios from "axios"

export default function ConversionDevise() {
    const [fromDevise, setFromDevise] = useState("USD")
    const [toDevise, setToDevise] = useState("EUR")
    const [montant, setMontant] = useState("")
    const [resultat, setResultat]  = useState(undefined)
    
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
    <div className=" pt-40 bg-white rounded-lg" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>Conversion de devise</h1>
            <div className="inline w-full">
                <label className="block ">Montant :</label>
                <input className="border-[#E5E7EB] border-2 border-solid rounded-lg  p-3 w-full" type="number"  value={montant || ""} onChange={(e) => setMontant(e.target.value)} />
            </div>
            <div className="inline m-20">
                <label className="block">
                    Depuis :
                </label>
                <select className="border-[#E5E7EB] rounded-lg border-2 border-solid p-3 w-full" value={fromDevise} onChange={(e) => setFromDevise(e.target.value)}>
                    <option value="USD">🇺🇸 Dollar Americain (USD)</option>
                    <option value="EUR">🇪🇺 Euro (EUR)</option>
                    <option value="GBP">🇬🇧 livre Sterning (GBP)</option>
                    <option value="JPY">🇯🇵 Yen Japonais (JPY)</option>
                </select>
            </div>
            <div className="inline m-20">
                <label className="block">
                    Vers :
                </label>
                <select className="border-[#E5E7EB] rounded-lg border-2 border-solid p-3 w-full" value={toDevise} onChange={(e) => setToDevise(e.target.value)}>
                    <option value="USD">🇺🇸 Dollar Americain (USD)</option>
                    <option value="EUR">🇪🇺 Euro (EUR)</option>
                    <option value="GBP">🇬🇧 livre Sterning (GBP)</option>
                    <option value="JPY">🇯🇵 Yen Japonais (JPY)</option>
                </select>
            </div>
            <button className="mt-10 mb-10 p-5 block bg-[#E5E7EB] w-full" onClick={convertir}>Convertir</button>
            <div className="bg-[#7B4DEE] h-40 align-item text-white rounded-lg text-center">
                {resultat !== undefined && <p>Résultat : <p className="text-[40px]">{resultat.toFixed(2)}</p></p>}
            </div>
    </div>
  )
}