const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = corsOptions;

// (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not Allowed by CORS"));
//     }
//   },
