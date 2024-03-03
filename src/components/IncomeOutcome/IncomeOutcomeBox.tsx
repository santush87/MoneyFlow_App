import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomeOutcome } from "../../types/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const text = 'text-xl text-indigo-300 pb-2 text-center'
const plusIcon = <FontAwesomeIcon className={text} icon={faPlus} />

export default function IncomeOutcomeBox({ amountType, value, currency }: IncomeOutcome) {
    const color = amountType == "income" ? 'text-green-700' : "text-red-700";
    return (
        <div className="flex flex-col gap-2 py-3 px-4 justify-center items-center border-2 rounded-3xl min-w-8 text-white font-bold">
            <p className={`text-xl ${color}`}>{value} {currency}</p>
            {/* <p>{amountType}</p>
            {description ? <p>{description}</p> : null} */}
            {plusIcon}
        </div>
    )
}