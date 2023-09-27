
const isValidPhoneNumber = (phoneNumber) => {

  return /^\d{10}$/.test(phoneNumber);
};

const handler = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'POST') {
    try {
      const { phoneNumber } = req.body;

      if (!isValidPhoneNumber(phoneNumber)) {
        return res.status(400).json({ success: false, msg: "Invalid Phone Number" });
      }

      return res.json({ success: true, msg: "Yeah!! We got it" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Error in server" });
    }
  }
};

export default handler;
