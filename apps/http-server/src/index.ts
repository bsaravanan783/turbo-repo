import express from "express";
const app = express();

app.get("/signin", (req ,res) => {
    res.send("signed in");
});

app.get("/signup", (req ,res) => {
    res.send("signed up");
});

app.get("/chat" , (req , res) => {
    res.send("chats ");
})

app.listen(4000);