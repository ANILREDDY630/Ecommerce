import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import axios from 'axios';

export const Productform = () => {
   const [images, setImage] = useState([]);
   const [previewimg, setPreview] = useState([]);
   const [name, setname] = useState("");
   const [description, setdescription] = useState("");
   const [category, setcategory] = useState("");
   const [tags, settags] = useState("");
   const [price, setprice] = useState("");
   const [stock, setstock] = useState("");
   const [email, setemail] = useState("");

   const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
      setImage((prev) => [...prev, ...files]);
      const imagePreviews = files.map((file) => URL.createObjectURL(file));
      setPreview((prev) => [...prev, ...imagePreviews]);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('tags', tags);
      formData.append('price', price);
      formData.append('stock', stock);
      formData.append('email', email);
      images.forEach((image) => formData.append('images[]', image));

      console.log(formData);

      try {
         const res = await axios.post('http://localhost:3000/api/products', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
         });

         if (res.status === 200) {
            alert("Product is added successfully");
            setImage([]);
            setPreview([]);
            setname("");
            setdescription("");
            setcategory("");
            settags("");
            setprice("");
            setstock("");
            setemail("");
         }
      } catch (err) {
         console.log(err);
      }
   };

   const categoriesData = [
      { title: "Electronics" },
      { title: "Fashion" },
      { title: "Books" },
      { title: "Home Appliance" }
   ];

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className='mt-4'>
               <label className='pb-1 block'>
                  Email <span className='text-red-500'>*</span>
               </label>
               <input
                  type='email'
                  value={email}
                  className='w-full p-2 border rounded'
                  onChange={(e) => setemail(e.target.value)}
                  placeholder='Enter Your Email'
                  required
               />
            </div>

            <div className='mt-4'>
               <label className='pb-1 block'>
                  Upload Images <span className='text-red-500'>*</span>
               </label>
               <input
                  type='file'
                  name='image'
                  id='upload'
                  className='hidden'
                  multiple
                  onChange={handleImageChange}
                  required
               />
               <label htmlFor="upload" className='cursor-pointer'>
                  <AiOutlinePlusCircle size={25} className='text-blue-500' />
               </label>

               <div className='flex flex-wrap mt-2'>
                  {previewimg.map((img, index) => (
                     <div key={index} className='relative'>
                        <img src={img} alt="preview" className='w-32 h-32 object-cover m-2' />
                     </div>
                  ))}
               </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Submit
            </button>
         </form>
      </div>
   );
};