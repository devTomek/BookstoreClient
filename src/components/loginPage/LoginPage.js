import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import styles from "./LoginPage.module.scss";

const LoginPage = ({ backgroundPicture, isPasswordValid, getLogin, getPassword, handleSubmit }) =>
    <div className={styles.wrapper} style={{ background: `url(${backgroundPicture}) center` }}>
        <Form className={styles.loginForm} onSubmit={handleSubmit}>
            <FormGroup className={styles.formGroup}>
                <Label className={styles.label}>Login</Label>
                <Input
                    type="email"
                    placeholder="example@domain.com"
                    required
                    bsSize="lg"
                    onChange={getLogin} />
            </FormGroup>
            <FormGroup className={styles.formGroup}>
                <Label className={styles.label}>Password</Label>
                <Input type="password" required bsSize="lg" onChange={getPassword} invalid={!isPasswordValid()} />
            </FormGroup>
            <Button size="lg" className={styles.button}>Submit</Button>
        </Form>
    </div>;

LoginPage.propTypes = {
    getLogin: PropTypes.func.isRequired,
    getPassword: PropTypes.func.isRequired,
    isPasswordValid: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    backgroundPicture: PropTypes.string,
};

LoginPage.defaultProps = {
    backgroundPicture: "",
};

export default LoginPage;