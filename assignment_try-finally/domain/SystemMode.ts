export class SystemMode {
    private static isDebugMode = false;

    static enableDebug(): void {
        this.isDebugMode = true;
    }

    static disableDebug(): void {
        this.isDebugMode = false;
    }

    static get status(): boolean {
        return this.isDebugMode;
    }
}