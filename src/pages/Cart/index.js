import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import tenis from '../../assets/images/tenis.jpg';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={tenis} alt="Tênis" />
            </td>

            <td>
              <strong>Tênis dahora</strong>
              <span>R$ 99,90</span>
            </td>

            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>

                <input type="number" readOnly value={2} />

                <button>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$199,80</strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#f0134d" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
