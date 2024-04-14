import React, { useState } from "react";
import '../css/Modal.css'

const Modal = (props) => {
    const [modalTriggered, setModalTriggered] = useState(true);
  
    const handleModalTrigger = () => setModalTriggered(!modalTriggered);
  
    return (
      <React.Fragment>
        <button
          onClick={handleModalTrigger}
          aria-expanded={!modalTriggered ? true : false}
          className="btn btn-primary"
          id="readMoreBtn"
          data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        >
          Read more
        </button>
  
        <div>
        <div style={{ display: modalTriggered ? 'block' : 'none' }} >
            <div class="modal-dialog modal-dialog-scrollable" id="modal">
                <div className="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Link to Resource</h1>
                </div>
                <div className="modal-body">
                  <p>Unlock the secrets of gaming with our comprehensive tutorials! </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleModalTrigger} data-bs-dismiss="modal" aria-label="Close">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
export default Modal;