import { DataRecord } from "../models/DataRecord";

export interface Exporter {
    export(records: DataRecord[], filePath: string): void;
}