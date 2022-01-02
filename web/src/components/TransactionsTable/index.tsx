import { useEffect } from "react"
import { Container } from "./style"

export const TransactionsTable = () => {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(result => result.json())
            .then(transactons => console.log(transactons))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Desenvolvimento de website</td>
                        <td className="deposit">$1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">$750,00</td>
                        <td>Casa</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>

            </table>
        </Container>        
    ) 
}