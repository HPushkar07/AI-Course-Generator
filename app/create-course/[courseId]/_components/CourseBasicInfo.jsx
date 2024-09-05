import { Button } from '@/components/ui/button';
import { db } from '@/config/db';
import { storage } from '@/config/firebaseConfig';
import { CourseList } from '@/config/schema';
import { eq } from 'drizzle-orm';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';

function CourseBasicInfo({course,refreshData}) {

    const [selectedFile,setSelectedFile]=useState();

    useEffect(()=>{
        if(course){
            setSelectedFile(course?.courseBanner)
        }
    },[course])

    /**
     * Select file and upload to firebase strg.
     * @param {*} event 
     */
    const onFileSelected=async(event)=>{
        const file=event.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
        const fileName=Date.now()+'.jpg'
        
        const storageRef=ref(storage,'ai-course/'+fileName);
        await uploadBytes(storageRef,file).then((snapshot)=>{
            console.log('Upload File Complete')
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(downloadUrl)=>{
                console.log(downloadUrl);
                await db.update(CourseList).set({
                    courseBanner:downloadUrl
                }).where(eq(CourseList.id,course?.id))
            })
        })
    }

  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
            <h2 className='flex font-bold text-3xl'>{course?.courseOutput?.course?.name} 
            <EditCourseBasicInfo course={course} refreshData={refreshData}/></h2>
            <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.course?.description}</p>
            <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><HiOutlinePuzzle />{course?.category}</h2>
            <Link href={'/course/'+course?.courseId+"/start"}>
            <Button className='w-full mt-5'>Start</Button>
            </Link>
        </div>
        <div>
            <label htmlFor='upload-image'>
            <Image src={selectedFile?selectedFile:'/placeholder.png'} width={300} height={300}
            className='w-full rounded-xl h-[250px] object-cover cursor-pointer'/>
            </label>
            <input type='file' id='upload-image' className='opacity-0'
            onChange={onFileSelected}/>
        </div>
      </div>
      
    </div>
  )
}

export default CourseBasicInfo
