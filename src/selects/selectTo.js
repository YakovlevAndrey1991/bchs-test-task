import React from "react";

export default function SelectTo ({bitcoin, ethereum, usd, onChangeSelect}) {
    return (
        <select onChange={onChangeSelect('to')}>
            <option selected={null} value="null">Выберите монету</option>
            <option id='Bitcoin' value={bitcoin}>Bitcoin (BTC)</option>
            <option id='ToEthereum' value={ethereum}>Ethereum (ETH)</option>
            <option id='ToUsd' value={usd}>USD ($)</option>
        </select>
    )
}