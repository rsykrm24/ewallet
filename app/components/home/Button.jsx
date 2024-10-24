export default function Button(props) {
  return(
    <div className="flex flex-col items-center">
      <div className="aspect-square border-2 border-white rounded-full p-2">{props.logo}</div>
      <p>{props.title}</p>
    </div>
    )
}