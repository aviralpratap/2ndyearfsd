console.log("Starting task...");
setTimeout(() => {
console.log("setTimeout: Task completed after delay");
}, 0);
setImmediate(() => {
console.log("setImmediate: Task is ready");
});
process.nextTick(() => {
console.log("nextTick: Checking task status");
});
console.log("Task is being processed...");