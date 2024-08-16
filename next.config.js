const path = require("path");

module.exports = {
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
};
