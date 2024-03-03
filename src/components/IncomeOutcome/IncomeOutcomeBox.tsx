import { IncomeOutcome } from "../../types/types";

export default function IncomeOutcomeBox({ amountType, value, description }: IncomeOutcome) {
    const color = amountType == "income" ? 'text-green-700' : "text-red-700";
    return (
        <div className="flex flex-col justify-center items-center border-2 rounded-2xl min-w-8 text-white font-bold">
            <p className={`text-3xl ${color}`}>{value} лв</p>
            <p>{amountType}</p>
            {description ? <p>{description}</p> : null}
        </div>
    )
}