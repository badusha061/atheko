'use server'

import DeleteImageCloudinary from "@/lib/cloudinary/deleteImage";
import uploadToCloudinary from "@/lib/cloudinary/uploadImage";
import ConnectMongodb from "@/lib/mongo";
import Service from "@/models/service";
import { NextRequest, NextResponse } from "next/server";


await ConnectMongodb() 

export async function POST(request:NextRequest) {
        try{
            const formData = await request.formData();
            const serviceName = formData.get('serviceName')
            const serviceDescription = formData.get('serviceDescription')
            const servicePrice = formData.get('servicePrice')
            const serviceImage = formData.get('serviceImage') as File
            const serviceNameTaken = await Service.findOne({serviceName:serviceName})  
            if(!serviceName){
                return NextResponse.json({
                    message:"Service Name  is Required"
                },{
                    status:400
                })
            }else if(serviceNameTaken){
                return NextResponse.json({
                    message:"Service Name is Already Taken"
                },{
                    status:400
                })
            }

            if(!serviceDescription){
                return NextResponse.json({
                    message:"Service Description is Required"
                },{
                    status:400
                })
            }

            if(!servicePrice){
                return NextResponse.json({
                    message:"Service Price is Required"
                },{
                    status:400
                })
            }

            if(!serviceImage){
                return NextResponse.json({
                    message:"Service Image is Required"
                },{
                    status:400
                })
            }
            const fileBuffer = await serviceImage.arrayBuffer();
            const mimeType = serviceImage.type;
            const encoding = "base64";
            const base64Data = Buffer.from(fileBuffer).toString("base64");
            const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
            const response = await uploadToCloudinary(fileUri , serviceImage.name)
            if (response.status == 201 && response.response.secure_url){
                const newServiceSchema = await new Service({
                    serviceName,
                    serviceDescription,
                    servicePrice,
                    serviceImage:{
                        url:response.response.secure_url,
                        public_id:response.response.public_id
                    },
                    isActive:true
                })
                newServiceSchema.save()
                return NextResponse.json({
                    message:"Successfully Added Service",
                    data:newServiceSchema
                },{
                    status:201
                })
            }else{
                return NextResponse.json({
                    message:response
                },{
                    status:500
                })
            }
        }catch(err : unknown ){
            const error = err as Error 
            return NextResponse.json({
                message:error.message
            },{
                status:500
            })
        }
}



export async function  GET(){
    try{
        const services = await Service.find()
        return NextResponse.json({
            data:services
        },{
            status:200
        })
    }catch (err : unknown){
        const eror = err as Error
        return NextResponse.json({
            message:eror.message
        },{
            status:500
        })
    }
}



export async function DELETE(request:NextRequest) {
    try{    
        const id = await request.nextUrl.searchParams.get("id")
        const service = await Service.findById({_id : id})
        const public_id = service.serviceImage.public_id;
        if(public_id){
            const response = await DeleteImageCloudinary(public_id)
            if(response && response.status === 1){
                await Service.deleteOne({_id : id})
                return NextResponse.json({
                    message:"Successfully Deleted Service"
                },{
                    status:200
                })
            }else{
                return NextResponse.json({
                    message:"Something Went Wrong Please Try Again"
                },{
                    status:500
                })
            }
        }else{
            return NextResponse.json({
                message:"Something Went Wrong Please Try Again"
            },{
                status:500
            })
        }
    }catch (err : unknown){
        const error = err as Error
        return NextResponse.json({
            message:error.message
        },{
            status:500
        })
    }
    
}



