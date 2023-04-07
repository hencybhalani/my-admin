import React from 'react'
import Review from '../review/Review'
import Updates from '../updates/Updates'
import './RightSide.css'

function RightSide() {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <Review/>
        </div>
    </div>
  )
}

export default RightSide
