import React from 'react'
import { HiOutlineChartBar, HiOutlineClock, HiOutlineBookOpen, HiOutlinePlay } from "react-icons/hi";


function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        <div>
        <HiOutlineChartBar className='text-4xl text-primary'/>
        <div>
            <h2 className='text-xs text-gray-500'>Skill Level</h2>
            <h2 className='font-medium text-lg'> {course?.level} </h2>
        </div>
        </div>

        <div>
        <HiOutlineClock className='text-4xl text-primary'/>
        <div>
            <h2 className='text-xs text-gray-500'>Duration</h2>
            <h2 className='font-medium text-lg'> {course?.courseOutput?.course?.duration} </h2>
        </div>
        </div>

        <div>
        <HiOutlineBookOpen className='text-4xl text-primary'/>
        <div>
            <h2 className='text-xs text-gray-500'>No Of Chapters</h2>
            <h2 className='font-medium text-lg'> {course?.courseOutput?.course?.noOfChapters} </h2>
        </div>
        </div>

        <div>
        <HiOutlinePlay className='text-4xl text-primary'/>
        <div>
            <h2 className='text-xs text-gray-500'>Video Included?</h2>
            <h2 className='font-medium text-lg'> {course?.includeVideo} </h2>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default CourseDetail
