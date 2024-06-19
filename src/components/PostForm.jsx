import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

import profileIcon from "../assets/profile.svg";
import styles from "./PostForm.module.css";

import { API_URL } from "../util";

function PostForm({ fetchPosts }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  async function addPost(data) {
    try {
      const response = await axios.post(API_URL, {
        title: data.title,
        text: data.text,
      });

      if (response.status === 201) {
        setSuccess("Ваш пост был создан");
        setError(null);

        reset();

        fetchPosts();

        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        console.error(response);
        setError("Что-то пошло не так, попробуйте еще раз");
        setSuccess(null);
      }
    } catch (error) {
      setError("Что-то пошло не так, попробуйте еще раз");
      setSuccess(null);
      console.error(error);
    }
  }

  return (
    <div className={styles.PostForm}>
      <h2>Написать пост</h2>
      <form onSubmit={handleSubmit(addPost)}>
        <img src={profileIcon} alt="Profile" />
        <div>
          <div className={styles.FormGroup}>
            <div className={styles.FormInput}>
              <label htmlFor="postTitle">Заголовок</label>
              <input
                type="text"
                id="postTitle"
                placeholder="Заголовок"
                {...register("title", {
                  required: "Поле обязательно",
                })}
              />
              {errors.title && (
                <p className={styles.PostFormError}>{errors.title.message}</p>
              )}
            </div>

            <div className={styles.FormInput}>
              <label htmlFor="postText">Текст поста</label>
              <textarea
                type="text"
                id="postText"
                placeholder="Введите текст..."
                {...register("text", {
                  required: "Поле обязательно",
                  minLength: {
                    value: 10,
                    message: "Нужно как минимум 10 символов",
                  },
                })}
              />
              {errors.text && (
                <p className={styles.PostFormError}>{errors.text.message}</p>
              )}
            </div>
          </div>
          {success && <p className={styles.PostFormSuccess}>{success}</p>}
          {error && <p className={styles.PostFormError}>{error}</p>}
          <button className={styles.PostFormButton}>Публикация</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
