
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div id='nav'>
      <div className="Nav">
          <Link to='/home'>
             <strong> Home</strong>
          </Link>  
          <Link to='/series'>
          <strong> Series</strong>
        </Link> 
        <Link to='/characters'>
          <strong> Characters</strong>
          </Link>
      </div>
    </div>
  )
}

export default Nav