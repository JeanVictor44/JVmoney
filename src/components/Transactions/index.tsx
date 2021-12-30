import { Container } from "./style"
import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"

export const Transactions = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
} 