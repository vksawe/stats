"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
var readData = new MatchReader_1.MatchReader(reader);
readData.load();
var summary = Summary_1.Summary.winsAnalysiswithHtmlReport("Man United");
summary.buildAndPrintReport(readData.matches);
