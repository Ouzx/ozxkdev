"use client";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import styles from "./DeleteButton.module.scss";
import useAccessToken from "@/hooks/useAccessToken";
import Modal from "../Modal/Modal";

import useSWRMutation from "swr/mutation";

interface Props {
  postId: string;
  postTitle: string;
}

const DeleteButton = ({ postId, postTitle }: Props) => {
  const [token] = useAccessToken();
  const [showModal, setShowModal] = useState(false);

  const { trigger, isMutating } = useSWRMutation("/api/user", deletePost);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const onYes = async () => {
    trigger({ postId, token });
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

async function deletePost(
  url: string,
  { arg }: { arg: { postId: string; token: string | undefined } }
) {
  return fetch(`${process.env.NEXT_PUBLIC_CMS_API}/posts/${arg?.postId!}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${arg?.token}`,
    },
  });
}

export default DeleteButton;
