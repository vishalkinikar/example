import {round, getTime, formatTicks} from '../Helper';

const socket = new WebSocket('ws://stocks.hulqmedia.com');

socket.onerror = (error) => {
    console.error('WebSocket Error: ' + error);
};

socket.onopen = (data) => {
    console.log('WebSocket is open')
};

const finalData = {};

const formatTicker = cb => {

    socket.onmessage = (data) => {

        let tickers = JSON.parse(data.data);

        tickers.forEach(tick => {
            if(typeof finalData[tick[0]] === "undefined") {
                finalData[tick[0]] = [ round(tick[1]), 0, getTime() ];
            } else {
                finalData[tick[0]] = formatTicks( round(tick[1]), finalData[tick[0]][0] );
            }
        });

        if(typeof cb === 'function') {
            cb( finalData );
        } else {
            return finalData;
        }
        
    };
};

export default formatTicker;