import * as queryString from 'query-string';

/**
 * Parses the query string to usernames for our site
 * 
 * @param {string} inp The query string pulled from react router
 */
export default function queryParamParse(inp){
  if(inp == null){
    return [];
  }

  let raw = queryString.parse(inp.substring(1));
  let outp = [];
  console.log(raw);
  if(raw.user != null){
    outp.push(raw.user);
  } else {
    for(let i = 0; i < Object.keys(raw).length; i++){
      outp.push(raw[`user${i+1}`]);
    }
  }

  return outp;
}