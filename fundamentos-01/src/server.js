import http from 'node:http'

const users = []

const server = http.createServer((req, res)  => {
    const { method, url} = req;

    if(method === 'GET' && url === '/users') {
        return res
            .setHeader('content-type', 'application/json')
            .end("Listagem de usuários!")
    }

    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Joe tabele',
            email: 'joe@email.com'
        })

        return  res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})


server.listen(3333)