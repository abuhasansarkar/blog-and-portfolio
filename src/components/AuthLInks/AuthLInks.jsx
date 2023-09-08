import Link from "next/link";
import React from "react";
import styles from "./authLinks.module.css";


const AuthLInks = () => {
  // Temporay
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="singin">SingIn</Link>
      ) : (
        <>
          <Link href="write">Write</Link>
          <span  className={styles.link}>SingOut</span>
        </>
      )}
    </>
  );
};

export default AuthLInks;
