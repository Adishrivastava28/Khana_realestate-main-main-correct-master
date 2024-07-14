import Property from "../schema/form-schema.js";

// Controller function to get all properties
 const getProperty = async (req, res) => {
  try {
    const properties = await Property.find({});
    res.status(200).json(properties);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error: Unable to fetch properties" });
  }
};


export default getProperty;
