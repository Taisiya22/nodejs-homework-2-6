const { ctrlWrapper, HttpError } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
    const { verificationToken } = req.params;
    
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(401, "Not found user");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  
  res.json({
    message: "Email verify success",
  });
};
module.exports = {
  verifyEmail: ctrlWrapper(verifyEmail),
};
