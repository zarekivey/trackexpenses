const moment = require.requireActual('moment');

export default (timestamp = 0) => { //  this forces moment to start at a specific point in time if no time is provided
    return moment(timestamp);
};