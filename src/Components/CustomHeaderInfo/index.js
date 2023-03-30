import React from 'react'
import { Col, Image } from 'react-bootstrap'

export const HeaderInfo = (props) => {
  return (
    <>
    <Col sm={{span: props.sm, offset: props.offset}} className={props.class}>
        <div className="d-flex flex-direction-row">
            <div className="border d-flex justify-content-center align-items-center rounded-circle overflow-hidden" 
                    style={{width: 75+'px', height: 75+'px'}}>
                <Image src="" alt="User" className="w-100" />
            </div>
            <div className="ms-3 d-flex align-items-center">
                <div>
                    <h4 className="m-0">Fullname</h4>
                    <h6 className="text-muted m-0">@username</h6>
                </div>
            </div>
        </div>
    </Col>
    </>
  )
}
