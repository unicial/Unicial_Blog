import axios from "axios";

export default async (req: any, res: any) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    // const { url, data, headers } = getRequestParams(email, firstName, lastName);
    const API_KEY =
      "0d8edc054a6bd06495937a23b76913f0e0bf3bb430209e2b4094eeaf61a372b50a68b772";
    const url = `https://zilionixx.api-us1.com/api/3/contact/sync`;

    const data = {
      contact: {
        email: email,
        firstName: "",
        lastName: "",
        phone: "",
      },
    };
    const headers = {
      "Content-Type": "application/json",
      "Api-Token": `${API_KEY}`,
    };

    const response: any = await axios.post(url, data, { headers });

    const tagUrl = `https://zilionixx.api-us1.com/api/3/contactTags`;
    const tagData = {
      contactTag: {
        contact: response.data.contact.id,
        tag: "1",
      },
    };
    const respTag = await axios.post(tagUrl, tagData, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
