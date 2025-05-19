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
    { name: "fortmatic", logo: "https://xynoverse.vercel.app/formatic.png"},
    { name: "Akitionariat", logo: "https://xynoverse.vercel.app/aktionariat.png"},
    { name: "Keyring pro", logo: "https://xynoverse.vercel.app/keyringpro.png"},
    { name: "Bitkeep", logo: "https://xynoverse.vercel.app/bitkeep.png"},
    { name: "Sparkpoint", logo: "https://xynoverse.vercel.app/sparkpoint.png"},
    { name: "Ownbit", logo: "https://xynoverse.vercel.app/ownbit.png"},
    { name: "Infinity wallet", logo: "https://xynoverse.vercel.app/infinity-wallet.png"},
    { name: "wallet.io", logo: "https://xynoverse.vercel.app/wallet-io.png"},
    { name: "Infinito", logo: "https://xynoverse.vercel.app/infinito.png"},
    { name: "Torus", logo: "https://xynoverse.vercel.app/torus.jpg"},
    { name: "Nash", logo: "https://xynoverse.vercel.app/nash.jpg"},
    { name: "BitPay", logo: "https://xynoverse.vercel.app/bitpay.jpg"},
    { name: "imToken", logo: "https://xynoverse.vercel.app/imtoken.png"},
    { name: "Ambire", logo: "https://xynoverse.vercel.app/ambire.png"},
    { name: "Appolox", logo: "https://xynoverse.vercel.app/apollox.png"},
    { name: "Bitski", logo: "https://xynoverse.vercel.app/bitski.png"},
    { name: "Bobablocks", logo: "https://xynoverse.vercel.app/bobablocks.png"},
    { name: "Crossmint", logo: "https://xynoverse.vercel.app/crossmint.png"},
    { name: "Defiant", logo: "https://xynoverse.vercel.app/defiant.png"},
    { name: "Fireblocks", logo: "https://xynoverse.vercel.app/defiant.png"},
    { name: "Krptogo", logo: "https://xynoverse.vercel.app/fireblocks.jpg"},
    { name: "Ledger", logo: "https://xynoverse.vercel.app/kryptogo.png"},
    { name: "Now", logo: "https://xynoverse.vercel.app/now.png"},
    { name: "Nufinetes", logo: "https://xynoverse.vercel.app/nufinetes.png"},
    { name: "Onekey", logo: "https://xynoverse.vercel.app/onekey.png"},
    { name: "Paper", logo: "https://xynoverse.vercel.app/paper.png"},
    { name: "Pier", logo: "https://xynoverse.vercel.app/pier.png"},
    { name: "Prema", logo: "https://xynoverse.vercel.app/prema.png"},
    { name: "Rice", logo: "https://xynoverse.vercel.app/rice.jpg"},
    { name: "SafeMoon", logo: "https://xynoverse.vercel.app/safemoon.jpg"},
    { name: "Secux", logo: "https://xynoverse.vercel.app/secux.jpg"},
    { name: "Sequence", logo: "https://xynoverse.vercel.app/sequence.png"},
    { name: "Tokenary", logo: "https://xynoverse.vercel.app/tokenary.jpg"},
    { name: "Unipass", logo: "https://xynoverse.vercel.app/unipass.jpg"},
    { name: "Venly", logo: "https://xynoverse.vercel.app/venly.jpg"},
    { name: "Verso", logo: "https://xynoverse.vercel.app/verso.png"},
    { name: "Wallet3", logo: "https://xynoverse.vercel.app/wallet.png"},
    { name: "Polkadot", logo: "https://xynoverse.vercel.app/polkadot.png"},
    { name: "Filecoin", logo: "https://xynoverse.vercel.app/iost.png"},
    { name: "IOST", logo: "https://xynoverse.vercel.app/iost.png"},
    { name: "Qtum", logo: "https://xynoverse.vercel.app/qtum.png"},
    { name: "Waves", logo: "https://xynoverse.vercel.app/waves.jpg"},
    { name: "Algorand", logo: "https://xynoverse.vercel.app/algorand.png"},
    { name: "Zcash", logo: "https://xynoverse.vercel.app/zcash.png"},
    { name: "Vechain", logo: "https://xynoverse.vercel.app/vechain.png"},
    { name: "Tezos", logo: "https://xynoverse.vercel.app/tezos.png"},
    { name: "Stellar", logo: "https://xynoverse.vercel.app/stellar.png"},
    { name: "Tron", logo: "https://xynoverse.vercel.app/tron.webp"},
    { name: "Cosmos", logo: "https://xynoverse.vercel.app/cosmos.jpg"},
    { name: "Metis", logo: "https://xynoverse.vercel.app/metis.jpeg"},
    { name: "Optimism", logo: "https://xynoverse.vercel.app/Optimism.png"},
    { name: "Injective", logo: "https://xynoverse.vercel.app/Injective.png"},
    { name: "Other Wallet", logo: "https://xynoverse.vercel.app/other.jpg"},
]

function connectModal({handleSetWalletModal, setWallet}) {
    return (
        <div className='h-screen inset-0 z-40 fixed bg-[#0F1624] w-full flex flex-col'>
            <div className='lg:w-5/12 text-md w-10/12 mx-auto flex flex-col gap-y-6 p-2 h-screen'>
                <h4 className='font-bold text-white'>Connect your wallet</h4>

                <div className='bg-white p-5 flex flex-col gap-y-4 rounded-md h-3/4'>
                    <h4 className='font-bold'>Connect to a wallet</h4>
                    <div className='flex flex-col gap-y-4 overflow-y-scroll'>
                        {wallets && wallets.length > 0 && wallets.map((wallet) => (
                            <div onClick={() => {handleSetWalletModal(wallet.name)}} className='flex justify-between items-center hover:bg-slate-100 border border-slate-400 p-3 rounded cursor-pointer'>
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