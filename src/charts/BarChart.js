import React, {Component} from "react";
import Chart1 from "./chart";
import GetData from "../services/getData";
import {reformDate, unboxPrice} from "../services/utilites";

import './barChart.css'

export default class BarChart extends Component {

    getData = new GetData()

    state = {
        dateBitcoin: [],
        dateEthereum: [],
        pricesEthereum: null,
        pricesBitcoin: null
    }

    componentDidMount() {
        this.bitcoinLine()
        this.ethereumLine()
    }


    bitcoinLine = () => this.getData.getCoinHistory('bitcoin')
        .then(data => {
            this.setState({
                dateBitcoin: reformDate(data),
                pricesBitcoin: unboxPrice(data)
            })
        })

    ethereumLine = () => this.getData.getCoinHistory('ethereum')
        .then(data => {
            this.setState({
                dateEthereum: reformDate(data),
                pricesEthereum: unboxPrice(data)
            })
        })

    render() {
        return (
            <>
                <div>
                    <p>Bitcoin</p>
                    <Chart1 date={this.state.dateBitcoin}
                            prices={this.state.pricesBitcoin}
                    />
                </div>
                <div>
                    <p>Ethereum</p>
                    <Chart1 date={this.state.dateEthereum}
                            prices={this.state.pricesEthereum}
                    />
                </div>

            </>
        )

    }
}
