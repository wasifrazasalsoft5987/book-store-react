import React, { useEffect } from 'react'
import { Card, Col, Nav, NavLink, Row, TabContent, TabPane } from 'react-bootstrap'
import { DashboardLayout } from '../../Components/Layouts/DashboardLayout'
import { AccountTab } from '../../Components/SettingTabs/AccountTab'
import { NotificationTab } from '../../Components/SettingTabs/NotificationTab'
import { ProfileTab } from '../../Components/SettingTabs/ProfileTab'
import { SecurityTab } from '../../Components/SettingTabs/SecurityTab'

export const Settings = () => {

    useEffect(() => {
        document.title = 'Settings | Book Store';
    }, [])

  return (
    <>
    <DashboardLayout>
    <Row>
        <Col sm="11" className="mx-auto">
            
            <Row>
                <Col sm="3">
                    <Card>
                        <div className="card-body">
                            <Nav className="flex-column nav-pills me-3" id="tab" role="tablist" aria-orientation="vertical">

                                <NavLink as="button" className="active" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</NavLink>

                                <NavLink as="button" id="account-tab" data-bs-toggle="pill" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false">Account Settings</NavLink>
                                
                                <NavLink as="button" id="security-tab" data-bs-toggle="pill" data-bs-target="#security" type="button" role="tab" aria-controls="security" aria-selected="false">Security</NavLink>

                                <NavLink as="button" id="notification-tab" data-bs-toggle="pill" data-bs-target="#notification" type="button" role="tab" aria-controls="notification" aria-selected="false">Notification</NavLink>

                            </Nav>
                        </div>
                    </Card>
                </Col>

                <Col sm="9">
                    <Card>
                        <div className="card-body">
                            <TabContent id="v-pills-tabContent">
                                <TabPane className="show active" id="profile" aria-labelledby="profile-tab" tabindex="0">
                                    <ProfileTab />
                                </TabPane>

                                <TabPane id="account" aria-labelledby="account-tab" tabindex="0">
                                    <AccountTab />
                                </TabPane>

                                <TabPane id="security" aria-labelledby="security-tab" tabindex="0">
                                    <SecurityTab />
                                </TabPane>

                                <TabPane id="notification" aria-labelledby="notification-tab" tabindex="0">
                                    <NotificationTab />
                                </TabPane>
                            </TabContent>
                        </div>
                    </Card>
                </Col>
            </Row>
            
        </Col>
    </Row>
    </DashboardLayout>
    </>
  )
}
