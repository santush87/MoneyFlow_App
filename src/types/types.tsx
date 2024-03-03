export type IncomeOutcome = {
    amountType: 'income' | 'outcome';
    value: number;
    description: 'salary' | 'rent' | 'loan' | 'other';
}