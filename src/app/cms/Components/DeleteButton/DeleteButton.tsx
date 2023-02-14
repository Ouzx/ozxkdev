"use client";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./DeleteButton.module.scss";
import useAccessToken from "@/hooks/useAccessToken";
import Modal from "../Modal/Modal";

interface Props {
  postId: string;
  postTitle: string;
}

const DeleteButton = ({ postId, postTitle }: Props) => {
  const [token] = useAccessToken();
  const [showModal, setShowModal] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const onYes = async () => {
    console.log("token", token);
    const res = await deletePost(postId, token!);
    setShowModal(false);
    if (res) {
      // refresh page
      window.location.reload();
    }
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

const deletePost = async (postId: string, token: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API}/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.status === 200) return true;
  else return false;
};

export default DeleteButton;
