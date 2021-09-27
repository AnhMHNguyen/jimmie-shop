import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { uploadImageStart, updateProductStart } from '../../redux/shop/shop.actions'
import { selectImageMessage } from '../../redux/shop/shop.selectors'
import { EditProductContainer, TitleContainer, ImageLabel, CategoryContainer, NumberLabel, NumberInput, DescriptionContainer } from './edit-product.styles'

const EditProduct = ({ product, close }) => {
  const dispatch = useDispatch()
  const imageMessage = useSelector(selectImageMessage)
  const [ productCredentials, setCredentials ] = useState ({
    name: '',
    price: 0,
    image: '',
    brand: '',
    category: '',
    countInStock : 0,
    description: ''
  });
  const { name, price, image, brand, category, countInStock, description } = productCredentials;
  const categoryOption = ['clothes', 'collars', 'hats', 'furniture', 'toys']

  useEffect(() => {
    if(product !== null) setCredentials({...product})
    if(imageMessage !== null) setCredentials({...productCredentials, image: imageMessage})
  }, [product, imageMessage])

  const handleSubmit = async event => {
    event.preventDefault();
    close()
    console.log(product._id)
    dispatch(updateProductStart({
      'name' : name,
      'price' : price,
      'brand': brand,
      'category': category,
      'countInStock' : countInStock,
      'description': description
    }, product._id))
    // dispatch(updateUserStart({email, password, name}));
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    if(file){
      const formData = new FormData()
      formData.append('image', file)
      formData.append('product_id', product._id)
      dispatch(uploadImageStart(formData))
    }
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...productCredentials, [name]: value});
  };
  return (
    <EditProductContainer>
      <TitleContainer>Edit Product</TitleContainer>
      <form onSubmit={handleSubmit}>
      <FormInput 
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
        label='Name'
        required />
       <ImageLabel>
         <span className="label">Image</span>
         <span name='image' onChange={handleChange}>{image}</span>
       </ImageLabel>
      <input type="file" id='image-file' onChange={uploadFileHandler} />
      <CategoryContainer>
        <span className="label">Category</span>
        <select name='category' onChange={handleChange} value={category}>
          {categoryOption.map((cat, index) => 
            <option key={index} value={cat}>{cat}</option>
          )}
        </select>
      </CategoryContainer>
      <NumberLabel>
        <span>In Stock</span>
        <span>Price</span>
      </NumberLabel>
      <NumberInput>
        <input type='number' name='countInStock' onChange={handleChange} value={countInStock} required />
        <input type='number' name='price' onChange={handleChange} value={price} required />
      </NumberInput>
      <DescriptionContainer>
        <span>Description</span>
        <textarea name='description' onChange={handleChange} value={description} rows='5'/>
      </DescriptionContainer>
      <CustomButton type='submit' style={{ width:'100%' }}>Update Changes</CustomButton>
      </form>
    </EditProductContainer>
  )
}

export default EditProduct
