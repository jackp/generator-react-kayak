/**
 * ExampleView
 * Makes an API call out to a public Data.gov endpoint,
 * and displays SAT scores for NYC schools
 */

import React from "react";
import Reflux from "reflux";
import { Table, Column } from "fixed-data-table";

import View from "components/View";
import satScoreStore from "stores/exampleSatScoreStore";

require("fixed-data-table/dist/fixed-data-table.css");

const ExampleView = React.createClass({
  mixins: [Reflux.connect(satScoreStore, "satScores")],
  getInitialState() {
    return {
      satScores: []
    };
  },
  _rowGetter(index) {
    return this.state.satScores[index];
  },
  render() {
    return (
      <View title="Example: API Call" name="example">
        <Table
          rowHeight={50}
          headerHeight={50}
          rowGetter={this._rowGetter}
          rowsCount={this.state.satScores.length}
          width={1200}
          height={600}>
          <Column
            dataKey="school_name"
            label="School Name"
            width={400}
          />
          <Column
            dataKey="num_of_sat_test_takers"
            label="# SAT Test Takers"
            width={200}
          />
          <Column
            dataKey="sat_critical_reading_avg_score"
            label="Average Critical Reading Score"
            width={200}
          />
          <Column
            dataKey="sat_math_avg_score"
            label="Average Math Score"
            width={200}
          />
          <Column
            dataKey="sat_writing_avg_score"
            label="Average Writing Score"
            width={200}
          />
        </Table>
      </View>
    );
  }
});

export default ExampleView;
