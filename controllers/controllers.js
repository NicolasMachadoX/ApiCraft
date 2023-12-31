
const getCollection = async (req, res) => {
    const url = req.originalUrl;
    const separator = '/';

    const startIndex = url.indexOf(separator, 1);

    if (startIndex !== -1) {
        const endIndex = url.indexOf(separator, startIndex + 1);

        if (endIndex !== -1) {
            const subPath = url.substring(startIndex, endIndex);
            const word = subPath.slice(1); 
            const wordAdap = word.substring(0, 1).toUpperCase() + word.substring(1);
            return wordAdap;
        } else {
            return res.status(400).json({ error: "URL no válida" });
        }
    } else {
        return res.status(400).json({ error: "URL no válida" }); 
    }
}

const getAll = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },
           ]
        );

      
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByID = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: { $expr: { $eq: ['$_id', {$toObjectId: req.params.id}] }}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByName = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {name: req.params.name}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByVersion = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        console.log(typeof req.params.version);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {version: req.params.version}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCode = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {code: req.params.code}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCategory = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {category: req.params.category}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByTexture = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {texture: req.params.texture}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByShaders = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {shaders: req.params.shaders}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByAcess = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {access: req.params.access}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByMods = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {mods: req.params.mods}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByPlataform = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {plataform: req.params.plataform}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByCapacity = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {capacity: req.params.capacity}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByIp = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {ip: req.params.ip}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getByMaps = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate(
            [{
                $lookup: {
                    from: "textures",
                    localField: "texture",
                    foreignField: "codigo",
                    as: "texture"
                }
            },
            {
                $lookup: {
                    from: "mods",
                    localField: 'mods.mod1',
                    foreignField: "code",
                    as: "mods"
                }
            },
            {
                $lookup: {
                    from: "versions",
                    localField: "version",
                    foreignField: "version",
                    as: "version"
                }
            },
            {
                $lookup: {
                    from: "shaders",
                    localField: "shaders",
                    foreignField: "codigo",
                    as: "shaders"
                }
            },{
                $match: {name: req.params.name}
            }
           ]
        );
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getDescriptionByCode = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.aggregate([
            {
                $match: { code: code }
            },
            {
                $project: {
                    _id: 0,
                    description: "$description"
                }
            }
        ]);
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getMorePopular = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.find({ downloads: { $gt: "$downloads" } });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const getLessPopular = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.find({ downloads: { $lt: "$downloads" } });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const post = async (req, res) => {
    const word = await getCollection(req);
    const Collection = require(`../models/${word}.js`);
    console.log(word);
    const data = new Collection(req.body);
    try {
        const newData = await data.save();
        return res.json(newData);
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

const updateById = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(404).send(error);
    }
}

const deleteById = async (req, res) => {
    try {
        const word = await getCollection(req);
        const Collection = require(`../models/${word}.js`);
        console.log(word);
        const data = await Collection.deleteOne({ _id: req.params.id });
        res.json({ data: data });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}



module.exports = {
    getAll, getByID, getByName, getByVersion, getByCode, 
    getByCategory, getByTexture, getByShaders, getByAcess,
    getByMods, getByPlataform, getByCapacity, getByIp, getByMaps,
    getDescriptionByCode, getMorePopular, getLessPopular, getCollection,
    post , updateById, deleteById  

}