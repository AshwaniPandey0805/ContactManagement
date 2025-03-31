const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const PORT =   process.env.PORT || 5000;
app.use("api/contact", require("./routes/contactRouter"));
app.use(errorHandler);
// app.get("/contact", (req, res) => {
//     res.status(200).json({
//         message : "Response message"
//     });
// });
app.listen(PORT, () => {
    // console.log(process.env.PORT);
    console.log(`Port is listing on port number ${PORT}`);
});
