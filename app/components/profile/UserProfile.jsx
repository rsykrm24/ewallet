export default function UserProfile(props) {
  return(
    <div className="h-4/6 flex flex-col justify-evenly items-center">
      <img src={(props.image)} alt="Profile" className="aspect-square rounded-full"/>
      <div>
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
      </div>
    </div>
    )
}