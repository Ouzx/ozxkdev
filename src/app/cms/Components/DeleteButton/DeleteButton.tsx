"use client";
import React, { useState, useEffect, use } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./DeleteButton.module.scss";
import useAccessToken from "@/hooks/useAccessToken";
import Modal from "../Modal/Modal";
import usePost, { DELETE_POST } from "@/hooks/usePost";

interface Props {
  postId: string;
  postTitle: string;
}

const DeleteButton = ({ postId, postTitle }: Props) => {
  const [token] = useAccessToken();
  const [showModal, setShowModal] = useState(false);
  const { success, loading, error, fetchPost } = usePost(DELETE_POST, postId);

  useEffect(() => {
    if (error) {
      alert("There was an error deleting the post. Please try again later.");
    }
  }, [error]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const onYes = async () => {
    if (loading) return;
    await fetchPost(token);
    setShowModal(false);

    window.location.reload();
  };

  const onNo = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={onClick} className={styles.container}>
        <RxCrossCircled />
      </button>
      {showModal && (
        <Modal
          question="Are you sure you want to delete this post?"
          content={postTitle}
          onYes={onYes}
          onNo={onNo}
        />
      )}
    </>
  );
};

export default DeleteButton;
