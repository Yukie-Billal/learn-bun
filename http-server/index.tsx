const server = Bun.serve({
	port: 3000,
	fetch(request) {
		return new Response("Welcome to bun!")
	},
})

console.log(`Listening on localhost:${server.port}`)
