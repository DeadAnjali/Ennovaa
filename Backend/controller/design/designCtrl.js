const DesignFile = require('../models/DesignFile');

const createDesignFile = async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;
    

    const newDesignFile = new DesignFile({
      name,
      description,
      createdBy
    });

    const savedDesignFile = await newDesignFile.save();
    res.status(201).json(savedDesignFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create design file' });
  }
};

module.exports = { createDesignFile };
