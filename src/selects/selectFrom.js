import React from "react";
import './selectFrom.css'

export default function SelectFrom ({bitcoin, ethereum, count, usd1, onChangeSelectFrom}) {
    return (
        <select onChange={onChangeSelectFrom('from')}>
            <option selected={null} value="null">Выберите монету</option>
            <option id='fromBitcoin' value={bitcoin}>Bitcoin (BTC)</option>
            <option id='fromEthereum' value={ethereum}>Ethereum (ETH)</option>
            <option id='fromUsd' value={usd1}>USD ($)</option>
        </select>
    )
}