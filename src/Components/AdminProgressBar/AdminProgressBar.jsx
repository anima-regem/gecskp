import React from 'react'
import '../AdminProgressBar/AdminProgressBar.css'

function AdminProgressBar({newsPdfFile,setNewsPdfFile,progresspercent}) {
  return (
    <div className='progress_bar'>
        <div style={{width:{progresspercent}}} className="progress"></div>
        <div className="progress_percentage">
            <p>100%</p>
        </div>
    </div>
  )
}

export default AdminProgressBar