import React, {Component} from "react";
import CoinTable from "./table";
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
            default:
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
            default:
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
                break
            default:
        }
    }



    render() {

        const { bitcoin, ethereum } = this.props
        const { counterBtc, counterEth, btcUsd, ethUsd, dataPie , totalUsd, counterUsd } = this.state

        return (
            <div className='coin-table'>
                <CoinTable
                    bitcoin={bitcoin}
                    ethereum={ethereum}

                    counterBtc={counterBtc}
                    counterEth={counterEth}
                    counterUsd={counterUsd}

                    btcUsd={btcUsd}
                    ethUsd={ethUsd}

                    totalUsd={totalUsd}

                    onPlus={this.onPlus}
                    onMinus={this.onMinus}

                    onBuyBtc={this.onBuyBtc}
                    onBuyEth={this.onBuyEth}

                    onSellBtc={this.onSellBtc}
                    onSellEth={this.onSellEth}

                    onInputChange={this.onInputChange}
                    onChangeSize={this.onChangeSize}
                />
                <div className='pie'>
                    <Pie2 dataCoins={dataPie}/>
                </div>
            </div>

        )
    }
}