import React from "react";
import './selectFrom.css'

export default function SelectFrom ({bitcoin, ethereum, usd, onChangeSelect}) {
    return (
        <select onChange={onChangeSelect('from')}>
            <option selected={null} value="null">Выберите монету</option>
            <option id='fromBitcoin' value={bitcoin}>Bitcoin (BTC)</option>
            <option id='fromEthereum' value={ethereum}>Ethereum (ETH)</option>
            <option id='fromUsd' value={usd}>USD ($)</option>
        </select>
    )
}