import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

async function pageDown() {
  console.log("SITE FORA DO AR");

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await axios.post(url, {
      chat_id: chatId,
      text: `SITE FORA DO AR ⚠️ \n${process.env.SITE}`,
    });
  } catch (err) {
    console.log("ERROR", err);
  }
}

function requests() {
  axios
    .get(process.env.SITE)
    .then((res) => {
      if (res.status !== 200) {
        pageDown();
      }
    })
    .catch((err) => pageDown());
}

setInterval(requests, 300000); //300000 -> 5 minutes
