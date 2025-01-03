import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};

const recipients = [
  {
    email: process.env.MAILTRAP_RECIPIENT_MAIL!,
  },
];

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const client = new MailtrapClient({ token: TOKEN! });
    const response = await client.send({
      from: sender,
      to: recipients,
      subject: `MESSAGE FROM PORTFOLIO WEBSITE: - ${name} - ${email}`,
      text: message,
      category: "Portfolio Contacts",
    });

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log({ error });
    throw new Error(error);
  }
};
