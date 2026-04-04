import { DataRecord } from "../models/DataRecord";

export class CsvParser {

    parse(lines: string[]): DataRecord[] {
        const records: DataRecord[] = [];

        for (const line of lines) {
            if (!line.trim()) continue;

            const parts = line.split(",");

            if (parts.length < 3) continue;

            records.push({
                id: parts[0].trim(),
                name: parts[1].trim(),
                value: Number(parts[2]),
                date: parts[3]?.trim()
            });
        }

        return records;
    }
}