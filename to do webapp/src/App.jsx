import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TaskDetails from './Task-details.jsx'

function App() {
  return (
      <div className='container'>
        <div className='sidebar'>
          <div className='heading'>
            <h6>Task Boards</h6>
            <hr></hr>
          </div>
          <div className='list-group'>
            <a href='#' className='list-group-item list-group-item-action'>Freelance Project</a>
            <a href='#' className='list-group-item list-group-item-action'>SBI Outsource</a>
            <a href='#' className='list-group-item list-group-item-action'>HPCL Project 1</a>
            <hr></hr>
            <button className='btn btn-link' >+ Add new Project</button> 
          </div>
          {/* ----- list-group close ----- */}
        </div>
        {/* ----- sidebar close ----- */}
        <div className='main'>
          <div className='header'>My Project</div>
          <hr></hr>
          <div  className='main-body'>

            <div className='to-do-col'>
              <div id='to-do' className='col'>
                <span>To Do</span>
              </div>
              <div>
                <button className='btn-to-do' onClick={<TaskDetails />} data-toggle='modal' data-target='#my-modal'>+ Add new Project</button>
              </div>
            </div>

            <div className="vl"></div>

            <div className='in-progress-col'>
              <div id='in-progress' className='col'>
                <span>In Progress</span>
              </div>
                <div>
                <button className='btn-in-progress' data-toggle='modal' data-target='#my-modal'>+ Add new Project</button>
                </div>
            </div>

            <div className="vl"></div>

            <div className='in-review-col'>
              <div id='in-review' className='col'>
                <span>In Review</span>
              </div>
                <div>
                  <button className='btn-in-review' data-toggle='modal' data-target='#my-modal'>+ Add new Project</button>
                </div>
            </div>
            <div className="vl"></div>

            <div className='completed-col'>
              <div id='completed' className='col'>
                <span>Completed</span>
                </div>
                <div>
                <button className='btn-completed' data-toggle='modal' data-target='#my-modal'>+ Add new Project</button>
              </div>
            </div>
            
          </div>{/* ----- id main-body close ----- */}
        </div> {/* ----- id main-body close ----- */}
      </div> /* ----- container close ----- */
  )
}

export default App
