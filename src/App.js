import React, {Component} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import GetData from "./services/getData";
import Case from "./case/case";
import Home from "./home/home";

import './App.css';

export default class App extends Component {

    getData = new GetData()

    state = {
        bitcoin: null,
        ethereum: null,
        from: null,
        to: null,
        result: null,
        count: 1,
        usd: 1,
        coinName: ''
    }

    componentDidMount() {
        this.getBitcoinPrice()
        this.getEthereumPrice()
    }

    getBitcoinPrice = () => {
        this.getData.getPrice('bitcoin')
            .then((data) => {
                this.setState({
                    bitcoin: data.bitcoin.usd
                })
            })
    }

    getEthereumPrice = () => {
        this.getData.getPrice('ethereum')
            .then((data) => {
                this.setState({
                    ethereum: data.ethereum.usd
                })
            })
    }

    calcResult = () => {
        if (this.state.to !== null && this.state.from !== null) {
            let newResult = ((+this.state.count * (+this.state.from)) / +this.state.to).toFixed(4)
            this.setState({
                result: newResult
            })
        }
    }

    onChangeSelect = (id) => (e) => {
        switch (id) {
            case 'from':
                this.setState({
                    from: e.target.value
                }, this.calcResult)
                break
            case 'to':
                this.setState({
                    to: e.target.value
                }, this.calcResult)
                break
            default:
        }
    }

    onInputChange = (e) => {
        this.setState({
            count: e.target.value,
        }, this.calcResult)
    }

    render() {

        const {count, bitcoin, ethereum, result, usd, coinName} = this.state

        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>Калькулятор и конвертер криптовалют</h1>
                        <div className='links'>
                            <Link className='link' to="/">Калькулятор</Link>
                            <Link className='link' to="/case">Портфель</Link>
                        </div>

                        <Routes>
                            <Route path="/" element={
                                <Home
                                    onChangeSelect={this.onChangeSelect}
                                    coinName={coinName}
                                    bitcoin={bitcoin}
                                    ethereum={ethereum}
                                    count={count}
                                    onInputChange={this.onInputChange}
                                    result={result}
                                    usd={usd}
                                />
                            }/>

                            <Route path="/case" element={<Case bitcoin={bitcoin}
                                                               ethereum={ethereum}
                                                               count={count}/>}/>
                        </Routes>
                    </header>
                </div>
            </BrowserRouter>
        );
    }
}

