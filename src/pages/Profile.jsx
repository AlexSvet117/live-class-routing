import Navbar from "../layout/Navbar"
import { people } from "../data/Data"

function Profile() {
  
  const {personID} = userParams()
  const person = people.find((p) => p.id == personID)


  return (
    <div className="">
    <Navbar/>
    <div className ="col-10 col-lg-8">
      <h2 className = "text-center mt-5">Profile Page</h2>
      <div className = "card">
        <img src={person.image} alt="" />
        <div className="card-body">
            <div className="card-title fw-bold">{person.name} - {person.age}</div>
            <div className="card-text">{person.bio}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
