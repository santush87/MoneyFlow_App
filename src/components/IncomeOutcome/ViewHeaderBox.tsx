
export default function ViewHeaderBox() {
    return (
        <div className="flex flex-col flex-auto justify-center items-center gap-5">
            <div className="max-w-64">
                <MoneyBox amountType={"income"} description={"salary"} value={500} />
            </div>
            <div className="flex justify-around gap-5">
                <MoneyBox amountType={"income"} description={"salary"} value={1500} />
                <MoneyBox amountType={"outcome"} description={"salary"} value={1000} />
            </div>
        </div>
    )
}

