import React from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import styles from "./LoginPage.module.scss";

const LoginPage = ({ backgroundPicture }) =>
    <div className={styles.wrapper} style={{ background: `url(${backgroundPicture}) center` }}>
        <Form className={styles.loginForm}>
            <FormGroup className={styles.formGroup}>
                <Label className={styles.label}>Login</Label>
                <Input type="email" placeholder="example@domain.com" required bsSize="lg" />
            </FormGroup>
            <FormGroup className={styles.formGroup}>
                <Label className={styles.label}>Password</Label>
                <Input type="password" required bsSize="lg" />
            </FormGroup>
            <Button size="lg" className={styles.button}>Submit</Button>
        </Form >
    </div>


export default LoginPage;