import React from 'react'
import { ModalHeader, ModalBody, ModalDialog, ModalFooter, ModalTitle, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export const ReadBookModal = () => {
  return (
    <>
    <div className="modal modal-lg fade" id="book-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ModalDialog>
            <div className="modal-content">
                <ModalHeader>
                    <ModalTitle className="fs-5" id="exampleModalLabel">About Book</ModalTitle>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </ModalHeader>
                <ModalBody>
                    <div className="bg-white text-center" style={{ height: 200+"px" }}>
                        <Image src="" alt="book cover" className="h-100 img-thumbnail" />
                    </div>
                    <div className="mt-3">
                        <h1 className="text-center">Introduction to Programming</h1>
                        <div className="text-center mb-3">
                            <span className="me-2">
                                <FontAwesomeIcon icon={faTag} className="text-muted fa-sm" />
                                <span className="ms-1 text-decoration-none text-muted fw-normal">Informative</span>
                            </span>
                            <span className="me-2">
                                <FontAwesomeIcon icon={faUser} className="text-muted fa-sm" />
                                <span className="ms-1 text-decoration-none text-muted fw-normal">John Doe</span>
                            </span>
                            <span className="me-2">
                                <FontAwesomeIcon icon={faCalendar} className="text-muted fa-sm" />
                                <span className="ms-1 text-decoration-none text-muted fw-normal">27/09/2012</span>
                            </span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Order yours in just 1500 rupees only!</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" className="btn-secondary btn-sm px-4" data-bs-dismiss="modal">Close</Button>
                </ModalFooter>
            </div>
        </ModalDialog>
    </div>
    </>
  )
}
