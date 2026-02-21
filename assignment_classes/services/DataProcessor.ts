import * as fs from "fs";
import { CsvParser } from "../parsers/CsvParser";
import { RecordValidator } from "../validators/RecordValidator";
import { RecordTransformer } from "../transformers/RecordTransformer";
import { StatisticsService } from "./StatisticsService";
import { Exporter } from "../exporters/Exporter";

export class DataProcessor {

    constructor(
        private parser: CsvParser,
        private validator: RecordValidator,
        private transformer: RecordTransformer,
        private statisticsService: StatisticsService
    ) {}

    process(inputPath: string) {

        const lines = fs.readFileSync(inputPath, "utf-8").split("\n");

        let records = this.parser.parse(lines);
        records = this.validator.validate(records);
        records = this.transformer.transform(records);

        const stats = this.statisticsService.calculate(records);

        return { records, stats };
    }

    export(records: any[], exporter: Exporter, path: string) {
        exporter.export(records, path);
    }
}