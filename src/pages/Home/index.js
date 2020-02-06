import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import tenis from '../../assets/images/tenis.jpg';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img src={tenis} alt="Tênis" />
        <strong>Tênis dahora</strong>
        <span>R$ 89,00</span>

        <button>
          <div>
            <MdAddShoppingCart />3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
