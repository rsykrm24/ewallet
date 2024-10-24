import Link from "next/link"
import PersonIcon from '@mui/icons-material/Person';

export default function Header(props) {
  return(
    <div className="rounded-b-2xl border-b-2 border-white flex justify-between items-center p-3 h-1/6">
      <h1 className="text-2xl font-bold">Hello, {props.user}</h1>
      <Link href="/profile" className="aspect-square border-2 border-white rounded-full p-2"><PersonIcon/></Link>
    </div>
    )
}