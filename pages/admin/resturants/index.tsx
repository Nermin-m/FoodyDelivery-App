import React from "react";
import Image from "next/image";
import styles from './resturants.module.css';
import Header from "../../../component/header";
import Dashboard from "../../../component/dashboard";
import EaLogo from "../../../component/eacamplogo";
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
                    <button>+ ADD RESTAURANT </button>
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