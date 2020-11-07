import React from "react";
import styles from "./Profile.module.scss";

const Profile = (props) => {

   
    const { user } = props;
    const userDisplayName = 
    user ? <span>{user.displayName}</span>: <span>guest</span>;
    const userEmail = 
    user ? <span>{user.email}</span>: <span>guest</span>;
    const phoneNumber = 
    user ? <span>{user.phoneNumber}</span>: <span>guest</span>;
    const photoURL = 
    user ? <span>{user.photoURL}</span>: <span>guest</span>;
    const uid = 
    user ? <span>{user.uid}</span>: <span>guest</span>;

    return(
    <div className={styles.profile}>
        <p>Display Name: {userDisplayName}</p>
        <p>Email: {userEmail}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>User ID: {uid}</p>
        </div>
        )};

export default Profile;