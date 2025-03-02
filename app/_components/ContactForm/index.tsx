"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、誠にありがとうございます。
        <br />
        担当者からご連絡いただきさせていただきます。
        <br />
        今しばらくお待ちください。
      </p>
    );
  }

  return (
    <>
      <form className={styles.form} action={formAction}>
        <div className={styles.horizontal}>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="lastname">
              名字<span className={styles.textRed}>* 必須</span>
            </label>
            <input
              className={styles.textfield}
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label} htmlFor="firstname">
              お名前<span className={styles.textRed}>* 必須</span>
            </label>
            <input
              className={styles.textfield}
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="company">
            会社名
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="email">
            Email Address<span className={styles.textRed}>* 必須</span>
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="message">
            お問い合わせ内容 <span className={styles.textRed}>* 必須</span>
          </label>
          <textarea className={styles.textarea} name="message" id="message" />
        </div>
        <div className={styles.actions}>
          {state.status === "error" && (
            <p className={styles.error}>{state.message}</p>
          )}
          <input type="submit" value="送信する" className={styles.button} />
        </div>
      </form>
    </>
  );
}
