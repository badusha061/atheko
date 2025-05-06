

export const getError = (error  : unknown) : string => {
    let message : string;
    if(error instanceof Error){
        message = error.response.data.message
    }else if(error && typeof error === 'object' && "message" in error){
        message = String(error.message)
    }else if(error &&  typeof  error === 'string'){
        message = error
    }else{
        message = 'Something Went Wrong'
    }
    return message
}
