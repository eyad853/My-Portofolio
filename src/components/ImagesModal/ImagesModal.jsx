import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ImagesModal = ({ isModalOpen, imageSrc, setIsModalOpen }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (imageSrc) {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                const { width, height } = img;
                setDimensions({ width, height });
            };
        }
    }, [imageSrc]);

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="Image"
            className="fixed bg-transparent outline-none rounded-lg shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            style={{
                content: {
                    width: `${Math.min(dimensions.width, window.innerWidth * 0.9)}px`,
                    height: `${Math.min(dimensions.height, window.innerHeight * 0.9)}px`,
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
        >
            <img
                src={imageSrc}
                alt="Modal Content"
                className="w-full h-full object-contain"
            />
        </Modal>
    );
};

export default ImagesModal;