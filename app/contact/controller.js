const Contact = require("./model");

const getCoontact = async (req, res, next) => {
  try {
    const contact = await Contact.findAll();
    return res.json({
      status: 200,
      message: "Success get data contacts",
      data: contact,
    });
  } catch (err) {
    if (err) {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const postContact = async (req, res) => {
  try {
    let payload = req.body;
    const contact = await Contact.create(payload);
    await contact.save();
    return res.json({
      status: 200,
      message: "Success post data",
      data: contact,
    });
  } catch (err) {
    if (err) {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    let payload = req.body;
    let { id } = req.params;
    const contact = await Contact.update(payload, {
      where: {
        id,
      },
    });
    await contact.save();
    return res.json({
      status: 200,
      message: "Success update data",
      data: contact,
    });
  } catch (err) {
    if (err) {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    let { id } = req.params;
    const contact = await Contact.destroy({
      where: {
        id,
      },
    });
    return res.json({
      status: 200,
      message: "Success delete data",
      data: contact,
    });
  } catch (err) {
    if (err) {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

module.exports = {
  getCoontact,
  postContact,
  updateContact,
  deleteContact,
};
