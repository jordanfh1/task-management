import Image from "next/image";
import styles from "./page.module.css";
import react, { useState } from "react";

export default function Home() {

  const [task, setTask] = useState("");
  const [formData, setFormData] = useState({});


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const task = formData.get("task");
    console.log(task);
  }



  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <span>Task</span>
              <input type="text" />
            </label>
          </fieldset>
        </form>
        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
