console.log("Hello World");

// changes that should trigger a 1.2.0 release, but will probably conflict with 1.1.0 due to the git tags

console.log("Hello World 2");
console.log("Hello World 3");

// 1.2.0
console.log("Hello World 4");

// 1.3.0
console.log("Hello World 5");

// 1.3.2
console.log("Hello World 6");

// expecting 2.0.0, got 1.5.0
// feat: changing a feature
// BREAKING CHANGE
console.log("Hello World 7");

// expecting 2.0.0, got 1.5.0
// fix: changing a feature
// BREAKING CHANGE: removes a feature
console.log("Hello World 7");