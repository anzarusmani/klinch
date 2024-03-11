import React, {useState, useEffect, useContext} from 'react';
import Wenb3Modal from "web3modal";
import {ethers} from "ethers";
import Router from "next/router";
import axios from "axios";
import {create as ipfsHttpClient} from "ipfs-http-client";

const client=ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// Internal import
import { NFTMarketplaceAddress, NFTMarketplaceABI } from './constants';

//--Fetching Smart Contract
const fetchContract=(signerOrProvider)=>
new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
    );

//-- connecting with smart contract

const connectingWithSmartContract=async()=>{
    try{
        const web3Modal=new Wenb3Modal();
        const  connection = await web3Modal.connect();
        const provider=new ethers.providers.Web3Provider(connection)
        const signer=provider.getSigner();
        const contract=fetchContract(signer);
         return contract;
    }catch(error){
        console.log("something went wrong while connecting with contract");
    }
};


export const NFTMarketplaceContext = React.createContext();

export const   NFTMarketplaceProvider = ({children}) => {
    const titleData="Discover, collect, and sell NFTs ";

    // const checkContract=async()=>{
    //     const contract=await connectingWithSmartContract();
    //     console.log(contract);
    // }


//-----------USESTATE
const [currentAccount,setCurrentAccount]=useState("");

//--CHECK IF WALLET IS CONNECTED
const checkIfWalletConnected= async()=>{
    try{
if(!window.ethereum) return console.log("Install MetaMask")

const accounts=await window.ethereum.request({method:"eth_accounts",
});

if(accounts.length){
    setCurrentAccount(accounts[0]);
    }
    else{
        console.log("No account found");
    }
}
    catch(error){
        console.log("Something went wrong while connecting to wallet");
    }
};

useEffect(()=>{
    checkIfWalletConnected();
},[]);

//--CONNECT WALLET FUNCTION
const connectWallet=async()=>{
try{
    if(!window.ethereum) return console.log("Install MetaMask")

    const accounts=await window.ethereum.request({method:"eth_requestAccount",
    });

    setCurrentAccount(accounts[0]);
    window.location.reload();
}
catch(error){
    console.log("Error while connecting to wallet");
}
}

//--UPLOAD TO IPFS FUNCTION 
const uploadToIPFS = async (file)=>{
    try{
        const added=await client.add({content:file});
        const url='https://ipfs.infura.io/ipfs/${added.path}';
        
        return url;
    

    } catch(error){
        console.log(Error Uploading to IPFS);
    }
}

//--CREATENFT FUNCTION
const createNFT=async( formInput,fileUrl,router)=>{
    
        const {name,description,price}=formInput;

        if(!name || !description||!price || !fileUrl)
        return console.log("Data is Missing");
    const data=JSON.stringify({name,description,image:fileUrl})

    try{
const added = await client.add(data);

        const url='https://ipfs.infura.io/ipfs/${added.path}';

        await createSale(url,price);
    }catch(error){
        console.log(error);
    }
    }

};


    return (
        <NFTMarketplaceContext.Provider 
        value={{
            
            connectWallet,
            uploadToIPFS,
            createNFT,
            titleData,
            
            }}
            >
            {children}
        </NFTMarketplaceContext.Provider>
    )
};