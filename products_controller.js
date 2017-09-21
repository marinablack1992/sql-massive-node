
module.exports = {

    create: (req, res, next) => {
        var db = req.app.get('db');
        var { name, description, price, imageurl } = req.body

        db.create_product([name, description, price, imageurl])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))

    },

    getOne: (req, res, next) => {
        var db = req.app.get('db');
        var { params } = req;

        db.read_product([params.id])
            .then((product) => res.status(200).send(product))
            .catch((err) => res.status(500).send(err))

    },

    getAll: (req, res, next) => {
        var db = req.app.get('db');
        db.read_products()
            .then((products) => res.status(200).send(products))
            .catch((err) => res.status(500).send(err))


    },

    update: (req, res, next) => {
        var db = req.app.get('db');
        var { params, query } = req;

        db.update_product([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))

    },

    delete: (req, res, next) => {
        var db = req.app.get('db');
        var { params } = req;

        db.delete_product([params.id])
            .then(() => res.status(200).send())
            .catch((err) => res.status(500).send(err))

    }

}