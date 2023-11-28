
import { Link } from 'react-router-dom'


function Nav() {
  return (
      <div className="Nav">
          <Link to='/home'>
              Home
          </Link> 
          <Link to='/characters'>
              Characters
          </Link> 
          <Link to='/series'>
              Series
          </Link> 
    </div>
  )
}

export default Nav