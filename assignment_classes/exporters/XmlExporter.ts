import { Exporter } from "./Exporter";
import { DataRecord } from "../models/DataRecord";
import * as fs from "fs";

export class XmlExporter implements Exporter {

  export(records: DataRecord[], filePath: string): void {

    const recordXml = records.map((record) => {
      return `
  <record>
    <id>${record.id}</id>
    <name>${record.name}</name>
    <value>${record.value}</value>
    <date>${record.date ?? ""}</date>
    <doubledValue>${record.doubledValue ?? ""}</doubledValue>
    <squaredValue>${record.squaredValue ?? ""}</squaredValue>
  </record>`;
    }).join("");

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<records>
${recordXml}
</records>`;

    fs.writeFileSync(filePath, xmlContent);
  }
}

