import { SystemMode } from "./domain/SystemMode";
import { OperationService } from "./services/OperationService";

function runCriticalOperation(): void {
    const service = new OperationService();

    SystemMode.enableDebug();

    try {
        service.execute();
    } finally {
        SystemMode.disableDebug();
    }
}

runCriticalOperation();