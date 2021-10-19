const puppeteer = require("puppeteer");
const readline = require("readline");
const express = require("express"); // It will return a function
const app = express();
app.use(express.json());

app.get("/api/send_otp/:phoneNumber", (req, res) => {
  
  const phoneNumber = req.params.phoneNumber;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL);
  await page.waitForTimeout(8000);
  await page.screenshot({ path: "telegram-01.png" });

  await page.click("#auth-qr-form > div > button");
  await page.waitForTimeout(9000);
  await page.screenshot({ path: "telegram-02.png" });

  await page.type("#sign-in-phone-number", phoneNumber);
  await page.screenshot({ path: "telegram-03.png" });

  await page.click(
    "#auth-phone-number-form > div > form > button:nth-child(4) > div"
  );
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "telegram-04.png" });
  await page.waitForTimeout(12000);
  await page.screenshot({ path: "telegram-05.png" });

  // const resOtp = await readLine();

  res.send('Send OTP Called');
});

app.get("/api/submit_otp/:phoneNumber", (req, res) => {

  let resOtp = req.params.otp;

  await page.type("#sign-in-code", resOtp);
  await page.screenshot({ path: "telegram-06.png" });
  await page.waitForTimeout(20000);
  await page.screenshot({ path: "telegram-07.png" });

  await browser.close();
  res.send('Submit OTP Called');

});

const URL = "https://web.telegram.org/z/";

async function readLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Enter OTP: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

(async () => {})();
