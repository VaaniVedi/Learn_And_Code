import { Exporter } from "./Exporter";
import { DataRecord } from "../models/DataRecord";
import * as fs from "fs";

export class XmlExporter implements Exporter {

  export(records: DataRecord[], filePath: string): void {

    const xml = `
<records>
${records.map(record => `
  <record>
    <id>${record.id}</id>
    <name>${record.name}</name>
    <value>${record.value}</value>
  </record>
`).join("")}
</records>
`;

    fs.writeFileSync(filePath, xml);
  }
}
