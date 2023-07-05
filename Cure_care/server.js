const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const socket = require("socket.io");

const port=process.env.PORT ||5000;
server=app.listen(port,()=>{
    console.log(`Server listening to ${port}`);
})

//connecting 
//server is connection to our server(like an instance)
io = socket(server);

//passes a connection to socket
//id is random id given to every person
io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User Joined Room: " + data);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data.content);
  });

  //when the user disconnects
  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});


const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cors({origin:"*"}))

const usersRouter= require('./routes/users')
app.use('/api/users',usersRouter)
// app.use('api/conversations',conversationsRouter)
const doctorsRouter= require('./routes/doctors')
app.use('/api/doctors',doctorsRouter)
// app.use('api/medicines',medicinesRouter)
// app.use('api/messages',messagesRouter)
const appointmentRouter= require('./routes/appointments')
app.use('/api/appointments',appointmentRouter)

const uri="mongodb+srv://Rohanth:HldFTLDNB1CdIpRN@cluster0.xgx3k1q.mongodb.net/?retryWrites=true&w=majority"
//HldFTLDNB1CdIpRN
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },() => {
    console.log("MongoDB connected");
});

