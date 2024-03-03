import IncomeOutcomeBox from "../components/IncomeOutcome/IncomeOutcomeBox.tsx"

const person = {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-3xl min-w-96 bg-slate-800 mt-4 rounded-2xl">
                <div className="flex items-center justify-center gap-x-6 py-6">
                    <img className="h-28 w-28 rounded-full" src={person.imageUrl} alt="Person's image" />
                    <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                        {/* <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p> */}
                    </div>
                </div>
                <div className="flex flex-col flex-auto justify-center items-center gap-5">
                    <div className="max-w-64">
                        <IncomeOutcomeBox amountType={"income"} description={"salary"} value={500} />
                    </div>
                    <div className="flex justify-around gap-5">
                        <IncomeOutcomeBox amountType={"income"} description={"salary"} value={1500} />
                        <IncomeOutcomeBox amountType={"outcome"} description={"salary"} value={1000} />
                    </div>
                </div>
            </div>
        </div>
    )

}