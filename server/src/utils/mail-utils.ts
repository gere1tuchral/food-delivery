import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";
configDotenv();

const { AUTH_EMAIL, AUTH_PASS } = process.env;
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
});
// console.log({ AUTH_EMAIL, AUTH_PASS });

export const verifyUserMail = async (receiver: string, verifyLink: string) => {
  await transport.sendMail({
    from: `"Food delivery" <${AUTH_EMAIL}>`,
    to: receiver,
    subject: "verify user",
    html: `<div
    style="
    width: 300px;
    height: 250px;
    border-radius: 8px;
    background-color: aqua;
    ">
    <a href="${verifyLink}" target="_blank" style="font-size: 18px; color: red">Verify user</a>
    </div>`,
  });
};
export const verifyPasswordMail = async (
  receiver: string,
  verifyLink: string,
) => {
  await transport.sendMail({
    from: `"Food delivery" <${AUTH_EMAIL}>`,
    to: receiver,
    subject: "verify password",
    html: `<div
    style="
    width: 300px;
    height: 250px;
    border-radius: 8px;
    background-color: aqua;
    ">
    <a href="${verifyLink}" target="_blank" style="font-size: 18px; color: red">Verify user</a>
    </div>`,
  });
};
