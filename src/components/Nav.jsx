
import { Link } from 'react-router-dom'


function Nav() {
  return (
      <div className="Nav">
          <Link to='/home'>
             <strong> Home</strong>
          </Link> 
          <Link to='/characters'>
          <strong> Characters</strong>
          </Link> 
          <Link to='/series'>
          <strong> Series</strong>
          </Link> 
    </div>
  )
}

export default Nav