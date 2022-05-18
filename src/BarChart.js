import React, {Component} from "react";
import {Chart, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js';
import {Line} from "react-chartjs-2";
import Chart1 from "./charts/chart";
import GetData from "./getData/getData";
import {getRelativePosition} from 'chart.js/helpers';


export default class BarChart extends Component {


    constructor() {
        super();
        this.bitcoinLine()
        this.ethereumLine()
    }

    state = {
        dateBitcoin: [],
        dateEthereum: [],
        pricesEthereum: null,
        pricesBitcoin: null
    }

    getData = async (url) => {
        const result = await fetch(url)

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json()
    }

    bitcoinLine = () => this.getData('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily')
        .then(data => {
            let date = data.prices.map((item) => item[0]).map(item => new Date(item).toLocaleDateString('en-US'))
            let prices = data.prices.map((item) => item[1])
            this.setState({
                dateBitcoin: date,
                pricesBitcoin: prices
            })
        })

    ethereumLine = () => this.getData('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=14&interval=daily')
        .then(data => {
            let date = data.prices.map((item) => item[0]).map(item => new Date(item).toLocaleDateString('en-US'))
            let prices = data.prices.map((item) => item[1])
            this.setState({
                dateEthereum: date,
                pricesEthereum: prices
            })
        })


    render() {
        return (
            <>
                <p>Bitcoin</p>
                <Chart1 date={this.state.dateBitcoin}
                        prices={this.state.pricesBitcoin}
                />
                <p>Ethereum</p>
                <Chart1 date={this.state.dateEthereum}
                        prices={this.state.pricesEthereum}
                />
            </>
        )

    }
}