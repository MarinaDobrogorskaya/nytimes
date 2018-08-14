export class ScrollUtils {
  /**
   * This method calculates when page scroll is ended
   * @returns {boolean}
   */
  public static isEnd(): boolean {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.scrollHeight;
    return Math.round(offset) >= height;
  }
}
export class FormatUtils {
  /**
   * This method transforms date object to string in '2018-08-12' format
   * @param {Date} date
   * @returns {string}
   */
  public static dateToSql(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${(month < 10) ? '0' + month : month}-${(day < 10) ? '0' + day : day}`;
  }
}
