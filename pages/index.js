import React, {useEffect,useContext,useState} from "react";

// INTERNAL import

import { CrowdFundingContext } from "../Context/CrowdFunding";
import {Hero,Card,PupUp} from "../Components";

const index = ()=>{
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations
  } = useContext(CrowdFundingContext)
  const [allcampaign,setAllcampaign] = useState()
  const [usercampaign,setUsercampaign] = useState()
  useEffect(()=>{
    const getCampaignsData = getCampaigns();
    const userCampaignsData = getUserCampaigns();
    return async() =>{
      const allData = await getCampaignsData;
      const userData = await userCampaignsData;
      // console.log(allData)
      // allcampaign = allData
      
      setAllcampaign(allData);
      setUsercampaign(userData)
    }
  },[]);

  // Donate PupUp Model
  const [openModal,setOpenModal] = useState(false)
  const [donateCampaign,setDonateCampaign] = useState()

  console.log(donateCampaign);

  return (
    <>
    {/* {console.log("okos1"+usercampaign)} */}
    
      <Hero titleData = {titleData} createCampaign = {createCampaign}/>
      <Card 
        title = "All Listed Campaign"
        allcampaign = {allcampaign}
        setOpenModel = {setOpenModal}
        setDonate = {setDonateCampaign}
      />
      <Card 
        title = "Created Campaigns"
        allcampaign = {usercampaign}
        setOpenModel = {setOpenModal}
        setDonate = {setDonateCampaign}
      />
      {openModal && (
        <PupUp
         setOpenModal = {setOpenModal}
         getDonations = {getDonations}
         donate = {donateCampaign}
         donateFunction = {donate}
         />
      )}
    </>
  )
}
export default index;