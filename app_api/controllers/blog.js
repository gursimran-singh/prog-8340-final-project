const mongoose = require('mongoose');
const blogModel = mongoose.model('blogModel');

var sendJSONResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

const getAllBlogs = function (req, res) {
    blogModel.find().exec(function (err, data) {
        if (err) {
            res
                .status(404)
                .json(err);
            return;
        }

        res
            .status(200)
            .json(data);
    });
};

const getSingleBlog = function (req, res) {
    if (req.params && req.params.blogid) {
        blogModel
            .findById(req.params.blogid)
            .exec(function (err, data) {
                if (!blogModel) {
                    sendJSONResponse(res, 404, {
                        "message": "blogid not found"
                    });
                    return;
                } else if (err) {
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 200, data);
            });
    } else {
        sendJSONResponse(res, 404, {
            "message": "No input parameter in request"
        });
    }
};


const createBlog = function (req, res) {
    blogModel.create({
        name: req.body.name,
        image: req.body.image,
        excerpt: req.body.excerpt,
        description: req.body.description,
        publishedDate: Date.parse(req.body.publishedDate),
    }, (err, data) => {
        if (err) {
            res
                .status(404)
                .json(err);
        } else {
            res
                .status(200)
                .json(data);
        }
    });

};


const updateBlog = function (req, res) {
    if (!req.params.blogid) {
        sendJSONResponse(res, 404, { message: "Not found, blogid is required" });
    } else {
        blogModel.findById(req.params.blogid).exec((err, blogData) => {
            if (!blogData) {
                sendJSONResponse(res, 404, { message: "coinid not found" });
            } else if (err) {
                sendJSONResponse(res, 400, err);
            } else {
                    blogData.name = req.body.name,
                    blogData.image = req.body.image,
                    blogData.excerpt = req.body.excerpt,
                    description = req.body.description,
                    blogData.publishedDate = Date.parse(req.body.publishedDate),
                    blogData.save((err, blogData) => {
                        if (err) {
                            sendJSONResponse(res, 400, err);
                        } else {
                            sendJSONResponse(res, 200, blogData);
                        }
                    });
            }
        });
    }
};

const deleteBlog = function (req, res) {
    const blogid = req.params.blogid;

    if (blogid) {
        blogModel
            .findByIdAndRemove(blogid)
            .exec((err, data) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({ "message": "No blogid" });
    }
};

module.exports = {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog
};