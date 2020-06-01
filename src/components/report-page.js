import React from 'react';
import Chart from 'chart.js';

export default class ReportPage extends React.Component {
    chartRef = React.createRef();

    constructor() {
        super();

        this.state = {
            transactions: []
        };
    }

    componentDidMount() {
        fetch('/transactions').then(resp => {
            return resp.json();
        }).then(body => {
            this.setState({
                transactions: body
            })
        })
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: 'doughnut',
            data: this.outflowPerCategory(this.state.transactions),
            options: {}
        });
    }

    outflowPerCategory(transactions) {
        var data = {
            datasets: {
                data: []
            },
            labels: []
        }

        var categorySpent = {}
        for (var transaction of transactions) {
            if (transaction.spent == true) {
                if (transaction.category in categorySpent) {
                    categorySpent[transaction.category] += transaction.amount
                } else {
                    categorySpent[transaction.category] = transaction.amount
                }
            }
        }

        for (var categ in categorySpent) {
            data.datasets.data.push(categorySpent[categ])
            data.labels.push(categ)
        }

        return data
    }

    render () {
        return (
            <div>
                <canvas id="myChart" ref={this.chartRef}></canvas>
            </div>
        )
    }
}