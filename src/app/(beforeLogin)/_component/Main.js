import Image from "next/image";
import Link from "next/link";
import style from "./main.module.css";
import xlogo from "/public/xlogo.jpg";

export default function Main() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Image src={xlogo} alt="main" width={400} height={400} />
      </div>
      <div className={style.right}>
        <div className={style.header}>지금 일어나고 있는 일</div>
        <div className={style.subheader}>지금 가입하세요</div>
        <div className={style.body}>
          <button className={style.button}>Google 계정으로 가입하기</button>
          <button className={style.button}>Apple에서 가입하기</button>
          <span className={style.or}>또는</span>
          <Link href="i/flow/signup" className={style.signupbutton}>
            계정 만들기
          </Link>
        </div>
        <div className={style.body}>
          <span className={style.signup}>이미 트위터에 가입하셨나요?</span>
          <Link href="/login" className={style.loginbutton}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
