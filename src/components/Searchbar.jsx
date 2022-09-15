import React from 'react'
import {FaSearch} from 'react-icons/fa';
import PropTypes from 'prop-types';


function Searchbar({bdColor,bdWidth, inputHeight, inputWidth, bdRadius}) {
  return (
    <div>
      <div className=" left-14 flex">
        <input type="text" style={{borderColor:bdColor, borderWidth:bdWidth, heigh:inputHeight, width:inputWidth, borderRadius:bdRadius }}  placeholder='searh your movies'/> 
        <FaSearch className="absolute ml-52 mt-2"/>
      </div>
    </div>
  )
}
Searchbar.propTypes={
  bdColor: PropTypes.string,
  bdWidth: PropTypes.number,
  inputHeight: PropTypes.number,
  inputWidth: PropTypes.number,
  bdRadius: PropTypes.number

}
Searchbar.defaultProps={
  bdColor: "orange",
  bdWidth: 4,
  inputHeight: 5,
  inputWidth: 360,
  bdRadius: 0
}
export default Searchbar