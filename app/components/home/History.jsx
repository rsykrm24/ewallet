import List from "./List.jsx"

export default function History() {
  return(
    <div className="border-2 border-white rounded-xl w-11/12 p-3 mt-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">History</h1>
        <div>See all </div>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <List price={12000} item={"Transfer"} account={"hehe@gmail.com"}/>
        <List price={12000} item={"Transfer"} account={"hehe@gmail.com"}/>
        <List price={12000} item={"Transfer"} account={"hehe@gmail.com"}/>
      </div>
    </div>
    )
}