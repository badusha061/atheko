"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BookType } from "@/types/type"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import axios from "axios"
import {  toast } from 'sonner';
import { getError } from "@/utils/helper"


function dateFormat(date : string){
  const newDate = new Date(date)
  return newDate.toDateString()

}




export const columns: ColumnDef<BookType>[] = [
  {
    accessorKey: "username",
    header: "Customer Name",
  },
  {
    accessorKey: "number",
    header: "Customer Number",
  },
  {
    accessorKey: "place",
    header: "Customer Place",
  },
  {
    accessorKey: "scheduledDate",
    header: "Schedule Date",
    cell: ({ row }) => {
      const formatedDate = dateFormat(row.getValue("scheduledDate"))
      return <div className="text-right font-medium">{formatedDate}</div>
    }
  },
  {
    accessorKey: "scheduledTime",
    header: "Schedule Time",
  },
  {
    accessorKey: "service",
    header: "Service",
  },
  {
    accessorKey: "commands",
    header: "Customer Commands",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      const formatedDate = dateFormat(row.getValue("created_at"))
      return <div className="text-right font-medium">{formatedDate}</div>
    },
  },
  {
    accessorKey: "actions",
    header: "Delete",
    cell: ({ row }) => {
      const id = row.original._id
      async function deleteBook(){
        if(id){
          try{
            const response = await axios.delete(`/api/booking/?id=${id}`) 
            console.log(response);
            if(response.status === 200){
              toast.success('Successfuly Deleted');
              window.location.reload()
            }
          }catch (error : unknown){
            const message = getError(error)
            toast.error(message);
          }
        }
      } 
      
      return (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">
                  <Trash2 className="w-5 h-5 text-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to delete this booking detail?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deleteBook} className="bg-red-600" >Continue</AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  },

]