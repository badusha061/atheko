import mongoose from "mongoose";


const ServiceSchema = new mongoose.Schema({
    serviceName :{
        type:String,
        required : true ,
        unique : true
    },
    servicePrice :{
        type:Number,
        required : true 
    },
    serviceDescription :{
        type:String,
        required : true 
    },
    serviceImage :{
        url:{
            type:String,
            required : true 
        },
        public_id:{
            type:String,
            required : true 
        }
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    isActive:{
        type:Boolean,
        default:false 
    }
})

const Service = mongoose.models.Service || mongoose.model('Service',ServiceSchema);

export default  Service;