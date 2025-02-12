import Navbar from "../layout/Navbar"
import { people } from "../data/Data"
import { Link } from "react-router"

function Home() {
  return (
    <>
    <div className='mt-5 text-center d-flex flex-column align-items-center'>
        <h1>Home Page</h1>

<ul className="list-group col-6 gap-2">
    {people.map((person) => (
            <li 
            key={person.id}
            className="list-group-item border-2 border-primary">
                <div>{person.name}</div>
                <Link to={'/profile/' + person.id}>View Profile</Link>
            </li>
        ))}
</ul>
      </div>
    </>
    
  )
}

export default Home
