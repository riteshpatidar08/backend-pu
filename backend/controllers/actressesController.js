const Actresses = require('../models/actressesModel');

exports.createActresses = async (req, res) => {
  try {
    const actresses = await Actresses.create(req.body);
    res.status(201).json({
      actresses,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllActresses = async (req, res) => {
  try {
    const actresses = await Actresses.find();
    if (!actresses) {
      res.status(404).json({
        message: 'Data Not Found',
      });
    }

    res.status(200).json({
      length: actresses.length,
      actresses,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.getActressesNation = async (req, res) => {
  try {
    const actresses = await Actresses.aggregate([
      {
        $group: {
          _id: '$nationality',
          actresses: { $push: '$$ROOT' },
        },
      },
    ]);
    res.json({
      actresses,
    });
  } catch {}
};

exports.getActressesByAwards = async (req, res) => {
  try {
    const actresses = await Actresses.aggregate([
      {
        $match: {
          birth_year: { $exists: true },
        },
      },
      {
        $sort: {
          birth_year: 1,
        },
      },
    ]);

    res.json({
      actresses,
    });
  } catch (error) {}
};
