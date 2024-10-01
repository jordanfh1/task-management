import Image from "next/image";
import styles from "./page.module.css";
import react, { useState } from "react";
import SimpleForm from "./components/Form/Form";


export default function Home() {


  
interface FormData {
  name: string;
  email: string;
}



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const task = formData.get("task");
    console.log(task);
  }


  


  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <SimpleForm />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
