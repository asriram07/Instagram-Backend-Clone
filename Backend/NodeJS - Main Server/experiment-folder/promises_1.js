import fetch from "node-fetch";
function helper_promise() {
  return new Promise((resolve, reject) => {
    var res = fetch("https://www.google.com");
    console.log("Fetching : ", res);
    res.then((res) => {
      console.log("Processing : ", res);
    });
  });
}
(async () => {
  console.log(456);
  try{
  var pmc = await helper_promise();
  console.log("123");
  console.log("Outside : ", pmc);
  }
  catch(err){
    console.log(err)
  }
})();

// Output:
// Fetching :  Promise { <pending> }
// Outside :  Promise { <pending> }
// Processing :  Response {
//   size: 0,
//   [Symbol(Body internals)]: {
//     body: Gunzip {
//       _writeState: [Uint32Array],
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 6,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: true,
//       bytesWritten: 0,
//       _handle: [Zlib],
//       _outBuffer: <Buffer 70 b3 06 55 67 02 00 00 20 3b 04 55 67 02 00 00 38 40 00 00 00 00 00 00 18 20 00 00 30 00 00 00 e8 02 de 54 67 02 00 00 08 03 de 54 67 02 00 00 2d 20 ... 16334 more bytes>,
//       _outOffset: 0,
//       _chunkSize: 16384,
//       _defaultFlushFlag: 2,
//       _finishFlushFlag: 2,
//       _defaultFullFlushFlag: 3,
//       _info: undefined,
//       _maxOutputLength: 4294967296,
//       _level: -1,
//       _strategy: 0,
//       [Symbol(kCapture)]: false,
//       [Symbol(kCallback)]: null,
//       [Symbol(kError)]: null
//     },
//     stream: Gunzip {
//       _writeState: [Uint32Array],
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 6,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: true,
//       bytesWritten: 0,
//       _handle: [Zlib],
//       _outBuffer: <Buffer 70 b3 06 55 67 02 00 00 20 3b 04 55 67 02 00 00 38 40 00 00 00 00 00 00 18 20 00 00 30 00 00 00 e8 02 de 54 67 02 00 00 08 03 de 54 67 02 00 00 2d 20 ... 16334 more bytes>,
//       _outOffset: 0,
//       _chunkSize: 16384,
//       _defaultFlushFlag: 2,
//       _finishFlushFlag: 2,
//       _defaultFullFlushFlag: 3,
//       _info: undefined,
//       _maxOutputLength: 4294967296,
//       _level: -1,
//       _strategy: 0,
//       [Symbol(kCapture)]: false,
//       [Symbol(kCallback)]: null,
//       [Symbol(kError)]: null
//     },
//     boundary: null,
//     disturbed: false,
//     error: null
//   },
//   [Symbol(Response internals)]: {
//     type: 'default',
//     url: 'https://www.google.com/',
//     status: 200,
//     statusText: 'OK',
//     headers: {
//       'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
//       'cache-control': 'private, max-age=0',
//       'content-encoding': 'gzip',
//       'content-security-policy-report-only': "object-src 'none';base-uri 'self';script-src 'nonce-mh3i27IWgE8KYIX-NGkjQg' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp",
//       'content-type': 'text/html; charset=ISO-8859-1',
//       date: 'Sun, 14 Jul 2024 17:45:36 GMT',
//       expires: '-1',
//       p3p: 'CP="This is not a P3P policy! See g.co/p3phelp for more info."',
//       server: 'gws',
//       'set-cookie': [Array],
//       'transfer-encoding': 'chunked',
//       'x-frame-options': 'SAMEORIGIN',
//       'x-xss-protection': '0'
//     },
//     counter: 0,
//     highWaterMark: 16384
//   }
// }


// async function fetch(uri){
//     return new Promise( (resolve, reject)=>{
//         var res =  http_low_level_call(uri,params);
//         res = process(res) //synchronus code
//         return res; //
//     })
// }
// var resp = await fetch(uri)
// res.send(resp);

// function helper_promise() {
//     return new Promise((resolve, reject) => {
//       var res = fetch("https://www.google.com");
//       console.log("Fetching : ", res);
//       return res.then((res) => {
//         console.log("Processing : ", res);
//         return resolve(res);
//       });
//     });
//   }
//   (async () => {
//     console.log(456);
//     try{
//     var pmc = await helper_promise();
//     console.log("123");
//     console.log("Outside : ", pmc);
//     }
//     catch(err){
//       console.log(err)
//     }
//   })();