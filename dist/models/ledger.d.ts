import Registry from "./transaction";
export default class Ledger {
    private readonly id;
    private readonly date;
    private registries;
    private status;
    constructor();
    addRegistry(registry: Registry): void;
    getId(): string;
    getRegistries(): ReadonlyArray<Registry>;
    isValid(): boolean;
    commit(): void;
    fail(): void;
}
//# sourceMappingURL=ledger.d.ts.map