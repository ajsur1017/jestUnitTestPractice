import { UrlWithParsedQuery, parse } from "url";

export class Utils {
  public static parseURL(url:string):UrlWithParsedQuery{
    return parse(url, true);
  } 
  
  public static toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }
}