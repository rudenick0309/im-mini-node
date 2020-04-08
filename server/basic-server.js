const http = require("http");

const PORT = 5000;

const ip = "localhost";

// const qs = require("querystring");

const server = http.createServer((request, response) => {
  let headers = defaultCorsHeader;
  request.setEncoding("utf8");
  var message = "";
  //여기서부터 시작
  request.on("data", (chunk) => {
    console.log(chunk);
    message += chunk;
  });

  request.on("end", () => {
    if (request.method === "OPTIONS") {
      response.writeHead(200, headers);
      response.end();
    } else if (request.method !== "POST") {
      response.end("404 error POST request");
    } else {
      if (request.url === "/upper") {
        response.end(JSON.stringify(message.toUpperCase()));
      }
      if (request.url === "/lower") {
        response.end(JSON.stringify(message.toLowerCase()));
      }
    }
  });
  /* 
  README.md 파일을 꼭 읽으시길 바랍니다. 모든 basic requirements가 정리되어 있습니다.  
  HINT : 
    request 의 method 와 url을 활용하여 클라이언트의 요청을 분기 할 수 있어야 합니다.
    잘못된 요청은 잘못된 요청이라는 응답을 주어야 합니다.
  */

  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  response.writeHead(200, headers);
  // response.end("hello mini-server sprints");
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
};

// request.on("data", function (chunk) {
//   console.log("첫번째 데이터 확인", data);
//   console.log("청크 확인", chunk);
//   console.log("청크 투 스트링 확인", chunk.toString()); // 여기까지가 밸류 출

//   console.log("대문자 확인", chunk.toString().toUpperCase()); // 대문자 변환 성공
//   //위의 결과를 response에 넘기기만 하면 되잖아 그럼?
//   var data = chunk.toString().toUpperCase();

//   // var data = queryString.parse(chunk.toString());
//   // console.log("데이터 확인", data);
//   request.on("end", function () {
//     response.writeHead(200, headers);
//     response.write(data);
//     response.end(data);
//   });
// });
