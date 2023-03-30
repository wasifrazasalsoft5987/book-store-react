import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { Login } from '../Screens/Auth/Login';
import { Register } from '../Screens/Auth/Register';
import { ForgotPassword } from '../Screens/Auth/ForgotPassword';
import { ForgotPassword2 } from '../Screens/Auth/ForgotPassword2';
import { ForgotPassword3 } from '../Screens/Auth/ForgotPassword3';

import { Avatar } from '../Screens/Dashboard/Avatar';
import { Dashboard } from '../Screens/Dashboard/Dashboard';
import { Settings } from '../Screens/Dashboard/Settings';

import { AdminLogin } from '../Screens/Admin/Auth/AdminLogin';
import { AdminDashboard } from '../Screens/Admin/Dashboard/AdminDashboard';
import { Books } from '../Screens/Admin/Dashboard/Books';
import { AddBook } from '../Screens/Admin/Dashboard/AddBook';
import { UpdateBook } from '../Screens/Admin/Dashboard/UpdateBook';
import { Categories } from '../Screens/Admin/Dashboard/Categories';
import { AddCategory } from '../Screens/Admin/Dashboard/AddCategory';
import { UpdateCategory } from '../Screens/Admin/Dashboard/UpdateCategory';
import { Users } from '../Screens/Admin/Dashboard/Users';
import { Protected } from './Protected';
import { Guest } from './Guest';

export const StoreRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route element={<Guest />}> */}
            <Route exact path="/" element={<Login />} />
            <Route path='/login' element={<Navigate to="/" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<ForgotPassword2 />} />
            <Route path="/reset-password" element={<ForgotPassword3 />} />
          {/* </Route> */}

          {/* <Route element={<Protected />}> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/avatar" element={<Avatar />} />

            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/admin/dashboard/book" element={<Books />} />
            <Route path="/admin/dashboard/book/add" element={<AddBook />} />
            <Route path="/admin/dashboard/book/update/:id" element={<UpdateBook />} />

            <Route path="/admin/dashboard/category" element={<Categories />} />
            <Route path="/admin/dashboard/category/add" element={<AddCategory />} />
            <Route path="/admin/dashboard/category/update/:id" element={<UpdateCategory />} />

            <Route path="/admin/dashboard/user" element={<Users />} />
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  )
}
