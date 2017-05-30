import dl from 'datalib';

// hmohiv data downloaded from
// http://www.ats.ucla.edu/stat/r/examples/asa/hmohiv.csv
import heatmap_raw from './heatmap.csv';
import hmohiv_raw from './hmohiv.csv';
import iris from './iris.json';
import msft_raw from './msft.csv';
import simpsons_raw from './simpsons.csv';
import simpsons_alternate_raw from './simpsons-alternate.csv';
import stocks_raw from './stocks.csv';
import bigram from './bigram.json';
import goal_raw from './goal.tsv';

function readDSV (raw, type) {
  return dl.read(raw, {
    type,
    parse: 'auto'
  });
}

const readCSV = raw => readDSV(raw, 'csv');
const readTSV = raw => readDSV(raw, 'tsv');

const goal = readTSV(goal_raw);
const heatmap = readCSV(heatmap_raw);
const hmohiv = readCSV(hmohiv_raw);
const msft = readCSV(msft_raw);
const simpsons = readCSV(simpsons_raw);
const simpsons_alternate = readCSV(simpsons_alternate_raw);
const stocks = readCSV(stocks_raw);

export {
  goal,
  heatmap,
  hmohiv,
  iris,
  msft,
  simpsons,
  simpsons_alternate,
  stocks,
  bigram
};
