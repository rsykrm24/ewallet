import Link from "next/link"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Header(props) {
  return(
    <div className="rounded-b-2xl border-b-2 border-white flex gap-3 items-center p-3 h-1/12">
      <Link href="/home"><ArrowBackIcon/></Link>
      <h1 className="text-2xl font-bold">History</h1>
    </div>
    )
}