import { Modal } from 'bootstrap';

const initializeModal = () => {
    const modalElement = document.getElementById('dataModal');
    const modal = new Modal(modalElement);
    return modal;
};

export { initializeModal };