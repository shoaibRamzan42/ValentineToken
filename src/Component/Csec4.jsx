import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiamondIcon from '@mui/icons-material/Diamond';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Csec4=()=>{
    return(<>
    <div className="flex flex-wrap justify-center gap-10">
        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[45%]  border rounded-lg border-blue-gray-200">
            <div className="flex gap-1">
            <AccountBalanceWalletIcon className=" text-[#855ff0]" />
            <h1 className="uppercase font-semibold text-[20px] texts-grade ">1.Creat a Wallet</h1>
            </div>
            <p className="text-[16px] w-full font-medium texts-grade">Create a MetaMask or Trust Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $Valentine Myro</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border rounded-lg border-blue-gray-200">
            <div className="flex items-center gap-1">
            <DiamondIcon className=" text-[#855ff0]" />
            <h1 className="uppercase font-semibold text-[20px] texts-grade ">2.grab some eth</h1>
            </div>
            <p className="text-[16px] w-full font-medium texts-grade">You can buy Ethereum (ETH) directly on MetaMask / Trust wallet or transfer it to your Wallet from exchanges like Coinbase, Binance, etc.</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border rounded-lg border-blue-gray-200">
            <div className="flex gap-1">
            <PublicIcon className=" text-[#855ff0]" />
            <h1 className="uppercase font-semibold text-[20px] texts-grade ">
						3. CONNECT YOUR WALLET					</h1>
            </div>
            <p className="text-[16px] w-full font-medium texts-grade">Access your wallet to Uniswap by clicking ‘Connect to a wallet’ and selecting Cat by the Contract Address</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border rounded-lg border-blue-gray-200">
            <div className="flex items-center gap-1">
            <SwapHorizIcon  className=" text-[#855ff0]" />
            <h1 className="uppercase font-semibold text-[20px] texts-grade ">
						4. SWAP ETH FOR $Valentine Myro					</h1>
            </div>
            <p className="text-[16px] w-full font-medium texts-grade">You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address $Valentine Myro</p>
        </div>
        </div>
    </>)
}

export default Csec4;