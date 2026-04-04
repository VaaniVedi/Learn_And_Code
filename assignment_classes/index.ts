import { CsvParser } from "./parsers/CsvParser";
import { RecordValidator } from "./validators/RecordValidator";
import { RecordTransformer } from "./transformers/RecordTransformer";
import { StatisticsService } from "./services/StatisticsService";
import { DataProcessor } from "./services/DataProcessor";
import { JsonExporter } from "./exporters/JsonExporter";
import { XmlExporter } from "./exporters/XmlExporter";

const processor = new DataProcessor(
    new CsvParser(),
    new RecordValidator(),
    new RecordTransformer(),
    new StatisticsService()
);

const result = processor.process("input.csv");

console.log(result.stats);

processor.export(result.records, new JsonExporter(), "output.json");
processor.export(result.records, new XmlExporter(), "output.xml");