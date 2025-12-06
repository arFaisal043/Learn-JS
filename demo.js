const bayes = require("bayes");

const classifier = bayes();

// training
classifier.learn("win money now", "spam");
classifier.learn("urgent offer today", "spam");
classifier.learn("hello friend", "not_spam");

// predict
const result = classifier.categorize("win urgent money");
console.log(result); // spam
