import React from "react";
import styles from './category.module.css'
import Image from "next/image";
import Header from "../../../component/header";
import Dashboard from "../../../component/dashboard";
import Table from "../../../component/table";
import Button from '../../../component/button';
export default function Index() {
    return (

        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <section className={styles.categorySection}>
                <div className={styles.categoryMain}>
                    <p>Category</p>
                    <Button></Button>

                </div>
            </section>
            <Table></Table>

        </>
    );
}