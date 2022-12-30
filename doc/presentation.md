---
title: EDIT full-stack web development lisbon 2022-2023, module backend
tags: EDIT, backend, course
#slideOptions:
#  theme: solarized
#  transition: 'fade'
#  parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'

---

# BACK END
## full stack web development
https://hackmd.io/@gerardolima/BkxkGHItj#/  

gerardo.lima@gmail.com
<!--
slack channel: https://app.slack.com/client/T03UFMB6P7G/C03U7PDB215
page: https://weareedit.io/formacao/curso-full-stack-web-development-lisboa-2/
-->

---

## Introduction

----

### About Yourself

- your expectations
- what you enjoyed, already
- what you struggled with, already

----

### About This Module

- Node
- HTTP
- MongoDB
- Project

----

### Calendar
| Jan      |     | Fev      |     |
| -------- | --- | -------- | --- |
| 11 (wed) |     | 01 (wed) |     |
| 16 (mon) |     | 03 (fri) |     |
| 18 (wed) |     | 06 (mon) |     |
| 20 (fri) |     | 08 (wed) |     |
| 23 (mon) |     | 10 (fri) |     |
| 25 (wed) |     |          |     |


---

## Node
- repl
- bootstrap
- CI/CD
- testing
- debugging

----

### Node repl

![](https://i.imgur.com/gfJeDGY.png)

----

### Node bootstrap

https://github.com/gerardolima/edit-2023-jan/tree/main/hapi

---

## HTTP
- Request
- Response
- Headers
- frameworks:
    - none
    - Express, Hapi, Nest, Fastify, Koa ...


----

### HTTP without any Framework

```javascript
const http = require('node:http')
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('hello world!')
})

void server.listen(4040, '127.0.0.1', () => {
  console.log('server is running on 4040')
})
```

```shell
$ curl http://127.0.0.1:4040
# hello world!
```

----

### HTTP with Express

```javascript
const express = require('express')
const app = express()
const port = 4040

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

----

### HTTP with Koa

```javascript
const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

router.get('hello', '/', ctx => {
  ctx.body = 'Hello World'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(4040)
```

----

### HTTP with Hapi

```javascript
const Hapi = require('@hapi/hapi')
const init = async () => {
  const server = Hapi.server({ port: 4040 })
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => { return 'Hello World!' }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}
init()
```

----

### HTTP with Fastify

```javascript
const Fastify = require('fastify')
const server = Fastify({logger: true})

server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await server.listen({ port: 4040 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()

```

---

## API
- REST
- Auth (authentication / authorization)
    - Basic
    - JWT

---

## Project
- Docker
    - install
    - CI/CD
    - run
-  MongoDB
    - install
    - local
    - cloud

---

## References
- Node: https://nodejs.org/
- Npm: https://docs.npmjs.com/about-npm
- TypeScript: https://www.typescriptlang.org/
- Jest: https://jestjs.io/
- REST: https://restfulapi.net/
- Docker: https://www.docker.com/
- MongoDB: https://www.mongodb.com/
- JWT: https://jwt.io/