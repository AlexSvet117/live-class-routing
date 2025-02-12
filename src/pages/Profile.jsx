import Navbar from "../layout/Navbar"
import { people } from "../data/Data"
import { useParams } from 'react-router'

function Profile() {
  
  const {personID} = useParams()
  const person = people.find((p) => p.id == personID)


  return (
    <div className="">
    <div className="d-flex flex-column align-items-center">
    <div className ="col-6 col-lg-5">
      <h2 className = "text-center mt-5">Profile Page</h2>
      <div className = "card">
        <img className="card-img-top" src={person.image} alt="image" />
        <div className="card-body">
            <div className="card-title fw-bold">{person.name} - {person.age}</div>
            <div className="card-text">{person.bio}</div>
        </div>
      </div>
    </div>
    </div>
    
    </div>

  )
}

export default Profile
