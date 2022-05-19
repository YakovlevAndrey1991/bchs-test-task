import React, {Component} from "react";
import BarChart from "../charts/BarChart";
import SelectFrom from "../selects/selectFrom";
import SelectTo from "../selects/selectTo";
import './home.css'


export default class Home extends Component {

    render() {

        const {count, bitcoin, ethereum, result, onChangeSelectFrom, onChangeSelectTo, onInputChange, usd1} = this.props

        return (
            <div>
                <header>
                    <div className='selects'>
                        <SelectFrom
                            bitcoin={bitcoin}
                            ethereum={ethereum}
                            count={count}
                            usd1={usd1}
                            onChangeSelectFrom={onChangeSelectFrom}
                        />

                        <SelectTo
                            bitcoin={bitcoin}
                            ethereum={ethereum}
                            count={count}
                            usd1={usd1}
                            onChangeSelectTo={onChangeSelectTo}
                        />
                    </div>
                    <div>
                        <input type="number" value={count} onChange={onInputChange}/>
                    </div>
                    <div className='span-result'>
                        <span>{result}</span>
                    </div>
                    <p>График изменения курса за последние 14 дней</p>
                        <BarChart/>
                </header>
            </div>

        );
    }

}

