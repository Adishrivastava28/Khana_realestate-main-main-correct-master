import Property from "../schema/form-schema.js";

// Controller function to get all properties
const getPropertyDetail = async (req, res) => {
 const propertyId = req.params.id;

 try {
   // Use Mongoose's findById method
   const property = await Property.findById(propertyId);

   if (!property) {
     return res.status(404).json({ error: "Property not found" });
   }

   // Property found, send it as JSON response
   res.json(property);
 } catch (error) {
   // Handle any errors that occur
   console.error("Error fetching property:", error);
   res.status(500).json({ error: "Error fetching property" });
 }
};

export default getPropertyDetail;
