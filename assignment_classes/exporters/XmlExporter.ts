import { Exporter } from "./Exporter";
import { DataRecord } from "../models/DataRecord";
import * as fs from "fs";

export class XmlExporter implements Exporter {

    export(records: DataRecord[], filePath: string): void {

        const xml = `
<records>
${records.map(r => `
  <record>
    <id>${r.id}</id>
    <name>${r.name}</name>
    <value>${r.value}</value>
  </record>
`).join("")}
</records>
`;

        fs.writeFileSync(filePath, xml);
    }
}