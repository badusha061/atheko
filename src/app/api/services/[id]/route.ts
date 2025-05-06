'use server';

import DeleteImageCloudinary from "@/lib/cloudinary/deleteImage";
import uploadToCloudinary from "@/lib/cloudinary/uploadImage";
import ConnectMongodb from "@/lib/mongo";
import Service from "@/models/service";
import { NextRequest, NextResponse } from "next/server";


await ConnectMongodb() 
export async function GET(
    request:NextRequest , 
    {params} : {params : Promise<{id : string}>} 
    ) {
    try{
        const id = (await  params).id;
        const service = await  Service.findOne({_id : id})
        return NextResponse.json({
            data:service
        },{
            status:200
        })
    }catch (err : unknown ){
        const error = err as Error
        return NextResponse.json({
            message:error.message
        },{
            status:500
        })
    }
}


export async function PUT(
    request:NextRequest , 
    {params} : {params : Promise<{id : string}>} 
    ) {
    try{
        const id = (await params).id;
        const formData = await request.formData();
        const serviceName = formData.get('serviceName')
        const serviceDescription = formData.get('serviceDescription')
        const servicePrice = formData.get('servicePrice')
        const serviceImage = formData.get('serviceImage') as File;
        const service = await  Service.findOne({_id : id})
        // console.log(service)
        console.log(servicePrice)
        console.log(serviceDescription)
        console.log(serviceImage,'image')
        console.log(serviceName);
        const service_url = service.serviceImage.url;
        const public_id = service.serviceImage.public_id;
        console.log(service_url)
        console.log(public_id);
        if(!serviceImage){
            await  Service.updateOne({_id : id},{
                $set:{
                    serviceName:serviceName,
                    servicePrice:servicePrice,
                    serviceDescription:serviceDescription,
                    serviceImage:{
                        url:service_url,
                        public_id:public_id
                    },
                    isActive:true
                }
            })
            const serviceUpdate = await  Service.findOne({_id : id})
            return NextResponse.json({
                message:"Successfully Updated Your Service",
                data:serviceUpdate
            },{
                status:200
            })   
        }
        if(public_id && service_url && serviceImage){
            const response = await DeleteImageCloudinary(public_id)
            if(response && response.status == 1){
                console.log('worked');
                const fileBuffer = await serviceImage.arrayBuffer();
                console.log('file buffer',fileBuffer);
                const mimeType = serviceImage.type;
                const encoding = "base64";
                const base64Data = Buffer.from(fileBuffer).toString("base64");
                const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
                const response = await uploadToCloudinary(fileUri , serviceImage.name)
                if(response && response.status == 201 && response.response.secure_url){
                    await  Service.updateOne({_id : id},{
                        $set:{
                            serviceName:serviceName,
                            servicePrice:servicePrice,
                            serviceDescription:serviceDescription,
                            serviceImage:{
                                url:response.response.secure_url,
                                public_id:response.response.public_id
                            },
                            isActive:true
                        }
                    })
                    const serviceUpdate = await  Service.findOne({_id : id})
                    return NextResponse.json({
                        message:"Successfully Updated Your Service",
                        data:serviceUpdate
                    },{
                        status:200
                    })
                }else{  
                    return NextResponse.json({
                        message:"Something Went Wrong Please Try Again"
                    },{
                        status:400
                    })
                }
            }else{
                return NextResponse.json({
                    message:"Something Went Wrong Please Try Again"
                },{
                    status:400
                })
            }     
            }else{
            return NextResponse.json({
                message:"Something Went Wrong Please Try Again"
            },{
                status:400
            })
        }     

    }catch (err : unknown){
        const error = err as Error;
        return NextResponse.json({
            message:error.message
        },{
            status:500
        })
    }
}


