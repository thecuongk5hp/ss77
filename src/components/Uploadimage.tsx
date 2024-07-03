import { storage } from "../config/config";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import axios from "axios";
import { useState } from "react";

export default function Uploadimage() {
    const [image,setImage]=useState<any>("");
    const changeImage = (event:React.ChangeEvent<HTMLInputElement>) =>{
        let valueImage:any = event.target.files?.[0];
        // console.log(11111,valueImage);
        setImage(valueImage);
    }
    const uploadImage =  () =>{
        // tien hanh xu ly de upload anh
        const imageRef=ref(storage,`ptit-image/${image.name}`);
        uploadBytes(imageRef,image).then((snapShop) => {
            getDownloadURL(snapShop.ref).then((url)=>{
                console.log("1111",url);
                
            })
        })
    }
  return (
    <div>Uploadimage
        <br />
        <input onChange={changeImage} type="file" />
        <button onClick={uploadImage}>upload</button>
    </div>
  )
}
/*
    tao component product
        + o input nhap ten san pham
        + o input de chon anh
        + button nhan them san pham
        + sau khi them san pham thi san pham vao db.json
    tao file db.json
        + 1 bang: product
 */