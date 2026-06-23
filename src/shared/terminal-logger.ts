export class TerminalLogger {
  public log(message: string): void;
  
  public log(message: string, status: 'SUCCESS' | 'ERROR' | 'INFO'): void;

  public log(message: string, status: 'SUCCESS' | 'ERROR' | 'INFO' = 'INFO'): void {
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