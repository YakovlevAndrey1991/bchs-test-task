import React, {Component} from "react";
import CoinTable from "./table";
import Chart2 from "../charts/diagramm";
import Pie2 from "../charts/diagramm";

import './case.css'

export default class Case extends Component {

    state = {
        counterBtc: 0,
        counterEth: 0,
        buyCounterBtc: 0,
        buyCounterEth: 0,
        counterSize: 1,

        btcUsd: null,
        ethUsd: null,
        totalUsd: 0,

        dataPie: []

    }

    onBuyBtc = () => {
        this.setState({
            counterBtc: +this.state.counterBtc + (+this.state.buyCounterBtc),
            buyCounterBtc: 0,
        }, this.calcBtc)
    }
    // onBuyEth = () => {
    //     this.setState({
    //         counterEth: +this.state.counterEth + (+this.state.buyCounterEth),
    //         buyCounterEth: 0,
    //     }, this.calcEth)
    // }

    onBuyEth = () => {
        this.setState({
            counterEth: +this.state.counterEth + (+this.state.buyCounterEth),
            buyCounterEth: 0
        }, this.calcEth)
    }

    onSellBtc = () => {
        this.setState({
            counterBtc: Math.max(+this.state.counterBtc - (+this.state.buyCounterBtc),0),
            buyCounterBtc: 0,
        },this.calcBtc)
    }
    onSellEth = () => {
        this.setState({
            counterEth: Math.max(+this.state.counterEth - (+this.state.buyCounterEth),0),
            buyCounterEth: 0
        },this.calcEth)
    }

    setDataPie = () => {
        let dataPie = []
        let x = this.state.btcUsd
        let y = this.state.ethUsd
        dataPie.push(x, y)
        return this.setState({
            dataPie
        })
    }

    calcTotal = () => {
        let number = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(+this.state.btcUsd + (+this.state.ethUsd))
        this.setState({
            totalUsd: number
        },
            this.setDataPie
        )
    }

    calcBtc = () => {
        this.setState({
            btcUsd: (+this.props.bitcoin * (+this.state.counterBtc)).toFixed(2)
        }, this.calcTotal)
    }
    calcEth = () => {
        this.setState({
            ethUsd: (+this.props.ethereum * (+this.state.counterEth)).toFixed(2)
        }, this.calcTotal)
    }

    onPlus = (id) => {
        switch (id) {
            case 'btc':
                this.setState({
                    counterBtc: +this.state.counterBtc + (+this.state.counterSize)
                }, this.calcBtc)
                break
            case 'eth':
                this.setState({
                    counterEth: +this.state.counterEth + (+this.state.counterSize)
                }, this.calcEth)

                break
            case 'usd':
                this.setState({
                    counterUsd: +this.state.counterUsd + (+this.state.counterSize)
                })

                break
        }
    }

    onMinus = (id) => {
        switch (id) {
            case 'btc':

                this.setState({
                    counterBtc: Math.max(+this.state.counterBtc - (+this.state.counterSize),0)
                }, this.calcBtc)

                break
            case 'eth':
                this.setState({
                    counterEth: Math.max(+this.state.counterEth - (+this.state.counterSize),0)
                }, this.calcEth)

                break
            case 'usd':
                this.setState({
                    counterUsd: Math.max(+this.state.counterUsd - (+this.state.counterSize),0)
                })
                break
        }
    }

    onChangeSize = (e) => {
        this.setState({
            counterSize: e.target.value
        })
    }

    onInputChange = (id) => (e) => {
        switch (id) {
            case 'btc':
                this.setState({
                    buyCounterBtc: e.target.value
                })
                break
            case 'eth':
                this.setState({
                    buyCounterEth: e.target.value
                })
        }
    }



    render() {

        const {bitcoin, ethereum} = this.props


        return (
            <div className='coin-table'>
                <CoinTable
                    bitcoin={bitcoin}
                    ethereum={ethereum}
                    counterBtc={this.state.counterBtc}

                    onBuyBtc={this.onBuyBtc}
                    onBuyEth={this.onBuyEth}

                    onSellBtc={this.onSellBtc}
                    onSellEth={this.onSellEth}

                    onInputChange={this.onInputChange}
                    onChangeSize={this.onChangeSize}
                    onPlus={this.onPlus}
                    onMinus={this.onMinus}
                    counterEth={this.state.counterEth}

                    counterUsd={this.state.counterUsd}
                    btcUsd={this.state.btcUsd}
                    ethUsd={this.state.ethUsd}
                    totalUsd={this.state.totalUsd}
                />
                <div className='pie'>
                    <Pie2 dataCoins={this.state.dataPie}/>
                </div>
            </div>

        )
    }
}