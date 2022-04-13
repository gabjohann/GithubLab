import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, []);


  return(
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
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>19/04/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$120,00</td>
            <td>Desenvolvimento</td>
            <td>19/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};