import React from "react";

export default function SelectTo ({bitcoin, ethereum,usd1, count, onChangeSelectTo}) {
    return (
        <select onChange={onChangeSelectTo('to')}>
            <option selected={null} value="null">Выберите монету</option>
            <option id='ToBitcoin' value={bitcoin}>Bitcoin (BTC)</option>
            <option id='ToEthereum' value={ethereum}>Ethereum (ETH)</option>
            <option id='ToUsd' value={usd1}>USD ($)</option>
        </select>
    )
}