import React from 'react'

function Child2(props) {
  return (
    <div>
      CountInside Child2:{props.countFromParent}
      <button onClick={props.uploadData}>Upload DAta</button>
    </div>
  )
}

export default Child2
