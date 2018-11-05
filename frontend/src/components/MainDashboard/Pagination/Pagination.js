import React from 'react'

const Pagination = () => {
  return (
    <div>
        <ul className="pagination justify-content-center mb-4">
            <li className="page-item">
                <a className="page-link" href="#">&larr; Previous page</a>
            </li>
            <li className="page-item disabled">
                <a className="page-link" href="#">Next Page &rarr;</a>
            </li>
        </ul>      
    </div>
  )
}

export default Pagination
