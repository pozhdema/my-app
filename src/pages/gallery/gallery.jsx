import React, {useEffect, useState} from "react";
import '../home/home.css';
import {withNamespaces} from "react-i18next";
import './gallery.css'

const GalleryPhoto = React.memo(props => {
    const {t} = props;
    const [images, setImages] = useState([]);
    useEffect(() => {
        document.querySelector("#root").addEventListener("click", (event)=>{
            if (event.target.classList.contains("modal")){
                hideModal()
            }
        }, false);

        fetch("/photos.json")
            .then(response => response.json())
            .then(data => {
                setImages(data);
            })
    }, []);


    const [show, setShow]= useState(false);
    const [curentPhoto, setCurentPhoto] = useState([]);

    const  showModal = (event,data) => {
        setShow(true);
        setCurentPhoto(data);
    };

    const hideModal = () => {
        setShow(false);
    };

    const Modal = ({ handleClose, show, children, curentPhoto}) => {
        const showHideClassName = show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <button onClick={handleClose}>Close</button>
                </section>
            </div>
        );
    };



    return (
        <div className='pages'>
            <h1>{t('nav.gallery')}</h1>
            <Modal show={show} handleClose={hideModal} curentPhoto={curentPhoto}>
                <img
                    id={curentPhoto.id}
                    src={`${curentPhoto.src}`}
                    width={curentPhoto.width}
                    height={curentPhoto.height}
                    alt={curentPhoto.alt}
                />
            </Modal>

            <div className='wrapper-images'>
                {images.map((image, index)  => (
                    <div className='img' key={index} onClick={(event)=>{showModal(event,image)}}>
                        <img
                            id={image.id}
                            src={`${image.src}`}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
});

export default withNamespaces('common')(GalleryPhoto);