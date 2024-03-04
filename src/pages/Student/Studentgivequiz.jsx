import React from 'react'
import StudentQuizSidebar from '../../components/Student/StudentQuizSidebar'
import StudentNavbar from '../../components/Student/StudentNavbar'
import StudentQuizContent from '../../components/Student/StudentQuizContent'


function Studentwatchcourse() {
  return (
    <div>
        <StudentNavbar />
        <div className='flex flex-wrap'>
          <StudentQuizSidebar />
          <StudentQuizContent />
        </div>
    </div>
  )
}

export default Studentwatchcourse