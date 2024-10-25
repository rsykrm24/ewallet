export default function TransferForm(props) {
  return(
    <form className="w-11/12 flex flex-col justify-between mt-3 h-full" onSubmit={props.submit}>
      <div className="flex flex-col gap-3">
        <input type="number" placeholder="Masukkan kode perusahaan" className={`bg-black outline-0 rounded border-2 ${props.borderKodePerusahaan} px-2 py-1 w-full`} value={props.kodePerusahaan} onChange={props.kodePerusahaanChange}/>
        <input type="number" placeholder="Masukkan virtual number" className={`bg-black outline-0 rounded border-2 ${props.borderVirtualNumber} px-2 py-1 w-full`} value={props.virtualNumber} onChange={props.virtualNumberChange}/>
        <input type="number" placeholder="Masukkan nominal" className={`bg-black outline-0 rounded border-2 ${props.borderNominal} px-2 py-1 w-full`} value={props.nominal} onChange={props.nominalChange}/>
      </div>
      <div>
        <button type="submit" className="w-full rounded border-2 border-white p-1">Next</button>
      </div>
    </form>
    )
}