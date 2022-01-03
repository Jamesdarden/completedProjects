import PropTypes from 'prop-types'  //impt shortcut for proptypes
import Button from './Button'
import {useLocation  } from "react-router-dom";


// const Header = (props) => {  // use props varable
const Header = ({title, onAdd, showAdd }) => {  // here we are destructuring title to just use the title variable
    const location = useLocation()
    return (
        <header className='header'>
          {/* <h1> {props.title}</h1>  */}
          {/* <h1 style={{color: 'blue',backgroundColor:'black'}}> {title}</h1> 
          <h1 style={headingStyle}> {title}</h1>  */}
          
         

          <h1> {title}</h1> 
          {location.pathname === '/' && <Button text={showAdd ? 'close': 'Add'} color={showAdd? "red":"green"} onclick={onAdd}/>}  {/*onclick is an event*/}
         
            
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired, // you can specify types to catch error / also specify if required
}

// css in js
// const headingStyle = {
//     color: 'blue',
//     backgroundColor:'black'
// }

export default Header
