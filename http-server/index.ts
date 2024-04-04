import figlet from "figlet";

const server = Bun.serve({
	port: 3000,
	fetch(request) {
		const body = figlet.textSync("Yukie Muhammad Billal", "ANSI Shadow")

		return new Response(body)
	},
})

console.log(`Listening on localhost:${server.port}`)