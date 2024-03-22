import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import avatar1 from '../../img/user_1.jpg';

const Contacts = () => {
    const [showModal, setShowModal] = useState(false);
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        <ContactCard onDelete={() => setShowModal(true)} />
                        <ContactCard />
                        <ContactCard />
                        <ContactCard />
                    </ul>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}

export default Contacts;


