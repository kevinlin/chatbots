'use strict';
const simplesky = require('simplesky');
const API_KEY_GOOGLE_MAPS = 'AIzaSyC_ySMWxj-TIVrmxqunkDPicpQVY3celAQ';
const API_KEY_DARK_SKY = '3ccf2714be72f991c9a36d67809f32eb';
var dkWeather = new simplesky(API_KEY_GOOGLE_MAPS, API_KEY_DARK_SKY, "en", "si");

let getDate = day => {
    let dayStr = day.toLowerCase().trim();
    switch (dayStr) {
        case 'tomorrow':
            return '+1d';
        case 'day after tomorrow':
            return '+2d';
        default:
            return '+0d';
    }
};

let weather = (location, type = 'forecast', day = "today") => {
    if ('forecast' === type) {
        return dkWeather.getTimeMachine(location, getDate(day), null, null, ['currently', 'hourly', 'flags'])
    } else {
        return dkWeather.getCurrently(location);
    }
};

module.exports = weather;
