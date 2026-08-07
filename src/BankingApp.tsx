import { useState } from "react"
import { ArrowLeftRight, Bell, ChevronDown, ChevronUp, CircleUserRound, CreditCard, DollarSign, Eye, EyeOff, Home, MoreHorizontal, Phone, QrCode, Receipt, Smartphone, Split, TrendingUp} from 'lucide-react'

interface Account {
    id: string
    name: string
    number: string
    balance: string
    visible: boolean
}

interface QuickActionButtonProps {
    icon: React.ReactNode
    label: string
}

export default function BankingApp(){
    const [accounts, setAccounts] = useState<Account[]>([
        {id: 'checking', name: 'CHECKING ACCOUNT', number: '...4715', balance: 'GHS 67.59', visible: true},
        {id: 'savings', name: 'SAVINGS ACCOUNT', number: '...2209', balance: 'GHS 500.00', visible: false}
    ])
    const [showAllActions, setShowAllActions] = useState(true)

    const toggleVisibility = (id: string) => {
        setAccounts(accounts.map(acc =>
            acc.id === id ? {...acc, visible: !acc.visible} : acc
        ))
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 p-8">
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-[390px] h-[844px] bg-gray-50 rounded-[2.5rem] overflow-hidden overflow-y-auto relative">
                    <div className="bg-cyan-700 px-4 pt-6 pb-48">
                        <div className="flex justify-between items-center">
                            <Phone size={20} className="text-white"/>
                            <div className="text-center">
                                <h1 className="text-white font-serif text-xl italic">Ecobanking</h1>
                                <p className="text-white text-xs">concept</p>
                            </div>
                            <CircleUserRound size={22} className="text-white" />
                        </div>
                        <div className="h-0.25 bg-lime-500 -mx-4 mt-4"></div>
                        <h2 className="text-white font-bold text-xl mt-8 place-self-center">Welcome back, Jane👋</h2>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl mx-4 -mt-38 overflow-hidden">
                        <div className="bg-lime-500 px-4 py-3 flex justify-between items-center">
                            <h2 className="font-bold text-black">MY ACCOUNTS</h2>
                        </div>
                        {accounts.map((account, index) => (
                        <div
                            key={account.id}
                            className={`px-4 py-4 ${index < accounts.length - 1 ? 'border-b border-gray-200' : ''}`}
                        >
                            <p className="text-sm font-semibold">{account.name}({account.number})</p>
                            <div className="flex justify-end items-center gap-2 mt-2">
                                <span className="text-sm text-gray-600">Available Balance</span>
                                <button 
                                    onClick={() => toggleVisibility(account.id)}
                                    className="p-4 -m-3"
                                >
                                    {account.visible ? <EyeOff size={18}/> : <Eye size={18}/>}
                                </button>
                            </div>
                            <p className="text-right font-bold text-lg">
                                {account.visible ? account.balance : 'GHS ......'}
                            </p>
                        </div>
                    ))}        
                    </div>

                    <div className="mx-4 mt-6">
                        <button
                            onClick={() => setShowAllActions(!showAllActions)}
                            className="flex justify-between items-center w-full py-2"
                        >
                            <h3 className="font-bold text-sm">QUICK TRANSACTIONS</h3>
                            {showAllActions ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        <div className="grid w-full grid-cols-2 gap-3 mt-3">
                            <QuickActionButton icon={<Smartphone size={18} />} label="Buy Airtime/Data" />
                            <QuickActionButton icon={<ArrowLeftRight size={18} />} label="Transfer" />
                        </div>

                        <div
                            className={`grid transition-all duration-200 ease-in-out ${
                                showAllActions ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-2 gap-3 pt-3">
                                    <QuickActionButton icon={<Receipt size={18} />} label="Pay Bill" />
                                    <QuickActionButton icon={<DollarSign size={18} />} label="Xpress Cash" />
                                    <QuickActionButton icon={<QrCode size={18} />} label="EcobankPay" />
                                    <QuickActionButton icon={<Split size={18} />} label="Split Payment" />
                                </div>
                            </div>
                        </div>
                            
                    </div>

                    <div className="flex justify-around items-center border-t border-gray-200 bg-white py-3 absolute bottom-0 left-0 right-0 mt-auto ">
                        <Home size={22} className="text-cyan-600 transition-colors duration-150 active:text-cyan-900 hover:text-cyan-900" />
                        <CreditCard size={22} className="text-cyan-600 transition-colors duration-150 active:text-cyan-900 hover:text-cyan-900" />
                        <TrendingUp size={22} className="text-cyan-600 transition-colors duration-150 active:text-cyan-900 hover:text-cyan-900" />
                        <Bell size={22} className="text-cyan-600 transition-colors duration-150 active:text-cyan-900 hover:text-cyan-900" />
                        <MoreHorizontal size={22} className="text-cyan-600 transition-colors duration-150 active:text-cyan-900 hover:text-cyan-900" />
                    </div>
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 mt-1 h-6 bg-black rounded-full"></div>
            </div>
        </div>
    )
}

function QuickActionButton({icon, label}: QuickActionButtonProps) {
    return(
        <button className="flex items-center gap-2 border border-cyan-700 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-150 active:bg-blue-50 hover:bg-blue-50">
            {icon}
            <span>{label}</span>
        </button>
    )
}
