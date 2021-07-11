const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./dist/user-card-web-component/runtime.js",
    "./dist/user-card-web-component/polyfills.js",
    "./dist/user-card-web-component/styles.css",
    "./dist/user-card-web-component/main.js",
  ];

  await fs.ensureDir("users");
  await concat(files, "users/user-card.js");
};
build();
