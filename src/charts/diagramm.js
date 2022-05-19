import React, {Component} from "react";
import {Chart, ArcElement, PieController} from "chart.js";
import {Pie} from "react-chartjs-2";

Chart.register(
    ArcElement,
    PieController
)

export default class Pie2 extends Component {

    render() {

        const {dataCoins} = this.props

        const data = {
            labels: [
                'Bitcoin',
                'Ethereum',
            ],
            options: {
                title: {
                    display: true,
                    text: 'check'
                }
            },

            datasets: [{
                label: 'This Label is not working, Idk why',
                data: dataCoins

                ,
                backgroundColor: [
                    '#b8860b',
                    'grey',

                ],
                hoverOffset: 2
            }]
        };

        return (
            <div>
                <p>Диаграмма распределение валют</p>
                <Pie data={data}/>
            </div>
        )


    }
}
