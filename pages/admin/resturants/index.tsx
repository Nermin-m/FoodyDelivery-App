import React from "react";
import Image from "next/image";
import styles from './resturants.module.css';
import Header from "../../../component/header";
import Dashboard from "../../../component/dashboard";
import EaLogo from "../../../component/eacamplogo";
import AddResturan from '../../../component/addResturant'
import ResturantCard from "../../../component/resturant-card";
export default function Index() {
    return (
        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <EaLogo></EaLogo>
            <section className={styles.ResturantType}>
                <div className={styles.ResturantIn}>
                    <p>Resturants</p>
                    <AddResturan></AddResturan>
                </div>
            </section>
            <section className={styles.section}>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>


                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>


                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>


                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>

            </section>


        </>
    );
}