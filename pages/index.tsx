import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../components/homePage/homePage";
import ClientLayout from "../layoutClient/clientLayout";
import Index from "./admin/dashboard/Index";
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <ClientLayout>
                <HomePage></HomePage>
            </ClientLayout>


        </div>
    );
};

export default Home;
