'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Service } from './columns'
import Image from 'next/image'

  
export  interface editService {
  serviceName : string,
  serviceImage : string | File,
  serviceDescription: string,
  servicePrice:number
}

function EditServiceModal({isopen, onClose , onConform ,  servicename , servicedescription , serviceprice , serviceimage }:
  {isopen : boolean ; onClose : () => void; onConform : (serviceData : Service) => void;  servicename : string , servicedescription:string , serviceprice : number , serviceimage: File | string }) {
    

      const [editserviceName , setServiceName]  = useState(servicename)
      const [editservicePrice , setServicePrice]  = useState(serviceprice)
      const [editserviceDescription , setServiceDescription]  = useState(servicedescription)
      const [editserviceImage , setServiceImage]  = useState(serviceimage)
      const [showeditserviceImage , setShowServiceImage]  = useState(serviceimage)

    useEffect(()=> {
      setServiceName(servicename)
      setServiceDescription(servicedescription)
      setServicePrice(serviceprice)
      setServiceImage(serviceimage)
      setShowServiceImage(serviceimage)
    },[servicename,serviceprice,servicedescription,serviceimage])

    const handleFile = (e : React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.files && e.target.files[0]){
        const file = e.target.files[0]
        setServiceImage(file)
        setShowServiceImage(URL.createObjectURL(file))
      }
    }

    const handleSave = () => {
        console.log(typeof editserviceImage);
        console.log(editserviceImage);
        
      const serviceData : editService = {
        serviceName : editserviceName,
        serviceDescription : editserviceDescription,
        servicePrice : editservicePrice,
        serviceImage : editserviceImage,
      }
      if(serviceData){
        onConform(serviceData)
      }else{
        console.log("null getting")
      }


    }

  return (
    <Dialog open={isopen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit Service</DialogTitle>
        <DialogDescription>
          Make changes to your service here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="serviceName" className="text-right">
            serviceName
          </Label>
          <Input
            id="serviceName"
            type='text'
            value={editserviceName}
            className="col-span-3"
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="servicePrice" className="text-right">
            servicePrice
          </Label>
          <Input
            id="servicePrice"
            type='number'
            value={editservicePrice}
            className="col-span-3"
            onChange={(e) => setServicePrice(Number(e.target.value))}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="serviceDescription" className="text-right">
            Description
          </Label>
          <Input
            id="serviceDescription"
            type='text'
            value={editserviceDescription}
            className="col-span-3"
            onChange={(e) => setServiceDescription(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="serviceImage" className="text-right">
            serviceImage
          </Label>
          <Input
            type="file"
            accept="image/*"  
            id="serviceImage"
            className="col-span-2"
            onChange={(e) =>
              handleFile(e)
            }
          />
          <Image  
          src={showeditserviceImage} 
          width={50}    
          height={50} 
          className="rounded object-cover"  
          alt='service-image' />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleSave} type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default EditServiceModal