import { DataRecord } from "../models/DataRecord";

export class RecordValidator {

    validate(records: DataRecord[]): DataRecord[] {
        return records.filter(record =>
            record.id &&
            record.name &&
            !isNaN(record.value)
        );
    }
}