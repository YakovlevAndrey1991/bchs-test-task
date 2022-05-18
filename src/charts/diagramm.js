import React, {Component} from "react";
import {Chart, ArcElement, PieDataPoint, PieController} from "chart.js";
import {Pie, Doughnut} from "react-chartjs-2";

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
                label: 'My First Dataset',
                data: dataCoins

                ,
                backgroundColor: [
                    '#b8860b',
                    'grey',

                ],
                hoverOffset: 2
            }]
        };


        // const options = {
        //     title: {
        //         display: true,
        //         text: "COVID-19 Cases of Last 3 Months",
        //         fontSize: 1445,
        //         color: '#333'
        //     },
        //     legend: {
        //         display: true, //Is the legend shown?
        //         position: "bot" //Position of the legend.
        //     }
        // };

        return (
            <div>
                <p>Диаграмма распределение валют</p>

                <Pie
                    data={data}
                    width={200}
                    height={100}
                />

            </div>
        )


    }
}
