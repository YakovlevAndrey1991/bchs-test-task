import React, {Component} from "react";
import {Chart, LineElement, BarElement, CategoryScale, LinearScale, PointElement, ArcElement} from 'chart.js';
import {Line, Pie} from "react-chartjs-2";
import {getRelativePosition} from 'chart.js/helpers';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement
)

export default class Chart1 extends Component {

    render() {

        const data = {
            labels: this.props.date,
            datasets: [{
                label: '# of Votes',
                data: this.props.prices,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
        const options = {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            legend: {
                labels: {
                    fontSize: 35
                }
            }

        }
        return (
            <div>
                <Line
                    data={data}
                    height={200}
                    width={600}
                    options={options}
                />
            </div>
        )
    }

}