import React, {useState} from 'react'
import { X, Trash2, ImageUp } from 'lucide-react';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function Form(props) {

  // car brands
  const carBrands = [
      "Toyota",
      "Ford",
      "Honda",
      "Chevrolet",
      "Volkswagen (VW)",
      "BMW",
      "Mercedes-Benz",
      "Audi",
      "Nissan",
      "Hyundai",
      "Kia",
      "Subaru",
      "Tesla",
      "Porsche",
      "Ferrari",
      "Lamborghini",
      "Aston Martin",
      "Jaguar",
      "Land Rover",
      "Jeep"
  ];


  const [images, setImages] = useState([]);
  const [carName, setCarName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [mileage, setMileage] = useState('');
  const [seating, setSeating] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [rentDay, setRentDay] = useState('');
  const [rentMonth, setRentMonth] = useState('');
  const [fual, setFual] = useState('');
  const [discription, setDiscription] = useState('');



  // image show handle
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imagesArray = files.map((file) => ({
      preview: URL.createObjectURL(file),
      name : file.name,
      size: file.size,
      file,
    }));

    setImages((prevImages) => prevImages.concat(imagesArray));
  };

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(fual, carName, category, brand, mileage, seating, year, color, rentDay, rentMonth, discription );
    setImages([])
    setCarName('')
    setBrand('')
    setCategory('')
    setColor('')
    setFual('')
    setMileage('')
    setMileage('')
  }




  return (
    <div  className='fixed flex  justify-center inset-0  z-50 '>
      <div  onClick={()=>props.data2(!props.data)} className="fixed w-full h-full inset-0  bg-black bg-opacity-80"></div>
      <form className='max-w-2xl min-h-auto overflow-x-auto scrollbar-none rounded-2xl bg-gray-50 my-10 relative p-20 max-lg:px-6'>
      <div className=" ">
       <X onClick={()=>props.data2(!props.data)} className='absolute right-10 top-10 text-gray-600 cursor-pointer hover:bg-gray-500 rounded-full w-10 h-10 p-2' />
        <div className="">
          <h2 className="text-2xl font-bold leading-7 text-indigo-600">Add New Car Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
          


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


          {/* CarName Input  */}
            <div className="col-span-full">
              <label htmlFor="CarName" className="block text-sm font-medium leading-6 text-gray-900">
                Car Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>{setCarName(e.target.value)}}
                  type="text"
                  name="CarName"
                  id="CarName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    

            {/* Calegory select */}
            <div className="sm:col-span-3">
              <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
              <div className="mt-2">
                <select
                  value={category}
                  id="Category"
                  name="Category"
                  onChange={(e)=>{setCategory(e.target.value)}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option className='mt-2' value=''>Select Category</option>
                  <option className='mt-2' value='Hatchback'>Hatchback</option>
                  <option className='mt-2' value='Sedan'>Sedan</option>
                  <option className='mt-2' value='Suv'>Suv</option>
                  <option className='mt-2' value='Vans'>Vans</option>
                </select>
              </div>
            </div>

            {/* Brand Select */}
            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Brand</label>
              <div className="mt-2">
                <select
                  onChange={(e)=>{setBrand(e.target.value)}}
                  value={brand}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option className='mt-2' value='' >Select Brand</option>
                  {carBrands.map(item=>{
                    return<option className='mt-2' value={item} key={item} >{item}</option>
                  })}
                </select>
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Brand Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* Mileage  */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="mileage" className="block text-sm font-medium leading-6 text-gray-900">
               Mileage
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>{setMileage(e.target.value)}}
                  type="number"
                  name="mileage"
                  id="mileage"
                  placeholder='Mileage'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Seating Capacity */}
            <div className="sm:col-span-2">
              <label htmlFor="Capacity" className="block text-sm font-medium leading-6 text-gray-900">
                Seating Capacity
              </label>
              <div className="mt-2">
                <input
                  onChange={(e)=>{setSeating(e.target.value)}}
                  type="number"
                  name="Capacity"
                  id="Capacity"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Year */}
            <div className="sm:col-span-2">
              <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <input
                  type="month"
                  onChange={(e)=>{setYear(e.target.value)}}
                  name="year"
                  id="year"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Color */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
               Color
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  onChange={(e)=>{setColor(e.target.value)}}
                  name="color"
                  id="color"
                  // placeholder='Color'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Rent / Day and month */}
            <div className="sm:col-span-2">
              <label htmlFor="rentDay" className="block text-sm font-medium leading-6 text-gray-900">
                Rent / Day
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  onChange={(e)=>{setRentDay(e.target.value)}}
                  name="rentDay"
                  id="rentDay"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="rentDay" className="block text-sm font-medium leading-6 text-gray-900">
                Rent / Month
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  onChange={(e)=>{setRentMonth(e.target.value)}}
                  name="rentDay"
                  id="rentDay"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Image Uplods */}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 mb-2 text-gray-900">
                Upload Images 
              </label>
              <div className="w-full mx-auto p-4 bg-indigo-50 rounded-xl">
                <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" id="imageUpload" />
                <label htmlFor="imageUpload" 
                className="flex flex-col text-center items-center text-sm font-medium rounded-xl justify-center py-6 border-2 border-dashed  text-indigo-600  border-indigo-200 mb-4 cursor-pointer">
                  <ImageUp className='mb-2' size={30} strokeWidth={1} />
                   Click to upload images <br /> <span className='text-xs text-indigo-300 font-light'>(Max length upto 10 Mb)</span> </label>
                
                <div className="flex flex-col gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative flex gap-3 bg-indigo-100 p-2 rounded-lg">
                      <img
                        src={image.preview}
                        alt={`Uploaded Image ${index}`}
                        className="w-20 h-16 object-cover object-center overflow-hidden rounded-md"
                      />
                      <button
                        onClick={() =>
                          setImages((prevImages) =>
                            prevImages.filter((_, i) => i !== index)
                          )
                        }
                        className="absolute bottom-2 right-2 text-white bg-indigo-600 rounded-full p-2"
                      >
                        <Trash2 strokeWidth={1.5} />
                      </button>

                      <h1 className='max-w-80 numberFont text-gray-700 font-semibold text-base flex flex-col justify-end '>{image.name}
                      <span className='font-medium text-sm'>({(image.size / 1024).toFixed(2)} KB)</span></h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fual  */}
        <div className="mb-5">
          <div className="mt-10 space-y-10">
            
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Fuel or Type</legend>
              <div className="mt-2 flex gap-6 flex-wrap">
                
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Petrol'
                    checked={fual === 'Petrol'}
                    onChange={(e)=>{setFual(e.target.value)}}
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900"> Petrol</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Diesel'
                    checked={fual === 'Diesel'}
                    onChange={(e)=>{setFual(e.target.value)}}
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900"> Diesel </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Electric'
                    checked={fual === 'Electric'}
                    onChange={(e)=>{setFual(e.target.value)}}
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">Electric </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input id="push-email" name="push-notifications"
                    value='Hybrid'
                    checked={fual === 'Hybrid'}
                    onChange={(e)=>{setFual(e.target.value)}}
                    type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">Hybrid </label>
                </div>

              </div>
            </fieldset>
          </div>
        </div>

        {/* Discription Input */}
        <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Discription
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  onChange={(e)=>{setDiscription(e.target.value)}}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


      <div className="mt-6 flex items-center justify-end gap-x-6 ">
        <button type="button" onClick={()=>props.data2(!props.data)} className="px-2 py-2 hover:bg-slate-200 rounded-md text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

      </div>
    </form>
    </div>
  )
}

export default Form
