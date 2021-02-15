import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
const reader = new CsvFileReader("football.csv");
const readData = new MatchReader(reader);
readData.load();

const summary = Summary.winsAnalysiswithHtmlReport("Man United");

summary.buildAndPrintReport(readData.matches);
