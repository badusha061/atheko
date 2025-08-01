'use client'
import AdminLayout from '@/components/layout/adminLayout'
import React, { useEffect, useState } from 'react'
import { DataTable } from "../../../components/data-table"
import { BookType } from '@/types/type'
import { columns  } from "./columns"
import axios from "axios"




export default  function AdminBookingPage() {
  const [data , setData] = useState<BookType[]>([]);
    useEffect(() => {
        const getFetch = async () => {
            try{
                const response = await axios.get('/api/booking/')
                if(response.status === 200){
                    setData(response.data['data']) 
                }
            }catch (error : unknown){
                console.log(error)
            }
        }
        getFetch()
    },[])
  return (
    <AdminLayout>
        <DataTable columns={columns} data={data} />
    </AdminLayout>

  )

}

