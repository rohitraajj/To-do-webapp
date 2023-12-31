import React from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'


function TaskDetails() {
  return (
    <>
      <div className='modal fade' id='my-modal'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h3 className='modal-title'>Add new task</h3>
                </div>
                <div className='modal-body'>
                    <form>
                        
                    </form>
                </div>
                <div className='modal-footer'>
                    <button className='btn btn-secondary' data-dismiss='modal'>Cancel</button>
                    <button className='btn btn-primary'>Add</button>

                </div>
            </div>
        </div>
      </div>
      </>
  )
}

export default TaskDetails;
