import styles from "./Error.module.css"
import ErrorBg from "../../assets/error-bg.png"
import { useRouteError, useNavigate } from "react-router-dom";
import { Layout } from "../../Layout/Layout";
import { useEffect } from 'react';
import { Routes } from "../../routes";
import { Button } from "../../components/Button/Button";

export function Error() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.container}>
                <img className={styles.img} src={ErrorBg} />
                <div className={styles.content}>
                    <h1 className={styles.number}>404</h1>
                    <h1 className={styles.heading}>Page Not Found</h1>
                    <p className={styles.text}>The page you are looking for doesn't exist or has been removed</p>
                    <Button variant="primary" onClick={() => {
                        navigate(Routes.HOME);
                    }}>
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </Layout>
    )
}