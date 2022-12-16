const VALIDATOR = require('validator');
const PLANT = require('mongoose').model('Plant');
const USER = require('mongoose').model('User');

const PAGE_LIMIT = 15;

function validatePlantForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (!payload || typeof payload.title !== 'string' || payload.title.trim().length === 0) {
        isFormValid = false;
        errors.title = 'Please provide title.';
    }

    if (!payload || typeof payload.product_category !== 'string' || payload.product_category.trim().length === 0) {
        isFormValid = false;
        errors.product_category = 'Please provide Product Category.';
    }

    if (!payload || typeof payload.vendor !== 'string' || payload.vendor.trim().length === 0) {
        isFormValid = false;
        errors.vendor = 'Please provide vendor.';
    }


    if (!payload || typeof payload.description !== 'string' || payload.description.trim().length < 10) {
        isFormValid = false;
        errors.description = 'Description must be at least 10 symbols long.';
    }

    if (!payload || !payload.cover || !VALIDATOR.isURL(payload.cover)) {
        isFormValid = false;
        errors.cover = 'Please provide proper url for the plant\'s image';
    }

    if (!payload || isNaN(Number(payload.price)) || Number(payload.price) < 0 ) {
        isFormValid = false;
        errors.price = 'Please provide plant price.';
    }

    return {
        success: isFormValid,
        errors
    };
}

function validateRatingForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (
        !payload
        || isNaN(Number(payload.rating))
        || !VALIDATOR.isInt(payload.rating.toString())
        || Number(payload.rating) < 1
        || Number(payload.rating) > 5
    ) {
        isFormValid = false;
        errors.price = 'Rating must be a integer number between 1 and 5.';
    }

    return {
        success: isFormValid,
        errors
    };
}

module.exports = {
    getSingle: (req, res) => {
        let plantId = req.params.plantId;

        PLANT.findById(plantId)
            .then((plant) => {
                if (!plant) {
                    return res.status(400).json({
                        message: 'There is no product with the given id in our database.'
                    });
                }

                return res.status(200).json({
                    message: '',
                    data: plant
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({
                    message: 'Something went wrong, please try again.'
                });
            });
    },

    add: (req, res) => {
        let plant = req.body;

        let validationResult = validatePlantForm(plant);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Product form validation failed!',
                errors: validationResult.errors
            });
        }

        PLANT.create(plant).then((newPlant) => {
            return res.status(200).json({
                message: 'Product created successfully!',
                data: newPlant
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    edit: (req, res) => {
        let plantId = req.params.plantId;
        let editedPlant = req.body;

        let validationResult = validatePlantForm(editedPlant);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Product form validation failed!',
                errors: validationResult.errors
            });
        }

        PLANT.findById(plantId).then((plant) => {
            if (!plant) {
                return res.status(400).json({
                    message: 'There is no product with the given id in our database.'
                });
            }

            plant.title = editedPlant.title;
            plant.vendor = editedPlant.vendor;
            plant.product_category = editedPlant.product_category;
            plant.description = editedPlant.description;
            plant.cover = editedPlant.cover;
            plant.price = editedPlant.price;
            plant.save();

            return res.status(200).json({
                message: 'Product edited successfully!',
                data: plant
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    delete: (req, res) => {
        let plantId = req.params.plantId;

        PLANT.findByIdAndRemove(plantId).then((deletedPlant) => {
            if (!deletedPlant) {
                return res.status(400).json({
                    message: 'There is no product with the given id in our database.'
                });
            }

            return res.status(200).json({
                message: 'Product deleted successfully.',
                data: deletedPlant
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    rate: (req, res) => {
        let plantId = req.params.plantId;
        let rating = req.body.rating;
        let userId = req.user.id;

        let validationResult = validateRatingForm(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                message: 'Rating form validation failed!',
                errors: validationResult.errors
            });
        }

        PLANT.findById(plantId).then((plant) => {
            if (!plant) {
                return res.status(400).json({
                    message: 'There is no product with the given id in our database.'
                });
            }

            let ratedByIds = plant.ratedBy.map((id) => id.toString());
            if (ratedByIds.indexOf(userId) !== -1) {
                return res.status(400).json({
                    message: 'You already rated this product'
                });
            }

            plant.ratedBy.push(userId);
            plant.ratingPoints += rating;
            plant.ratedCount += 1;
            plant.currentRating = plant.ratingPoints / plant.ratedCount;
            plant.save();

            return res.status(200).json({
                message: 'You rated the product successfully.',
                data: plant
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    addToFavorites: (req, res) => {
        let plantId = req.params.plantId;

        PLANT.findById(plantId).then((plant) => {
            if (!plant) {
                return res.status(400).json({
                    message: 'There is no products with the given id in our database.'
                });
            }

            USER.findById(req.user.id).then((user) => {

                let plantsIds = user.favoritePlants.map((b) => b.toString());
                if (plantsIds.indexOf(plantId) !== -1) {
                    return res.status(400).json({
                        message: 'You already have this product in your favorites list'
                    });
                }

                user.favoritePlants.push(plant._id);
                user.save();

                return res.status(200).json({
                    message: 'Successfully added the plant to your favorites list.'
                });
            });
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({
                message: 'Something went wrong, please try again.'
            });
        });
    },

    search: (req, res) => {
        let params = req.query;
        let searchParams = {
            query: {},
            sort: { product_category: -1},
            skip: null,
            limit: PAGE_LIMIT,
        };

        if (params.query || typeof params.query === 'string') {
            let query = JSON.parse(params.query);
            searchParams.query = { $text: { $search: query['searchTerm'], $language: 'en' } };
        }

        if (params.sort) {
            searchParams.sort = JSON.parse(params.sort);
        }

        if (params.skip) {
            searchParams.skip = JSON.parse(params.skip);
        }

        if (params.limit) {
            searchParams.limit = JSON.parse(params.limit);
        }

        PLANT
            .find(searchParams.query)
            .count()
            .then((count) => {
                PLANT
                    .find(searchParams.query)
                    .sort(searchParams.sort)
                    .skip(searchParams.skip)
                    .limit(searchParams.limit)
                    .then((result) => {
                        return res.status(200).json({
                            message: '',
                            data: result,
                            query: searchParams,
                            itemsCount: count
                        });
                    })
                    .catch(() => {
                        return res.status(400).json({
                            message: 'Bad Request!'
                        });
                    });
            });
    }
};