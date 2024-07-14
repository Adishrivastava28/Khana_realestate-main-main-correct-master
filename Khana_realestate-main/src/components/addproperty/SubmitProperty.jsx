import React, { useState } from 'react'
import './SubmitProperty.css'
import Select from "react-select";
import a from './leadership.jpg'
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Logo from "../../components/lg2.png";
const SubmitProperty = () => {
  const options = [
    { value: 'Water Softener', label: 'Water Softener' },
    { value: 'Kids Play Area', label: 'Kids Play Area' },
    { value: 'Volleyball Court', label: 'Volleyball Court' },
    { value: 'Badminton Court', label: 'Badminton Court' },
    { value: 'Cricket Pitch', label: 'Cricket Pitch' },
    { value: 'Wifi', label: 'Wifi' },
    { value: 'Dining Table', label: 'Dining Table' },
    { value: 'Curtains', label: 'Curtains' },
    { value: 'Chimney', label: 'Chimney' },
    { value: 'Microwave', label: 'Microwave' },
    { value: 'Stove', label: 'Stove' },
    { value: 'Water Purifier', label: 'Water Purifier' },
    { value: 'Washing Machine', label: 'Washing Machine' },
    { value: 'Fans', label: 'Fans' },
    { value: 'Lights', label: 'Lights' },
    { value: 'Exhaust Fan', label: 'Exhaust Fan' },
    { value: 'Sofa', label: 'Sofa' },
    { value: 'Wardrobe T.V', label: 'Wardrobe T.V' },
    { value: 'Geysers', label: 'Geysers' },
    { value: 'Modular Kitchen', label: 'Modular Kitchen' },
    { value: 'Air Condition', label: 'Air Condition' },
    { value: 'Refrigerator', label: 'Refrigerator' },
    { value: 'Earthquake Resistant', label: 'Earthquake Resistant' },
    { value: 'Landscaped Garden', label: 'Landscaped Garden' },
    { value: 'Indoor Games', label: 'Indoor Games' },
    { value: 'Jogging park', label: 'Jogging park' },
    { value: 'Yoga centre', label: 'Yoga centre' },
    { value: 'Amphitheatre', label: 'Amphitheatre' },
    { value: 'Poolside Party Deck', label: 'Poolside Party Deck' },
    { value: 'Sklandscaping Party Lawns', label: 'Sklandscaping Party Lawns' },
    { value: 'Sky Lounge', label: 'Sky Lounge' },
    { value: 'Cabana cafe', label: 'Cabana cafe' },
    { value: 'Astro deck', label: 'Astro deck' },
    { value: 'Herbal garden', label: 'Herbal garden' },
    { value: 'Sky Walkway', label: 'Sky Walkway' },
    { value: 'Yoga Pads', label: 'Yoga Pads' },
    { value: 'UPS', label: 'UPS' },
    { value: 'Conference Room', label: 'Conference Room' },
    { value: 'Cafeteria', label: 'Cafeteria' },
    { value: 'Garden', label: 'Garden' },
    { value: 'Terrace', label: 'Terrace' },
    { value: 'Lawn', label: 'Lawn' },
    { value: 'Intercom', label: 'Intercom' },
    { value: 'Reserved Park', label: 'Reserved Park' },
    { value: 'CCTV', label: 'CCTV' },
    { value: 'PlayArea', label: 'PlayArea' },
    { value: 'Balcony', label: 'Balcony' },
    { value: 'Servant Quarters', label: 'Servant Quarters' },
    { value: 'Gym', label: 'Gym' },
    { value: 'Internet Connection', label: 'Internet Connection' },
    { value: 'Security', label: 'Security' },
    { value: 'Parking', label: 'Parking' },
    { value: 'Swimming Pool', label: 'Swimming Pool' },
    { value: 'Gas Connection', label: 'Gas Connection' },
    { value: 'Power Backup', label: 'Power Backup' },
    { value: 'Rain Water Harvesting', label: 'Rain Water Harvesting' },
    { value: 'Clubhouse', label: 'Clubhouse' },
    { value: 'Lift', label: 'Lift' },
    { value: 'Vaastu', label: 'Vaastu' },
    { value: 'Air Conditioning', label: 'Air Conditioning' },
    {
      value: 'Large Windows/Natural Light',
      label: 'Large Windows/Natural Light',
    },
    {
      value: 'Stainless Steel Appliances',
      label: 'Stainless Steel Appliances',
    },
    { value: 'Laundry', label: 'Laundry' },
  ]

  const containerStyle = {
    maxWidth: '100%', // Adjust maximum width as needed
    height: 'auto', // Allow height to adjust automatically based on content
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
  }

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      zIndex: 9999, // Ensure the dropdown appears above other elements
    }),
  }

  const [selectedOptions, setSelectedOptions] = useState([])
  const [formData, setFormData] = useState({
    status: '',
    propertyType: '',
    price: '',
    area: '',
    plotArea: '',
    bedroom: '',
    transaction: '',
    furnishing: '',
    propertyAge: '',
    flatNo: '',
    propertyName: '',
    buildingName: '',
    street: '',
    landmark: '',
    pinCode: '',
    address: '',
    city: '',
    location: '',
    description: '',
  })

  const [popupVisible, setPopupVisible] = useState(false)

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      status: '',
      propertyType: '',
      price: '',
      area: '',
      plotArea: '',
      bedroom: '',
      transaction: '',
      furnishing: '',
      propertyAge: '',
      flatNo: '',
      propertyName: '',
      buildingName: '',
      street: '',
      landmark: '',
      pinCode: '',
      address: '',
      city: '',
      location: '',
      description: '',
    })
    setSelectedOptions([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      const dataToSend = {
        formData: formData,
        options: selectedOptions,
      }

      const response = await axios.post(
        'http://localhost:5000/Saveproperty',
        dataToSend
      )
      console.log('Response from server:', response.data)

      // Show success popup and reset the form
      setPopupVisible(true)
      resetForm()

      // Hide popup after 3 seconds
      setTimeout(() => {
        setPopupVisible(false)
      }, 3000)
    } catch (error) {
      console.error('Error posting data:', error)
      // Handle error, show error message, etc.
    }
  }

  return (
    <>
      <div>
        <Link to="/">
          <div className="w-fit z-50 h-fit absolute top-0 left-1/2 transform -translate-x-1/2 ">
            <img src={Logo} alt="" className="w-24   z-50  " />
          </div>
        </Link>
      </div>
      <div className="sticky top-0   w-full h-30 z-10" id="navbar">
        <Navbar></Navbar>
      </div>
      <header className="header -mt-28">
        <div className="flex flex-col items-center justify-center h-screen relative">
          <img
            className="object-cover w-full h-full z-24"
            src={a}
            alt="Full screen"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
            <p className="text-lg md:text-base text-xs md:px-20 md:pb-6 opacity-60">
              <span className="block">SUBMIT PROPERTY</span>
            </p>
          </div>
        </div>
      </header>
      <div className="submit-property">
        <form onSubmit={handleSubmit}>
          <section>
            <h2>PROPERTY INFORMATION</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="status">Status*</label>
                <select name="status" onChange={handleInputChange} required>
                  <option value="">Select status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                  {/* Add options */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="propertyType">Property Type*</label>
                <select
                  name="propertyType"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Commercial Office">Commercial Office</option>
                  <option value="Commercial Shops"> Commercial Shops</option>
                  <option value="Commercial Showroom">
                    Commercial Showroom
                  </option>
                  <option value="Residential Studio Apartment">
                    Residential Studio Apartment
                  </option>
                  <option value="Residential Studio Apartment">Villa</option>
                  {/* Add options */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price*</label>
                <input
                  type="text"
                  name="price"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="area">Area (Sq.ft)*</label>
                <input
                  type="text"
                  name="area"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="plotArea">Plot Area (Sq.ft)</label>
                <input
                  type="text"
                  name="plotArea"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bedroom">Bedroom</label>
                <select name="bedroom" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  {/* Add options */}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="transaction">Transaction</label>
                <select name="transaction" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="New">New</option>
                  <option value="Resale">Resale</option>
                  <option value="Pre Launch">Pre Launch</option>
                  <option value="Pre Lease/ Pre Rented">
                    Pre Lease/ Pre Rented
                  </option>
                  <option value="Individual">Individual</option>
                  <option value="Company">Company</option>
                  <option value="Distress Sale">Distress Sale</option>
                  <option value="Group Booking">Group Booking</option>
                  <option value="Individual / Company">
                    Individual / Company
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="furnishing">Furnishing</label>
                <select name="furnishing" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Fully Furnished">Fully Furnished</option>
                  <option value="UnFurnished">UnFurnished</option>
                  <option value="Semi Furnished">Semi Furnished</option>
                  <option value="Ready to Furnished">Ready to Furnished</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="propertyAge">Property Age</label>
                <select name="propertyAge" onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="Under Construction">Under Construction</option>
                  <option value="Less than 5 years">Less than 5 years</option>
                  <option value="5-10 years">5-10 years</option>
                  <option value="10-20 years">10-20 years</option>
                  <option value="More than 20 years">More than 20 years</option>
                  <option value="Less than 6 months">Less than 6 months</option>
                  <option value="Less than 1 years">Less than 1 years</option>
                  <option value="Less than 1.5 years">
                    Less than 1.5 years
                  </option>
                  <option value="Less than 2 years">Less than 2 years</option>
                  <option value="Less than 3 years">Less than 3 years</option>
                  <option value="New">New</option>
                  <option value="Ready for Sale">Ready for Sale</option>
                  {/* Add options */}
                </select>
              </div>
            </div>
          </section>

          <section>
            <h2>LOCATION INFORMATION</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="flatNo">Flat No./Unit No.</label>
                <input type="text" name="flatNo" onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="propertyName">Property Name</label>
                <input
                  type="text"
                  name="propertyName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="buildingName">Building Name</label>
                <input
                  type="text"
                  name="buildingName"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <input type="text" name="street" onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="landmark">Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  type="text"
                  name="pinCode"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <textarea name="address" onChange={handleInputChange}></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City*</label>
                <select name="city" onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="Chennai">Chennai</option>
                  {/* Add options */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location*</label>
                <input
                  type="text"
                  name="location"
                  onChange={handleInputChange}
                />
                {/*      <select name="location" onChange={handleInputChange} required>
                  <option value="">Location</option>
                  <option value="" selected="">
                    Location
                  </option>
                  <option value="3297">A Nagar</option>
                  <option value="3298">Aathur</option>
                  <option value="3299">Abhiramapuram</option>

                  
                </select> */}
              </div>
            </div>
          </section>

          <section>
            <h2>PROPERTY DESCRIPTION</h2>
            <div className="form-group full-width">
              <label htmlFor="description">Detailed Information</label>
              <textarea
                name="description"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div style={containerStyle}>
              <h5>Amenities</h5>
              <Select
                options={options}
                isMulti
                styles={customStyles}
                onChange={handleChange}
                value={selectedOptions}
                name="amenities"
              />
            </div>
          </section>
          <div className="btn">
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </div>
        </form>
        {popupVisible && (
          <div className="popup">
            <p>Form successfully submitted!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SubmitProperty