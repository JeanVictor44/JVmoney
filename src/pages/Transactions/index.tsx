import { Container } from "./style"
import { Summary } from "../../components/Summary"
import { TransactionsTable } from "../../components/TransactionsTable"

export const Transactions = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
} 