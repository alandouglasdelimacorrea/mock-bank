"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalLogger = void 0;
class TerminalLogger {
    log(message, status = 'INFO') {
        switch (status) {
            case 'SUCCESS':
                console.log(`\x1b[32m✅ SUCCESS: ${message}\x1b[0m`);
                break;
            case 'ERROR':
                console.log(`\x1b[31m❌ ERROR: ${message}\x1b[0m`);
                break;
            case 'INFO':
            default:
                console.log(`\x1b[36mℹ️ INFO: ${message}\x1b[0m`);
                break;
        }
    }
}
exports.TerminalLogger = TerminalLogger;
//# sourceMappingURL=terminal-logger.js.map