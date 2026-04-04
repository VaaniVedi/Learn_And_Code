import { DataRecord } from "../models/DataRecord";

export class RecordTransformer {

    constructor(private outputDateFormat: string = "yyyy-MM-dd") {}

    transform(records: DataRecord[]): DataRecord[] {

        return records.map((record) => {

            const formattedDate =
                record.date
                    ? new Date(record.date).toISOString()
                    : undefined;

            return {
                ...record,
                name: record.name.toUpperCase(),
                doubledValue: record.value * 2,
                squaredValue: record.value * record.value,
                date: formattedDate
            };
        });
    }
}