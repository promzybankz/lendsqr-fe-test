import React from "react";
import styles from "../../assets/styles/nav/topbar.module.scss"
import { ReactComponent as Logo } from "../../assets/svgs/lendsqrLogo.svg"
import { ReactComponent as NotiIcon } from "../../assets/svgs/NotiIcon.svg"
import userProfilePic from "../../assets/images/userProfilePic.png"
import { ArrowDownward, ArrowDropDown, SearchOutlined } from "@mui/icons-material";
import { ReactComponent as SearchIcon } from "../../assets/svgs/searchIcon.svg";
import BaseInput from "../base/BaseInput";
export interface CompProps{
}

export default function TopBar(){
    
    return (
        <div className={styles.topbar_wrapper}>
            <div className={styles.topbar_left_wrapper}>
                <Logo />

                <div className={styles.topbar_left_search_wrapper}>
                    <BaseInput type="search" height="40px" placeholder="Search for anything" />
                    <div className={styles.topbar_left_search} color="white">
                        <SearchIcon/>
                    </div>
                </div>
            </div>
            

            <div className={styles.topbar_right_wrapper}>
                <p style={{ textDecoration: 'underline'}} className={styles.topbar_right_text}>Docs</p>
                <NotiIcon className={styles.topbar_right_icon} />
                <div className={styles.topbar_profile_wrapper}>
                    <img className={styles.topbar_right_image} src={userProfilePic} />
                    <p className={styles.topbar_right_text}>Adedeji</p>
                    <ArrowDropDown className={styles.topbar_right_icon} />
                </div>
            </div>
        </div>
    )
}