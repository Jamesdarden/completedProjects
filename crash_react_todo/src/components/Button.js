import PropTypes from 'prop-types'


const Button = ({color, text, onclick}) => {
    // const onclick = (e) => { //this will log the e object and its properties
    //     console.log(e)
    // }
    return <button onClick={onclick} style={{backgroundColor:color}} className='btn'>{text}</button>
    
}

Button.defaultProps= {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func

}
export default Button