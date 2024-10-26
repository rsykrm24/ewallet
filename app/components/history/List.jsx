export default function List(props) {
  return(
    <div className={`flex justify-between items-center ${props.text}`}>
      <div className="flex items-center gap-3">
        <div>{props.logo}</div>
        <div>
          <p>{props.item}</p>
          <p>{props.account}</p>
        </div>
      </div>
      <p>Rp {props.price}</p>
    </div>
    )
}