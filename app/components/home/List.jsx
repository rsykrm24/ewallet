export default function List(props) {
  return(
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div>logo</div>
        <div>
          <p>{props.item}</p>
          <p>{props.account}</p>
        </div>
      </div>
      <p>Rp {props.price}</p>
    </div>
    )
}