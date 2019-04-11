import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { createRandomData } from '../../utils/data-helpers';

import './graph.scss';

const now = Date.now();

const options = {
  chart: {
    panning: true,
    panKey: 'shift',
    pinchType: 'x',
    zoomType: 'x',
    type: 'line',
    scrollablePlotArea: {
      minWidth: 1500,
    },
    style: {
      color: 'white',
    },
  },
  tooltip: {
    formatter: function() {
      console.log(this)
      return '<b>' + Highcharts.dateFormat('%e - %b - %Y',this.x) + '</b><br>' 
        + 'Vous avez consommé à cette date: ' + this.y + ' watts';
    },
  },
  scrollbar: {
    enabled: false,
  },
  title: {
    text: 'Consommation',
    margin: 60,
    y: 40,
    floating: true,
    align: 'left',
    style: {
      fontSize: '25px',
      color: '#5D98E7',
    },
  },
  subtitle: {
    align: 'left',
    y: 70,
    text: 'Electricité',
    style: {
      fontSize: '25px',
      color: 'white',
    },
  },
  plotOptions: {
    series: {
      color: 'white',
    },
  },
  series: [{
    data: createRandomData(now, 1e7, 3500),
    text: 'watts',
    style: {
      color: 'white',
    },
  }],
  rangeSelector: {
    inputEnabled: false,
    selected: 0,
    labelStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
    style: {
      color: 'white',
      fill: 'blue',
    },
    buttons: [{
      type: 'day',
      count: 1,
      text: '24h',
    },
    {
      type: 'day',
      count: 7,
      text: '7 jours',
    }, {
      type: 'month',
      count: 1,
      text: '31 jours',
    }, {
      type: 'year',
      count: 1,
      text: '12 mois',
    }],
    buttonTheme: {
      fill: '#0042DA',
      width: 70,
      r: 6,
      style: {
        color: '#5D98E7',
      },
      states: {
        select: {
          fill: 'white',
          style: {
            color: 'blue',
          },
        },
      },
    },
  },
  labels: {
    style: {
      fill: 'white',
    },
  },
  yAxis: {
    gridLineWidth: 0,
    title: {
      text: 'Watts',
      style: {
        color: 'white',
      },
    },
    labels: {
      style: {
        color: 'white',
      },
    },
  },
  xAxis: {
    crosshair: true,
    gridLineWidth: 1,
    gridLineColor: '#5D98E7',
    title: {
      text: 'Date',
      style: {
        color: 'white',
      },
    },
    labels: {
      style: {
        color: 'white',
      },
    },
  },
  navigator: {
    enabled: false,
  },
};

const Graph = () => (
  <div id="container">
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  </div>
);

export default Graph;
