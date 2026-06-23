"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferOperationError = void 0;
class TransferOperationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "TransferOperationError";
        this.field = field;
    }
}
exports.TransferOperationError = TransferOperationError;
//# sourceMappingURL=transfer-operation.error.js.map