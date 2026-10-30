# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\testClasses\put.spec.js >> PUT Test Cases >> PUT - Missing Password
- Location: tests\API\testClasses\put.spec.js:35:9

# Error details

```
Error: apiRequestContext.put: read ECONNRESET
Call log:
  - → PUT https://api-testing-postman.vercel.app/api/v1/users/replace-account
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 128
    - cookie: accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWU0YzIxZGE2OTVkMmRhZjI0Mzg5MmIiLCJlbWFpbCI6ImZhaGFkMTc5MzM3Njc5NjQ1MmI1NWRiNjExQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiRmFoYWQxNzkzMzc2Nzk2NDUyYjU1ZGI2MTEiLCJpYXQiOjE3OTMzNzY3OTgsImV4cCI6MTc5MzQ2MzE5OH0.U9Uxf8ozEqQ1Nx6_pVa9SZsdqCTW_kZq97b9UnCwhQI; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWU0YzIxZGE2OTVkMmRhZjI0Mzg5MmIiLCJlbWFpbCI6ImZhaGFkMTc5MzM3Njc5NjQ1MmI1NWRiNjExQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiRmFoYWQxNzkzMzc2Nzk2NDUyYjU1ZGI2MTEiLCJpYXQiOjE3OTMzNzY3OTgsImV4cCI6MTc5NDI0MDc5OH0.tVA9m45BBqDGtwi3_ISuVD4H16Qnrp48ANc6WiuOYJU

```

# Test source

```ts
  1  | import apiConfig from './api.json';
  2  | 
  3  | class ApiMethods {
  4  |     constructor(request) {
  5  |         this.request = request;
  6  |     }
  7  | 
  8  |     url(endpoint) {
  9  |         const path = apiConfig.endpoints[endpoint];
  10 |         if (!path) {
  11 |             throw new Error(`Unknown API endpoint: ${endpoint}`);
  12 |         }
  13 |         return `${apiConfig.baseUrl}${path}`;
  14 |     }
  15 | 
  16 |     get(endpoint) {
  17 |         return this.request.get(this.url(endpoint));
  18 |     }
  19 | 
  20 |     post(endpoint, data) {
  21 |         return this.request.post(this.url(endpoint), data === undefined ? {} : { data });
  22 |     }
  23 | 
  24 |     put(endpoint, data) {
> 25 |         return this.request.put(this.url(endpoint), data === undefined ? {} : { data });
     |                             ^ Error: apiRequestContext.put: read ECONNRESET
  26 |     }
  27 | 
  28 |     delete(endpoint) {
  29 |         return this.request.delete(this.url(endpoint));
  30 |     }
  31 | 
  32 |     update(endpoint, data) {
  33 |         return this.request.patch(this.url(endpoint), { data });
  34 |     }
  35 | }
  36 | 
  37 | export default ApiMethods;
  38 | 
```