import { useState } from "react"

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
            <div className="px-4 py-4 border-b border-gray-200">
                <p className="text-sm font-semibold">{accounts[0].name}({accounts[0].number})</p>
                <div className="flex justify-end items-center gap-2 mt-2">
                    <span className="text-sm text-gray-600">Available Balance</span>
                    <button onClick={() => toggleVisibility(accounts[0].id)}>
                    {accounts[0].visible ? '🙈' : '👁️'}
                    </button>
                </div>
                <p className="text-right font-bold text-lg">
                    {accounts[0].visible ? accounts[0].balance : 'GHS ......'}
                </p>
            </div>
        </div>
    )
}