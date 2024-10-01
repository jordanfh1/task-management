import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import SimpleForm from "./components/Form/Form";



export default function Home() {


  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <SimpleForm />

       {/* <TaskList />  */}

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
