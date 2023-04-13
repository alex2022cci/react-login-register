import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from "../components/Layout"



function Dashboard(){
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const logoutAction = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        navigate('/login');
    }

    return (
        <Layout>
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Dashboard</div>
                            <div className="card-body">
                                <p className="card-text">You are logged in!</p>
                                <button className="btn btn-primary" onClick={(e)=>logoutAction(e)}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

