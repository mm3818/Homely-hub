import { propertyDetailsAction } from "./propertyDetails-slice";
import axios from "axios";

export const getPropertyDetails = (id)=>async(dispatch)=>{
    try{
        dispatch(propertyDetailsAction.getListRequest())
        const response = await axios(`/api/v1/rent/listing/${id}`)
        if(!response){
            throw new Error("Couldn't fetch any property details.....")
        }
        const {data}=response.data

        dispatch(propertyDetailsAction.getPropertyDetails(data))
    }
    catch(error){
        dispatch(propertyDetailsAction.getErrors(error.response.data.error))
    }
}