import { NextResponse } from "next/server";
import { cloudinary } from ".";
import { UploadApiResponse } from "cloudinary";


type UploadResponse = 
    | {status : number;response : UploadApiResponse}
    | NextResponse<{message : string}>;




const uploadToCloudinary  = async (fileUri : string , fileName : string) : Promise<UploadResponse> => {

    try{
        const response = await cloudinary.uploader.upload(fileUri, {invalidate: true,resource_type: "auto",filename_override: fileName,folder: "authoke-service-image",use_filename: true})
        const  res = {
            "status":201,
            "response":response 
        }
        return res 
    }catch (err : unknown){
        const error = err as Error
        return NextResponse.json({
            message:error.message,
        },{
            status:500
        })
    }

}


export default uploadToCloudinary