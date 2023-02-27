import React from 'react'
import './pagination.css'

const Pagination = ({postPerPage,totalPost,paginate}) => {
    const pageNumber=[];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumber.push(i)

    }
  return (
    <div>
        <nav>
            <ul className='pagination'>
               {
                pageNumber.map((number)=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} className='page-link'>{number}</a>
                    </li>
                ))
               }

            </ul>
        </nav>
      
    </div>
  )
}

export default Pagination
