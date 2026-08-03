import { useState } from "react"
import { Eye, EyeOff} from 'lucide-react'

interface Account {
    id: string
    name: string
    number: string
    balance: string
    visible: boolean
}

export default function BankingApp(){
    const [accounts, setAccounts] = useState<Account[]>([
        {id: 'checking', name: 'CHECKING ACCOUNT', number: '...4715', balance: 'GHS 67.59', visible: true},
        {id: 'savings', name: 'SAVINGS ACCOUNT', number: '...2209', balance: 'GHS 500.00', visible: false}
    ])

    const toggleVisibility = (id: string) => {
        setAccounts(accounts.map(acc =>
            acc.id === id ? {...acc, visible: !acc.visible} : acc
        ))
    }

    return (
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
    )
}