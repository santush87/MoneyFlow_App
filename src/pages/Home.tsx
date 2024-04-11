import ViewHeaderBox from "../components/IncomeOutcome/ViewHeaderBox.tsx"
import TwoLevelPieChart from "../components/charts/TwoLevelPieChart.tsx"
import ChartsTwo from "../components/charts/ChartsTwo.tsx"
import Donut from "../components/charts/Donut.tsx"


const person = {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <div className="lg:flex max-w-3xl min-w-96  mt-4 py-4 px-6 gap-5">
                <div className="flex lg:flex-col items-center rounded-3xl justify-evenly py-4 px-6 bg-slate-800">
                    <img className="h-28 w-28 rounded-full" src={person.imageUrl} alt="Person's image" />
                    <div>
                        <p className="text-md font-semibold leading-6 text-indigo-300 text-center">Welcome,</p>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-indigo-500 ">{person.name}</h3>
                    </div>
                </div>
                <ViewHeaderBox income={1945.34} outcome={1142.15} currency={'лв'} />
            </div>
            <TwoLevelPieChart />
            <ChartsTwo />
            <div className="flex flex-auto">
                <Donut />
            </div>
        </div>
    )

}