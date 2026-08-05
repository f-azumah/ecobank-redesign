import { useState } from "react"
import { ArrowLeftRight, ChevronDown, ChevronUp, DollarSign, Eye, EyeOff, QrCode, Receipt, Smartphone, Split} from 'lucide-react'

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
        <div className="max-w-[390px] mx-auto min-h-screen bg-gray-50">
            <div className="bg-white rounded-2xl mx-4 mt-6 overflow-hidden">
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

                    {showAllActions && (
                        <>
                            <QuickActionButton icon={<Receipt size={18} />} label="Pay Bill" />
                            <QuickActionButton icon={<DollarSign size={18} />} label="Xpress Cash" />
                            <QuickActionButton icon={<QrCode size={18} />} label="EcobankPay" />
                            <QuickActionButton icon={<Split size={18} />} label="Split Payment" />
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

function QuickActionButton({icon, label}: QuickActionButtonProps) {
    return(
        <button className="flex items-center gap-2 border border-blue-800 rounded-lg px-3 py-3 text-sm font-medium">
            {icon}
            <span>{label}</span>
        </button>
    )
}