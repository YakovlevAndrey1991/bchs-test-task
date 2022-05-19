import React from "react";
import {Table} from "react-bootstrap";
import './table.css'


export default function CoinTable(
    {
        bitcoin,
        ethereum,
        counterBtc,
        counterEth,
        onChangeSize,
        onBuyBtc,
        onBuyEth,
        onSellBtc,
        onSellEth,
        onPlus,
        onInputChange,
        onMinus,
        btcUsd,
        ethUsd,
        totalUsd
    }) {

    return (

        <>
            <p>Ваш криптовалютный портфель</p>
            <Table border="1">
                <thead>
                <tr>
                    <th>Валюта</th>
                    <th>Цена, $</th>
                    <th>У вас в портфеле:
                        <div className='select-size'>
                            <span>изменять значение на: </span>
                            <select className='span1' onChange={onChangeSize}>
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="100">100</option>
                            </select>
                        </div></th>
                    <th>
                        Покупка
                    </th>
                    <th>
                        Продажа
                    </th>
                    <th>Стоимость ($):</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Bitcoin (BTC)
                        <div className='btc-div'></div>
                    </td>
                    <td>
                        {bitcoin}
                    </td>
                    <td>
                        <button onClick={() => onMinus('btc')}>-</button>
                        <span>{counterBtc}</span>
                        <button onClick={() => onPlus('btc')}>+</button>
                    </td>
                    <th>
                        <button onClick={onBuyBtc}>Купить</button>
                        <input className='input' onChange={onInputChange('btc')} type="number" id='btc' placeholder="Введите число"/>
                    </th>
                    <th>
                        <button onClick={onSellBtc}>Продать</button>
                        <input className='input' onChange={onInputChange('btc')} type="number" id='btc' placeholder="Введите число"/>
                    </th>
                    <th>{btcUsd}</th>
                </tr>
                <tr>
                    <td>Ethereum (ETH)
                        <div className='eth-div'></div></td>
                    <td>{ethereum}</td>
                    <td>
                        <button onClick={() => onMinus('eth')}>-</button>
                        <span>{counterEth}</span>
                        <button onClick={() => onPlus('eth')}>+</button>
                    </td>
                    <th>
                        <button onClick={onBuyEth}>Купить</button>
                        <input className='input' onChange={onInputChange('eth')} type="number" id='eth' placeholder="Введите число"/>
                    </th>
                    <th>
                        <button onClick={onSellEth}>Продать</button>
                        <input className='input' onChange={onInputChange('eth')} type="number" id='btc' placeholder="Введите число"/>
                    </th>
                    <th>{ethUsd}</th>
                </tr>

                <tr>
                    <td colSpan={1}>
                        Текущая стоимость портфеля ($):
                    </td>
                    <td colSpan={5}>{totalUsd}</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}