import  mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  plotArea: {
    type: Number,
  },
  bedroom: {
    type: Number,
  
  },
  transaction: {
    type: String,
   
  },
  furnishing: {
    type: String,
    
  },
  propertyAge: {
    type: String,
  },
  flatNo: {
    type: String,
  },
  propertyName: {
    type: String,
  },
  buildingName: {
    type: String,
  },
  street: {
    type: String,
  },
  landmark: {
    type: String,
  },
  pincode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    
  },
  city: {
    type:String,
  },
  location: {
    type: String,
    required: true,
  },
  detailedInformation: {
    type: String,
  },
  amenities: {
    type: [String],
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
