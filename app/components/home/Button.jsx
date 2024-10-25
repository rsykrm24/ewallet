import Link from "next/link"

export default function Button(props) {
  return(
    <div className="flex flex-col items-center">
      <Link href={props.link} className="aspect-square border-2 border-white rounded-full p-2">{props.logo}</Link>
      <p>{props.title}</p>
    </div>
    )
}