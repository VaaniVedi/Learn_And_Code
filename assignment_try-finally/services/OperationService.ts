export class OperationService {
    execute(): void {
        console.log("Running operation in debug mode");
        throw new Error("Operation failed");
    }
}