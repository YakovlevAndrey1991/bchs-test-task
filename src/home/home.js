import React, {Component} from "react";
import BarChart from "../charts/BarChart";
import SelectFrom from "../selects/selectFrom";
import SelectTo from "../selects/selectTo";
import './home.css'


export default class Home extends Component {

    render() {

        const {onChangeSelect, coinName, count, bitcoin, ethereum, result, onInputChange, usd} = this.props

        return (
            <div>
                <header>
                    <div className='selects'>
                        <SelectFrom
                            bitcoin={bitcoin}
                            ethereum={ethereum}
                            usd={usd}
                            onChangeSelect={onChangeSelect}
                        />
                        <SelectTo
                            bitcoin={bitcoin}
                            ethereum={ethereum}
                            usd={usd}
                            onChangeSelect={onChangeSelect}
                        />
                    </div>
                    <div>
                        <input type="number" value={count} onChange={onInputChange}/>
                    </div>
                    <div className='span-result'>
                        <span>{coinName}{result}</span>
                    </div>
                    <p>График изменения курса за последние 14 дней</p>
                    <BarChart/>
                </header>
            </div>
        );
    }

}

