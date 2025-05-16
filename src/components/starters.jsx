import React from 'react'

const data = [
    { number: "Migration", text: 'Click here for migration or to resolve any migration related issues' },
    { number: "Rectification", text: 'Click here to rectify all strange wallet issues' },
    { number: "Claim", text: 'Click here to claim tokens or resolve any token claiming related issues ' },
    { number: "Swap", text: 'Click here to swap tokens or resolve issues related to token swaps' },
    { number: "Slippage", text: 'Click here to swap tokens or resolve issues related to token swaps' },
    { number: "Claim Airdrop", text: 'Click here to claim airdrop or resolve errors encountered during airdrop claim.' },
    { number: "Staking", text: 'Click here to resolve issues while staking/unstaking'},
    { number: "Whitelist", text: 'Click here to whitelist your address or resolve whitelisting related error.' },
    { number: "Cross Transfer", text: 'Click here to resolve cross bridging errors encountered during cross transfer' },
    { number: "NFTs", text: 'Click here to resolve NFT related issues.' },
    { number: "Locked Account", text: 'Click here to resolve locked account or wallet stuck issues' },
    { number: "Login Error", text: 'Click here to resolve errors encountered during login' },
    { number: "Wallet Glitch", text: 'Click here to resolve wallet issues.' },
    { number: "Defi Farming", text: 'Click here for DeFi or commercial farming related issues ' },
    { number: "Validation", text: 'Click here to validate your wallet via Multisig ' },
    { number: "Transaction Delay", text: 'Click here for any transaction related error ' },
    { number: "Missing/Irregular Balance", text: 'Click here to recover lost or missing funds' },
    { number: "Recovery", text: 'Click here for wallet recovery.' },
    { number: "Buy Token/Coin", text: 'Click here to trade. Your account has to be marked as trsuted payment source to start trading.' },
    { number: "Exchange", text: 'Click here for token exchange or to resolve errors encountered during token exchange' },
    { number: "Bridging", text: 'Click here to bridge tokens or resolve bridging related issues.' },
];

function starters({handleSetModal}) {
    return (
        <div className='flex flex-col w-full lg:gap-y-8 gap-y-4'>
            <h4 className='font-bold lg:text-[30px] text-white text-[18px]'>Get started below</h4>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-4'>
                {data.map((card, index) => (
                    <div onClick={handleSetModal} className='flex flex-col hover:border-blue-700 hover:border rounded-md text-white p-5 bg-[hsl(232.7,27.3%,23.7%)] cursor-pointer' key={index}>
                        <h4 className='font-bold lg:text-[25px] text-[16px]'>{`${card.number}`}</h4>
                        <p className='font-light'>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default starters