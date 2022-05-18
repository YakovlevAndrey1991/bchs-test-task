import React, {Component, useState} from "react";
import './App.css';
import BarChart from "./BarChart";
import GetData from "./getData/getData";


function App2() {

    const getData = async (url) => {
        const result = await fetch(url, {mode: "no-cors"})

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json()
    }

    // const getData = new GetData()

    const [bitcoin, setBitcoin] = useState(0)
    const [ethereum, setEthereum] = useState(0)
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(0)
    const [result, setResult] = useState(0)
    const [count, setCount] = useState(0)

    const updateBitcoin = () => {
        getData('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then((data) => {
                setBitcoin(+(data.bitcoin.usd))
            })
    }
    updateBitcoin()

    const updateEthereum = () => {
        getData('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then((data) => {
                setEthereum(+(data.ethereum.usd))
            })
    }

    // updateEthereum()

    const calcResult = () => {
        let newResult = ((+count * (+from)) / +to).toFixed(8)
        setResult(+newResult)
    }

    const onChangeSelectFrom = (id) => (e) => {

        if (id === 'from') {
            setFrom(+e.target.value)

        }
        // calcResult()
    }

    const onChangeSelectTo = (id) => (e) => {
        if (id === 'to') {
            setTo(+e.target.value)

        }
        // calcResult()

    }

    const onInputChange = (e) => {
        setCount(+e.target.value)
        calcResult()
    }

    return (

        <div className="App">
            <header className="App-header">
                <p>Биткоин: {bitcoin}</p>
                <p>Езериум: {ethereum}</p>

                <select onChange={onChangeSelectFrom('from')}>
                    <option selected={null} value="null">Выберите монету</option>
                    <option id='fromBitcoin' value={bitcoin}>BTC</option>
                    <option id='fromEthereum' value={ethereum}>ETH</option>
                    <option id='fromUsd' value={count}>USD</option>
                </select>

                <select onChange={onChangeSelectTo('to')}>
                    <option selected={null} value="null">Выберите монету</option>
                    <option id='ToBitcoin' value={bitcoin}>BTC</option>
                    <option id='ToEthereum' value={ethereum}>ETH</option>
                    <option id='ToUsd' value={count}>USD</option>
                </select>

                <input type="number" value={count} onChange={onInputChange}/>

                <span>{result}</span>
                {/*<BarChart/>*/}
            </header>
        </div>
    );
}


export default App2;
