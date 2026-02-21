import { Exporter } from "./Exporter";
import { DataRecord } from "../models/DataRecord";
import * as fs from "fs";

export class JsonExporter implements Exporter {

    export(records: DataRecord[], filePath: string): void {
        fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
    }
}