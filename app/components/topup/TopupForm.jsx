export default function TopupForm(props) {
  return(
    <form className="w-11/12 flex flex-col justify-between mt-3 h-full" onSubmit={props.submit}>
      <div className="flex flex-col">
        <input type="number" placeholder="Masukkan nominal" className={`bg-black outline-0 rounded border-2 ${props.borderNominal} px-2 py-1 w-full`} value={props.nominal} onChange={props.nominalChange}/>
        <label className="text-sm">Nominal minimal Rp. 10000</label>
      </div>
      <div>
        <button type="submit" className="w-full rounded border-2 border-white p-1">Next</button>
      </div>
    </form>
    )
}