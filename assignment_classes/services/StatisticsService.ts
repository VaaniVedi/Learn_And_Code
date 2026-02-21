import { DataRecord } from "../models/DataRecord";

export class StatisticsService {

    calculate(records: DataRecord[]) {

        const totalValue = records.reduce(
            (sum, record) => sum + record.value,
            0
        );

        const totalRecords = records.length;

        const averageValue =
            totalRecords > 0 ? totalValue / totalRecords : 0;

        return {
            totalRecords,
            totalValue,
            averageValue
        };
    }
}   