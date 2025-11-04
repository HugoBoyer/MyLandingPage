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
    <div className="align-center text-center pt-40" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>Conversion de devise</h1>
            <label>Montant :</label>
            <input type="number"  value={montant || ""} onChange={(e) => setMontant(e.target.value)} />
            <label>
                Depuis :
            </label>
            <select value={fromDevise} onChange={(e) => setFromDevise(e.target.value)}>
                <option value="USD">Dollar Americain (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">livre Sterning (GBP)</option>
                <option value="JPY">Yen Japonais (JPY)</option>
            </select>
            <label>
                Vers :
            </label>
            <select value={toDevise} onChange={(e) => setToDevise(e.target.value)}>
                <option value="USD">Dollar Americain (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">livre Sterning (GBP)</option>
                <option value="JPY">Yen Japonais (JPY)</option>
            </select>
            <button onClick={convertir}>Convertir</button>
            <div>
                {resultat !== undefined && <p>Résultat : {resultat.toFixed(2)}</p>}
            </div>
    </div>
  )
}