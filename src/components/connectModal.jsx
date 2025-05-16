import React from 'react'

const wallets = [
    { name: "Metamask", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/640px-MetaMask_Fox.svg.png"},
    { name: "Trust", logo: "https://altcoinsbox.com/wp-content/uploads/2023/03/trust-wallet-logo-600x600.webp"},
    { name: "Coinbase", logo: "https://logosarchive.com/wp-content/uploads/2021/12/Coinbase-icon-symbol-1.svg"},
    { name: "Xumm", logo: "https://xynoverse.vercel.app/xumm.png"},
    { name: "Cardano", logo: "https://xynoverse.vercel.app/cardano.png"},
    { name: "Daedalus", logo: "https://xynoverse.vercel.app/daedalus.png"},
    { name: "Yoroi", logo: "https://xynoverse.vercel.app/yoroi.png"},
    { name: "CCVault", logo: "https://xynoverse.vercel.app/ccvault.png"},
    { name: "Gero", logo: "https://xynoverse.vercel.app/gero.jpg"},
    { name: "Nami", logo: "https://xynoverse.vercel.app/nami.png"},
    { name: "Solana", logo: "https://xynoverse.vercel.app/solana.png"},
    { name: "Phantom", logo: "https://xynoverse.vercel.app/phantom.jpg"},
    { name: "Solflare", logo: "https://xynoverse.vercel.app/solflare.png"},
    { name: "Sollet", logo: "https://xynoverse.vercel.app/sollet.png"},
    { name: "Solong", logo: "https://xynoverse.vercel.app/solong.jpg"},
    { name: "Avalanche", logo: "https://xynoverse.vercel.app/avalanche.png"},
    { name: "Velas", logo: "https://xynoverse.vercel.app/velas.png"},
    { name: "Crypto.com", logo: "https://xynoverse.vercel.app/crypto.png"},
    { name: "Blockchain", logo: "https://xynoverse.vercel.app/blockchain.png"},
    { name: "Binance smart chain", logo: "https://xynoverse.vercel.app/bsc.png"},
    { name: "Safepal", logo: "https://xynoverse.vercel.app/safepal.png"},
    { name: "Argent", logo: "https://xynoverse.vercel.app/argent.jpg"},
    { name: "fortmatic", logo: ""},
    { name: "Akitionariat", logo: ""},
    { name: "Keyring pro", logo: ""},
    { name: "Bitkeep", logo: ""},
    { name: "Sparkpoint", logo: ""},
    { name: "Ownbit", logo: ""},
    { name: "Infinity wallet", logo: ""},
    { name: "wallet.io", logo: ""},
    { name: "Infinito", logo: ""},
    { name: "Torus", logo: ""},
    { name: "Nash", logo: ""},
    { name: "BitPay", logo: ""},
    { name: "imToken", logo: ""},
    { name: "Ambire", logo: ""},
    { name: "Appolox", logo: ""},
    { name: "Bitski", logo: ""},
    { name: "Bobablocks", logo: ""},
    { name: "Crossmint", logo: ""},
    { name: "Defiant", logo: ""},
    { name: "Fireblocks", logo: ""},
    { name: "Krptogo", logo: ""},
    { name: "Ledger", logo: ""},
    { name: "Now", logo: ""},
    { name: "Nufinetes", logo: ""},
    { name: "Onekey", logo: ""},
    { name: "Paper", logo: ""},
    { name: "Pier", logo: ""},
    { name: "Prema", logo: ""},
    { name: "Rice", logo: ""},
    { name: "SafeMoon", logo: ""},
    { name: "Secux", logo: ""},
    { name: "Sequence", logo: ""},
    { name: "Tokenary", logo: ""},
    { name: "Unipass", logo: ""},
    { name: "Venly", logo: ""},
    { name: "Verso", logo: ""},
    { name: "Wallet3", logo: ""},
    { name: "Polkadot", logo: ""},
    { name: "Filecoin", logo: ""},
    { name: "IOST", logo: ""},
    { name: "Qtum", logo: ""},
    { name: "Waves", logo: ""},
    { name: "Algorand", logo: ""},
    { name: "Zcash", logo: ""},
    { name: "Vechain", logo: ""},
    { name: "Tezos", logo: ""},
    { name: "Stellar", logo: ""},
    { name: "Tron", logo: ""},
    { name: "Cosmos", logo: ""},
    { name: "Metis", logo: ""},
    { name: "Optimism", logo: ""},
    { name: "Injective", logo: ""},
    { name: "Other Wallet", logo: ""},
]

function connectModal({handleSetWalletModal}) {
    return (
        <div className='h-screen inset-0 z-40 fixed bg-[#0F1624] w-full flex flex-col'>
            <div className='lg:w-5/12 text-md w-10/12 mx-auto flex flex-col gap-y-6 p-2 h-screen'>
                <h4 className='font-bold text-white'>Connect your wallet</h4>

                <div className='bg-white p-5 flex flex-col gap-y-4 rounded-md h-3/4'>
                    <h4 className='font-bold'>Connect to a wallet</h4>
                    <div className='flex flex-col gap-y-4 overflow-y-scroll'>
                        {wallets && wallets.length > 0 && wallets.map((wallet) => (
                            <div onClick={handleSetWalletModal} className='flex justify-between items-center hover:bg-slate-100 border border-slate-400 p-3 rounded cursor-pointer'>
                                <h4 className='font-semibold'>{wallet.name}</h4>
                                <img className='w-10 h-10 rounded-full' src={wallet.logo} alt="" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default connectModal