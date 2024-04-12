"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login");
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={xlogo} alt="main" width={400} height={400} />
      </div>
      <div className={styles.right}>
        <div className={styles.header}>지금 일어나고 있는 일</div>
        <div className={styles.subheader}>지금 가입하세요</div>
        <div className={styles.body}>
          <button className={styles.button}>Google 계정으로 가입하기</button>
          <button className={styles.button}>Apple에서 가입하기</button>
          <span className={styles.or}>또는</span>
          <Link href="i/flow/signup" className={styles.signupbutton}>
            계정 만들기
          </Link>
        </div>
        <div className={styles.body}>
          <span className={styles.signup}>이미 트위터에 가입하셨나요?</span>
          <Link href="i/flow/login" className={styles.loginbutton}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
