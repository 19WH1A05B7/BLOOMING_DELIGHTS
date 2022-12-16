const CART = require('mongoose').model('Cart');
const PLANT = require('mongoose').model('Plant');
const RECEIPT = require('mongoose').model('Receipt');
const USER = require('mongoose').model('User');

module.exports = {
    getCartSize: (req, res) => {
        let userId = req.user.id;
        CART.findOne({ user: userId }).then((cart) => {
            res.status(200).json({
                message: '',
                data: cart.plants.length
            });
        });
    },

    getCart: (req, res) => {
        let userId = req.user.id;

        CART.findOne({ user: userId })
            .populate('plants')
            .then((cart) => {
                res.status(200).json({
                    message: '',
                    data: cart
                });
            });
    },

    addToCart: (req, res) => {
        let userId = req.user.id;
        let plantId = req.params.plantId;

        PLANT.findById(plantId).then((plant) => {
            if (!plant) {
                return res.status(400).json({
                    message: 'There is no product with the given id in our database.'
                });
            }

            CART.findOne({ user: userId }).then((cart) => {
                let plantIds = [];

                for (let b of cart.plants) {
                    plantIds.push(b.toString());
                }

                if (plantIds.indexOf(plantId) !== -1) {
                    return res.status(400).json({
                        message: 'Product is already in your cart'
                    });
                }

                cart.plants.push(plantId);
                cart.totalPrice += plant.price;
                cart.save();

                res.status(200).json({
                    message: 'Product added to cart!',
                    data: cart
                });
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    removeFromCart: (req, res) => {
        let userId = req.user.id;
        let plantId = req.params.plantId;

        PLANT.findById(plantId).then((plant) => {
            if (!plant) {
                return res.status(400).json({
                    message: 'There is no Product with the given id in our database.'
                });
            }

            CART.findOne({ user: userId }).then((cart) => {
                cart.plants = cart.plants
                    .map(b => b.toString())
                    .filter(b => b !== plantId);
                cart.totalPrice -= plant.price;
                cart.save();

                res.status(200).json({
                    message: 'Product removed from cart!',
                    data: cart
                });
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    checkout: (req, res) => {
        let userId = req.user.id;
        let totalPrice = 0;
        let products = [];

        CART
            .findOne({ user: userId })
            .populate('plants')
            .then((cart) => {
                for (let plant of cart.plants) {
                    totalPrice += plant.price * req.body[plant._id.toString()];
                    products.push({
                        id: plant._id,
                        title: plant.title,
                        vendor: plant.vendor,
                        cover: plant.cover,
                        price: plant.price,
                        qty: req.body[plant._id.toString()]
                    });
                }

                RECEIPT.create({
                    user: userId,
                    productsInfo: products,
                    totalPrice: totalPrice
                }).then((receipt) => {
                    USER.update({ _id: userId }, { $push: { receipts: receipt._id } }).then(() => {
                        cart.plants = [];
                        cart.totalPrice = 0;
                        cart.save();
                        return res.status(200).json({
                            message: 'Thank you for your order! Products will be sent to you as soon as possible!',
                            data: receipt
                        });
                    });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({
                        message: 'Something went wrong, please try again.'
                    });
                });
            });
    }
};