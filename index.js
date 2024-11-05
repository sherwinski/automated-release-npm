console.log("Hello World");

// changes that should trigger a 1.2.0 release, but will probably conflict with 1.1.0 due to the git tags

console.log("Hello World 2");
console.log("Hello World 3");

// 1.2.0
console.log("Hello World 4");

// 1.3.0
console.log("Hello World 5");

// 1.4.0
console.log("Hello World 6");

// expecting 2.0.0, got 1.5.0
// feat: changing a feature
// BREAKING CHANGE
console.log("Hello World 7");

// expecting 2.0.0, got 2.0.0
// fix: changing a feature
// BREAKING CHANGE: removes a feature
console.log("Hello World 7");

// expecting 3.0.0, got no release published
// feat!: removing a feature
console.log("Hello World 8");

// expecting 3.0.0, got 3.0.0
// feat!: removing a feature
// BREAKING CHANGE: removes a certain feature
console.log("Hello World 9");

// expecting no release, got no release
// feat!: a breaking change
// Some notes about the breaking change
console.log("Hello World 10");

// expecting 3.1.0
// fix: a breaking change related to a bug
// BREAKING CHANGE: removes a certain feature
console.log("Hello World 11");
