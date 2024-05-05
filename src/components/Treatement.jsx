import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { baseUrl } from '../DataFiles/Urls';
import { useNavigate } from 'react-router-dom';
import { addRoute } from '../redux/reducers/userDetailsSlice';
const Treatement = ({token}) => {
  const issue=useSelector((state)=>state.userDetails.issues);
  const [issueDetails,setIssueDetails]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetchDetails=async()=>{
      try {
        toast.loading("fetching details",{id:"detailsFetch"})
        const response=await fetch(`${baseUrl}/issues/${issue}/info?token=${token}&format=json&language=en-gb`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data=await response.json();
        // console.log(data);
        setIssueDetails(data);
        toast.success("details fetched",{id:"detailsFetch"})
      } catch (error) {
        toast.error("Unable to fetch details",{id:"detailsFetch"})
      }
    }

    if(issue && issue.length!=0){
      dispatch(addRoute("treatement"));
      fetchDetails();
    }
    else{
      navigate("/");
    }
  },[issue])
  return (
    <>
     {issueDetails && <div className='details-container mx-7 space-y-3'>
      <h1 className="text-center text-3xl font-bold my-5">
        {issueDetails.Name}
      </h1>
      <div className='description'>
        <span className='font-bold text-pink-400'>Description : </span>
        <span>{issueDetails.Description}</span>
      </div>
      <div className='Medical-Condition'>
        <span className='font-bold text-pink-400'>Medical Condition : </span>
        <span>{issueDetails.MedicalCondition}</span>
      </div>
      <div className='Symptoms'>
        <span className='font-bold text-pink-400'>Possible Symptoms : </span>
        <span>{issueDetails.PossibleSymptoms}</span>
      </div>
      <div className='Treatement'>
        <span className='font-bold text-pink-400'>Treatement : </span>
        <span>{issueDetails.TreatmentDescription}</span>
      </div>
      </div>}

      <div className="flex items-center border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 h-20 px-3">
        <button
          className="bg-blue-200 w-36 px-3 py-3 rounded-md hover:bg-blue-300 cursor-pointer disabled:bg-gray-200 disabled:cursor-default"
          onClick={() => navigate("/issues")}
        >
          <div className="flex justify-center items-center">
            <box-icon type="solid" name="chevron-left"></box-icon>
            <span className="font-bold">Prev</span>
          </div>
        </button>
        
      </div>
    </>
  )
}

export default Treatement