"use client"
import { db } from '@/config/db';
import { CourseList } from '@/config/schema';
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import CourseCard from './CourseCard';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { index } from 'drizzle-orm/mysql-core';

function UserCourseList() {

  const [courseList, setCourseList]=useState([]);
  const {userCourseList, setUserCourseList}=useContext(UserCourseListContext);
  const {user} =useUser();

  useEffect(()=>{
    user&&getUserCourses();
  },[user])


  const getUserCourses= async()=>{
    const result=await db.select().from(CourseList)
    .where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
    setCourseList(result);
    setUserCourseList(result);
  }

  return (
    <div className='mt-10'>
      <h2 className='font-medium text-xl '>My AI Courses</h2>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {courseList?.length>0? courseList?.map((course,index)=>(
          <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
        ))
        :
          [1,2,3,4,5].map((item,index)=>(
            <div key={index} className='w-full mt-5
             bg-slate-200 animate-pulse rounded-lg h-[200px]'>

            </div>
          ))
      }
      </div>
    </div>
  )
}

export default UserCourseList

