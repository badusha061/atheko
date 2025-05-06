'use client'

import AdminLayout from "@/components/layout/adminLayout"
import { Contact, columns  as baseColumns } from "./columns"
import { DataTable } from "../../../components/data-table"
import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import ContactViewPage from "./contanctViewPage"


async function getData(): Promise<Contact[]> {
    try{
        const response = await axios.get('/api/contact')
        if(response.status === 200){
            return response.data['data'] 
        }else{
            return []
        }
    }catch (error : unknown){
        console.log(error)
        return []
    }
}

export default  function AdminContactPage() {
    const [data , setData] = useState<Contact[]>([]);
    const [contact , setContact]  = useState<Contact>([])
    const [isClick , setIsClick] = useState(false)
    useEffect(() => {
        const loadData = async () => {
            const data_ = await getData()
            setData(data_)
        }
        loadData()
    },[])


    const onDelete = (row : Contact) => {
        // console.log(row);
        if(row){
            setContact(row)
            setIsClick(true)
        }
    }
    



    const columns = useMemo(() => baseColumns({onDelete}),[]);
    

  return (
    <AdminLayout>    
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      <ContactViewPage isopen={isClick} onClose={() => setIsClick(false)} contact={contact} />
    </div>
    </AdminLayout>
  )
}
