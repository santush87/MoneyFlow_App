import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IncomeOutcomeBox from "./IncomeOutcomeBox";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export type SumOverview = {
    income: number;
    outcome: number;
    currency: 'лв' | '$' | '€';
}


export default function ViewHeaderBox({ income, outcome, currency }: SumOverview) {

    const moneyDif = income - outcome;
    const color = moneyDif > 0 ? 'text-green-700' : "text-red-700";
    const text = 'text-xl text-indigo-300 pb-2 text-center'

    return (
        <>
            <div className="flex flex-col flex-auto justify-center py-4 px-6 items-center rounded-3xl bg-slate-800 gap-5">
                <div className="flex flex-col bg-indigo-900 justify-center items-center rounded-3xl min-w-8 text-white font-bold py-3 px-4">
                    <p className={`text-3xl ${color}`}>{moneyDif.toFixed(2)} {currency}</p>
                    <p className={`text-xl text-indigo-300`}>Available</p>
                </div>
                <div className="flex justify-around gap-5 pb-3">
                    <div className="min-w-44">
                        <p className={text}>Income</p>
                        <IncomeOutcomeBox amountType={"income"} description={"salary"} value={income} currency={'лв'} />

                    </div>
                    <div className="min-w-44">
                        <p className={text}>Outcome</p>
                        <IncomeOutcomeBox amountType={"outcome"} description={"salary"} value={outcome} currency={'лв'} />
                    </div>
                </div>
            </div>

        </>
    )
}

