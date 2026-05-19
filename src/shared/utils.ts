export default class Utils {
   public static generateId(): string {
      return Math.random().toString(36).substring(2, 11);
   }
}