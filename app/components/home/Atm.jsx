export default function Atm(props) {
  return(
    <div className="border-2 border-white rounded-xl w-11/12 h-full flex flex-col p-3 justify-between">
      <h1 className="text-3xl font-bold"><i>EWallet</i></h1>
      <div>
        <h1 className="text-xl font-bold">Rp {props.amount}</h1>
        <h1>{props.user}</h1>
      </div>
    </div>
    )
}