import ProductImageUpload from '@/components/admin-view/Image-upload'
import AdminProductTile from '@/components/admin-view/product-tile';
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from '@/config';
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts } from '@/store/admin/product-slice';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const AdminProducts = () => {

  const initialFormData = {
    
    image:null , title:"",
    description:"",
    price:"",
    category:"",
    salePrice:"",
    totalStock:""
  
  }

  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false)
  const [formData, setFormData] = useState(initialFormData)


  const [uploadedImageUrl, setUploadedImageUrl] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false)

  const {productList} = useSelector((state)=> state.adminProducts)

  

  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  const isFormValid = ()=>{
    return Object.keys(formData).map((key)=> formData[key] !== "" ).every((item) => item);
  }

  const onSubmit = (event)=>{
    event.preventDefault();

    currentEditedId !== null ?
    dispatch(editProduct({id:currentEditedId,formData}))
    .then((data)=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
        setFormData(initialFormData);
        setOpenCreateProductsDialog(false);
        setCurrentEditedId(null);
      }
      
      
    }) : dispatch(addNewProduct({
      ...formData,image:uploadedImageUrl
    })).then((data)=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
        setImageFile(null)
        setFormData(initialFormData);
        toast("product addedd successfully");
        setOpenCreateProductsDialog(false)
      }
    })
  }

  const handleDelete = (getCurrentProductId) => {
    dispatch(deleteProduct(getCurrentProductId)).then((data)=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts());
        
      }
    })

  }

  return (

    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                setCurrentEditedId={setCurrentEditedId}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentEditedId(null);
          setFormData(initialFormData);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {
                currentEditedId !== null
                  ? "Edit Product"
                  : "Add New Product"
              }
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6 px-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              
              buttonText={currentEditedId !== null ? "Update Product" : "Add Product"}
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>  )
}

export default AdminProducts
