export default function Confirmation(props) {
  return(
    <div className={`border-t-2 border-white rounded-xl bg-black fixed w-full ${props.confirm} p-3 h-2/5 flex flex-col justify-between duration-500`}>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Payment confirmation</h1>
        <button onClick={props.close} className="text-xl">X</button>
      </div>
      <div>
        <div className="flex justify-between">
          <p>Amount</p>
          <p>{props.amount}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Source of fund</p>
        <div className="flex gap-2 border-2 p-3 rounded border-white">
          <img src={props.image} className="aspect-square rounded-full w-1/12" />
          <p>{props.email}</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="border-2 border-white rounded p-2 w-5/6" onClick={props.submitConfirmation}>Confirm</button>
      </div>
    </div>
    )
}