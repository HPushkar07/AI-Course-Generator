import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { HiPencilSquare } from 'react-icons/hi2'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { db } from '@/config/db'
import { CourseList } from '@/config/schema'
import { eq } from 'drizzle-orm'


function EditChapters({course, index, refreshData}) {
    const Chapters=course?.courseOutput?.course?.chapters;
    const [name,setName] = useState();
    const [about,setAbout] = useState();

    useEffect(()=>{
        setName(Chapters[index].name);
        setAbout(Chapters[index].about);
    },[course])

    const onUpdateHandler=async()=>{
        course.courseOutput.course.chapters[index].name=name;
        course.courseOutput.course.chapters[index].about=about;

        const result = await db.update(CourseList).set({
        courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});

        if (result) {
            refreshData(true);  // Call refreshData to update the UI
          } else {
            console.error('No result returned from the update.');
          }
    }

  return (
    <Dialog>
        <DialogTrigger><HiPencilSquare/></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Edit Chapter</DialogTitle>
            <DialogDescription>
            <div className='mt-3'>
              <label>Course Title</label>
              <Input defaultValue={Chapters[index].name}
              onChange={(event)=>setName(event?.target.value)}/>
            </div>
            <div>
              <label>Description</label>
              <Textarea className='h-40' defaultValue={Chapters[index].about} 
              onChange={(event)=>setAbout(event?.target.value)}/>
            </div>
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <DialogClose>
                    <Button onClick={onUpdateHandler}>Update</Button>
                </DialogClose>
        </DialogFooter>
        </DialogContent>
</Dialog>

  )
}

export default EditChapters
