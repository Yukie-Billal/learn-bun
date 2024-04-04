import { $ } from 'bun';

// Run a cross-platform shell command
await $`echo "Hello, world!"`;

const response = await fetch("http://localhost:3000/todos");

// Pipe the response body to gzip
const data = await $`gzip < ${response}`.arrayBuffer();

console.log(data);