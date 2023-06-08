import React from 'react'

const VisualData = () => {
  return (
    <>
     <div className='visul-data'>
     <h4>Traffic Sources</h4>
     <hr />
     <div className='d-flex justify-content-between'>
        <div>
        <div className='first-div'>
          <span>source</span>
          <span>Traffic Sources %</span>
        </div>
        <div className='mt-3 d-flex justify-content-between p-2'>
        <span className='direct'>
         <span className="dot"></span>
            Direct
          </span>
          <span>50</span>
        </div>
        <div className='d-flex justify-content-between p-2'>
        <span className='search'>
         <span className="dot"></span>
        Search
       </span>
       <span>50</span>
        </div>
        </div>
        <div className='round'>
        <div className="text">50%</div> 
        </div>
     </div>
     </div>
    </>
  )
}

export default VisualData