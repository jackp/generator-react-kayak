/**
 * satScoreStore
 * EXAMPLE: Average SAT scores by school in NYC
 */

import Reflux from "reflux";
import request from "superagent";
import _ from "lodash";

import exampleActions from "actions/exampleActions";

const satScoreStore = Reflux.createStore({
  // Listen to all uiActions
  listenables: exampleActions,
  apiUrl: "https://data.cityofnewyork.us/api/views/f9bf-2cp4/rows.json",
  onGetSATScores: function() {
    request
    .get(this.apiUrl)
    .end((err, res) => {
      if (err) {
        // TODO: Better error handling pattern
        console.log(err);
      } else {
        this.trigger(this._parseSATData(res.body));
      }
    });
  },
  _parseSATData(responseData) {
    // Let's get that data in a useable form
    let parsedData = [];
    let columns = responseData.meta.view.columns;

    responseData.data.forEach(function(data) {
      var usefulData = {};

      columns.forEach(function(column, index) {
        var formattedColumnName = _.snakeCase(column.name);
        usefulData[formattedColumnName] = data[index];
      });

      parsedData.push(usefulData);
    });

    return parsedData;
  }
});

export default satScoreStore;
