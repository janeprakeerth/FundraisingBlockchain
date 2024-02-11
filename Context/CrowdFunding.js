import React, {useState,useEffect} from "react";
import Wenb3Modal from "web3modal";
import { ethers} from "ethers";

// Internal Import

import { CrowdFundingAbi,CrowdFundAddress } from "./contants";
// --Fetching Smart Contract
const fetchContract = (signerOrProvider)=>{
    console.log("asa")
    console.log(signerOrProvider)
    return new ethers.Contract(CrowdFundAddress,CrowdFundingAbi,signerOrProvider);
}
export const CrowdFundingContext = React.createContext();
export const CrowdFundingProvider = ({children})=>{
    const titleData = "Crowd Funding Contract";
    const [currentAccount,setCurrentAccount] = useState("");
    

    const createCampaign = async (campaign)=>{
        const {title,description,amount,deadline} = campaign
        const web3Modal =  new Wenb3Modal();
        const connection  = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        console.log("acq")
        console.log(contract);
        try{
            const transaction = await contract.createCampaign(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount,18),
                new Date(deadline).getTime()
            );
            await transaction.wait();
            console.log("contract call success",transaction);
        }catch(error){
            console.log("contract call failure",error)
        }
    }
    const getCampaigns = async ()=>{
        
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const campaigns = await contract.getCampaigns();

        const parsedCampaings = campaigns.map((campaign,i)=>({
            owner:campaign.owner,
            tilte:campaign.title,
            description:campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline:campaign.deadline.toNumber(),
            amountCollected:ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId:i,

        }));
        return parsedCampaings;
    

    }
    const getUserCampaigns = async ()=>{
        
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        console.log(contract)
        const allCampaigns = await contract.getCampaigns();
        const accounts = await window.ethereum.request({
            method:"eth_accounts",
        })
        const currentUser = accounts[0];
        const filteredCampaigns = allCampaigns.filter((campaign)=>campaign.owner==="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        const userData = filteredCampaigns.map((campaign,i)=>({
            owner:campaign.owner,
            title:campaign.title,
            description:campaign.description,
            target:ethers.utils.formatEther(campaign.target.toString()),
            deadline:campaign.deadline.toNumber(),
            amountCollected:ethers.utils.formatEther(campaign.amountCollected.toString()),
            pId:i
        }));
        return userData;
   
    }

    const donate = async(pId,amount)=>{
        const web3Modal = new Wenb3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        const campaignData = await contract.donateToCampaign(pId,{
            value: ethers.utils.parseEther(amount),
        });
        await campaignData.wait();
        location.reload();
        return campaignData;
    }
    const getDonations = async(pId)=>{
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        
        const donations = await contract.getDonators(pId);
        const numberofDonations = donations[0].length;
        const parsedDonations = [];

        for(let i=0;i<numberofDonations;i++){
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString()),
            });
        }
        return parsedDonations;
    }
    // check if wallet is connected
    const checkIfWalletConnected = async()=>{
        try{
            if(!window.ethereum){
                return setOpenError(true),setError("Install MetaMask");
            }
            const accounts = await window.ethereum.request({
              method:"eth_accounts",  
            });
            console.log(accounts);
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No Account Found");
            }
        }catch(error){
            console.log("Something wrong while connecting to wallet");
        }
    };
    useEffect(()=>{
        checkIfWalletConnected();
    },[]);
    // Connect Wallet Function
    const connectWallet = async()=>{
        try{
            console.log("ababokok")
            if(!window.ethereum){
                return console.log("Install Metamask");
            }
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
            });
            // console.log(accounts)
            setCurrentAccount(accounts[0]);
        }catch(error){
            console.log(error);
        }
    }
    return (
        <CrowdFundingContext.Provider
            value={{
                titleData,
                currentAccount,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonations,
                connectWallet
            }}
        >
            {children}
        </CrowdFundingContext.Provider>
        
    )
}
