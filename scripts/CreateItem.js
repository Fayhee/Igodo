import React, {component} from 'react'
import React, { useState } from "react";
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import styled from 'styled-components'

const Layout = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    place-items: center;

    background: #F5F8FF;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 36px 48px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 20px;
    text-align: center;

    p {
        margin-top: -10px;
        color: #777;
    }
`

const BoxUpload = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed #799CD9;
    /* padding: 36px 48px; */
    position: relative;

    height: 350px;
    width: 350px;

    background: #FBFBFF;
    border-radius: 20px;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 350px;
        width: 350px;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`

function CreateItem() {
    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
  
    function handleImageChange(e) {
      if (e.target.files && e.target.files[0]) {
        setTypeFile(e.target.files[0].type);
        let reader = new FileReader();
  
        reader.onload = function (e) {
          setImage(e.target.result);
          setIsUploaded(true);
        };
  
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  
    return (
      <Layout>
        <Container>
          <h2>Upload your image</h2>
          <p>Upload with preview 😁</p>
  
          <BoxUpload>
            <div className="image-upload">
              {!isUploaded ? (
                <>
                  <label htmlFor="upload-input">
                    <img
                      src={FolderIcon}
                      draggable={"false"}
                      alt="placeholder"
                      style={{ width: 100, height: 100 }}
                    />
                    <p style={{ color: "#444" }}>Click to upload image</p>
                  </label>
  
                  <input
                    id="upload-input"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                    onChange={handleImageChange}
                  />
                </>
              ) : (
                <ImagePreview>
                  <img
                    className="close-icon"
                    src={CloseIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImage(null);
                    }}
                  />
                  {typeFile.includes("video") ? (
                    <video
                      id="uploaded-image"
                      src={image}
                      draggable={false}
                      controls
                      autoPlay
                      alt="uploaded-img"
                    />
                  ) : (
                    <img
                      id="uploaded-image"
                      src={image}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  )}
                </ImagePreview>
              )}
            </div>
          </BoxUpload>
  
          {isUploaded ? <h2>Type is {typeFile}</h2> : null}
  
          <h3>Source Code:</h3>
          <a
            href="https://github.com/kingaspx/ImagePreview-React"
            rel="noreferrer"
            target={"_blank"}
            style={{ marginTop: -10 }}
          >
            Available on <b>Github</b>
          </a>
  
          <h3>By Kingaspx</h3>
        </Container>
      </Layout>
    );
  }
  
  export default CreateItem;
  