const Product = require('./../models/productModel');

exports.getProduct = async (req, res) => {
  try {
    const { limit, sort, priceMin, priceMax, category } = req.query;

    const filterObject = {};

    if (category) {
      filterObject.category = category;
    }

    if (priceMin !== undefined) {
      filterObject.price = { ...filterObject.price, $gte: Number(priceMin) };
    }
    if (priceMax !== undefined) {
      filterObject.price = { ...filterObject.price, $lte: Number(priceMax) };
    }

    console.log(filterObject);

    const product = await Product.find(filterObject)
      .sort(sort)
      .limit(Number(limit));

    res.json({
      product,
    });
  } catch {}
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    product,
  });
};
