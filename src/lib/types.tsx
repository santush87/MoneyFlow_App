import { z } from "zod"
// import { data } from "../components/charts/Donut";


export type IncomeOutcome = {
    amountType: 'income' | 'outcome';
    value: number;
    description: 'salary' | 'rent' | 'loan' | 'other';
    currency: 'лв' | '$' | '€';
}

// LOGIN
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),

})


export type TLoginSchema = z.infer<typeof loginSchema>;

// REGISTER
export const registerSchema = z.object({
    email: z.string().email(),
    firstName: z.string()
        .min(2, "First name must be between 2 and 20 characters!")
        .max(20, "First name must be between 2 and 20 characters!"),
    lastName: z.string()
        .min(2, "Last name must be between 2 and 20 characters!")
        .max(20, "Last name must be between 2 and 20 characters!"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
})
    .refine(data => data.password === data.confirmPassword, {
        message: "Password must match!",
        path: ["confirmPassword"],
    })

export type TRegisterSchema = z.infer<typeof registerSchema>;

export type Category = {
    name: string;
    description: string;
    expenses: Expense[];
};

export type Expense = {
    name: string;
    description: string;
    amounts: Amount[];
};

export type Amount = {
    addedOn: Date;
    amount: number;
};