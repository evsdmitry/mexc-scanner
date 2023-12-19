import React, {useEffect, useRef} from 'react';
import classes from './styles/Chart.module.scss'
import {ColorType, createChart} from 'lightweight-charts';


export const Chart = () => {

    useEffect(() => {
        const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };
        const chart = createChart('cs1', { layout: { textColor: 'gray', background: { type: ColorType.Solid, color: 'white'} } });
        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a62c', downColor: '#ef5350', borderVisible: true,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
        candlestickSeries.priceScale().applyOptions({
            scaleMargins: {
                top: 0.15, // highest point of the series will be 70% away from the top
                bottom: 0.25,
            },
        });


        const volumeSeries = chart.addHistogramSeries({
            color: '#26a62c85',
            priceFormat: {
                type: 'volume',
            },
            priceScaleId: '',
            // scaleMargins: {
            //     top: 0.7,
            //     bottom: 0,
            // },
        });
        volumeSeries.priceScale().applyOptions({
            scaleMargins: {
                top: 0.85, // highest point of the series will be 70% away from the top
                bottom: 0,
            },
        });

        candlestickSeries.setData([
            { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
            { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
            { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
            { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
            { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
            { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
            { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
            { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
            { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
            { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
        ]);

        volumeSeries.setData([
            { time: '2018-12-22', value: 1412, color: '#26a62c85' },
            { time: '2018-12-23', value: 3512, color: '#ef535085' },
            { time: '2018-12-24', value: 1333, color: '#26a62c85' },
            { time: '2018-12-25', value: 2112, color: '#26a62c85' },
            { time: '2018-12-26', value: 1112, color: '#26a62c85' },
            { time: '2018-12-27', value: 3843, color: '#ef535085'},
            { time: '2018-12-28', value: 5123, color: '#ef535085' },
            { time: '2018-12-29', value: 141, color: '#26a62c85' },
            { time: '2018-12-30', value: 1323, color: '#26a62c85' },
            { time: '2018-12-31', value: 2631, color: '#ef535085' },
        ]);

        const symbolName = 'ETC USD 7D VWAP';

        // const legend = React.createElement('div', {className: 'legend'});
        // legend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;
        // container.appendChild(legend);
        //
        // const firstRow = document.createElement('div');
        // firstRow.innerHTML = symbolName;
        // firstRow.style.color = 'black';
        // legend.appendChild(firstRow);
        //
        // chart.subscribeCrosshairMove(param => {
        //     let priceFormatted = '';
        //     if (param.time) {
        //         const data = param.seriesData.get(areaSeries);
        //         const price = data.value !== undefined ? data.value : data.close;
        //         priceFormatted = price.toFixed(2);
        //     }
        //     firstRow.innerHTML = `${symbolName} <strong>${priceFormatted}</strong>`;
        // });

        chart.timeScale().fitContent();

    },[])


    return (
        <div id='cs1' className={classes.wrapper}>
        </div>
    );
};
