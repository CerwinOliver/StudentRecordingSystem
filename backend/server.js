// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const studentRoutes = require("./routes/students");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use("/api/students", studentRoutes);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// New Server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");

const app = express();

app.use(cors());

// Increase bodyParser limit (default 100kb, we set it to 10MB)
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
