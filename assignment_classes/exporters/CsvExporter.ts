import { Exporter } from "./Exporter";
import { DataRecord } from "../models/DataRecord";
import * as fs from "fs";

export class CsvExporter implements Exporter {

    export(records: DataRecord[], filePath: string): void {

        const headerLine =
            "ID,NAME,VALUE,DATE,DOUBLED_VALUE,SQUARED_VALUE";

        const dataLines = records.map((record) => {
            return [
                record.id,
                record.name,
                record.value,
                record.date ?? "",
                record.doubledValue ?? "",
                record.squaredValue ?? ""
            ].join(",");
        });

        const csvContent = [headerLine, ...dataLines].join("\n");

        fs.writeFileSync(filePath, csvContent);
    }
}