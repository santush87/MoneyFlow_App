import ViewHeaderBox from "../components/IncomeOutcome/ViewHeaderBox.tsx"

const person = {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-3xl min-w-96 bg-slate-800 mt-4 rounded-3xl py-4 px-6">
                <div className="flex items-center justify-evenly pb-2">
                    <img className="h-28 w-28 rounded-full" src={person.imageUrl} alt="Person's image" />
                    <div>
                        <p className="text-md font-semibold leading-6 text-indigo-300">Welcome,</p>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-indigo-500 ">{person.name}</h3>
                    </div>
                </div>
                <ViewHeaderBox income={1945.34} outcome={1142.15} currency={'лв'} />
            </div>
        </div>
    )

}