import React from 'react'
import StudentSidebar from '../../components/Student/StudentSidebar'
import StudentNavbar from '../../components/Student/StudentNavbar'
import CourseVideo from '../../components/Student/CourseVideo'



function Studentwatchcourse() {
  return (
    <div>
        <StudentNavbar />
        <div className='flex flex-wrap'>
          <StudentSidebar />
          <CourseVideo />
        </div>
    </div>
  )
}

export default Studentwatchcourse