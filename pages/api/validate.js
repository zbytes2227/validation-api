
const isValidPhoneNumber = (phoneNumber) => {

  return /^\d{10}$/.test(phoneNumber);
};

const handler = async (req, res) => {
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
