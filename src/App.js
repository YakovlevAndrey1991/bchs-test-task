import React, {Component} from "react";
import './App.css';
import Case from "./case/case";
import Home from "./home/home";

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default class App extends Component {

    constructor() {
        super();
        this.updateBitcoin()
        this.updateEthereum()
    }

    state = {
        bitcoin: null,
        ethereum: null,
        from: null,
        to: null,
        result: null,
        count: 1,
        usd1: 1
    }

    getData = async (url) => {
        const result = await fetch(url)

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json()
    }

    updateBitcoin = () => {
        this.getData('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then((data) => {
                this.setState({
                    bitcoin: data.bitcoin.usd
                })
            })
    }

    updateEthereum = () => {
        this.getData('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
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
        } else {
            return
        }
    }

    onChangeSelectFrom = (id) => (e) => {

        if (id === 'from') {
            this.setState({
                from: e.target.value
            }, this.calcResult)
        }
    }

    onChangeSelectTo = (id) => (e) => {
        if (id === 'to') {
            this.setState({
                to: e.target.value
            }, this.calcResult)
        }

    }

    onInputChange = (e) => {
        this.setState({
            count: e.target.value,
        }, this.calcResult)
    }

    render() {

        const {count, bitcoin, ethereum, result, usd1} = this.state

        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>Калькулятор и конвертер криптовалют</h1>
                        <div className='links'>
                            <Link className='link' to='/'>Калькулятор</Link>
                            <Link className='link' to='/case'>Портфель</Link>
                        </div>

                        <Routes>
                           <Route path={'/'} element={
                               <Home
                                   bitcoin={bitcoin}
                                   ethereum={ethereum}
                                   count={count}
                                   onChangeSelectFrom={this.onChangeSelectFrom}
                                   onChangeSelectTo={this.onChangeSelectTo}
                                   onInputChange={this.onInputChange}
                                   result={result}
                                   usd1={usd1}
                               />
                           }/>
                        </Routes>
                        <Routes>
                            <Route path='/case' element={<Case bitcoin={bitcoin}
                                                               ethereum={ethereum}
                                                               count={count}/>}/>
                        </Routes>

                    </header>
                </div>
            </BrowserRouter>


        );
    }

}

