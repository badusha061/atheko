import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    customerName : {
        type:String,
    },
    reviewTitle : {
        type:String,
        required : true 
    },
    reviewText : {
        type:String,
        required : true 
    },
    reviewRating : {
        type:Number,
        required : true,
        min:1,
        max:5
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.models.Review || mongoose.model('Review',ReviewSchema);

export default  Review;