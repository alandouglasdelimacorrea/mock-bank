export default class Utils {
    static generateId(): string {
      return Math.random().toString(36).substring(2, 11);
   }
}