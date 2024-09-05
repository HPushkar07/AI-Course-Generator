"use client"
import { db } from '@/config/db'
import { CourseList } from '@/config/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../../create-course/[courseId]/_components/CourseBasicInfo'
import Header from '../../_components/Header'
import CourseDetail from '../../create-course/[courseId]/_components/CourseDetail'
import ChapterList from '../../create-course/[courseId]/_components/ChapterList'


function Course({params}) {
    const [course,setCourse]=useState();
    useEffect(()=>{
        params&&GetCourse()
    },[params])

    const GetCourse=async()=>{
        const result=await db.select().from(CourseList)
        .where(eq(CourseList?.courseId,params?.courseId))
        setCourse(result[0]);
        console.log(result);
    }
  return (
    <div>
      <Header/>
      <div className='px-10 p-10 md:px-20 lg:px-44'>
        <CourseBasicInfo course={course}/>
        <CourseDetail course={course}/>
        <ChapterList course={course}/>
      </div>
      
    </div>
  )
}

export default Course
