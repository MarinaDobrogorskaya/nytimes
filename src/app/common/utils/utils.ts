export class ScrollUtils {
  public static isEnd(): boolean {
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.scrollHeight;
    console.log(offset, height);
    return Math.round(offset) >= height;
  }
}
export class FormatUtils {
  public static dateToSql(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${(month < 10) ? '0' + month : month}-${(day < 10) ? '0' + day : day}`;
  }
}
