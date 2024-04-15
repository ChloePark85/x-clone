export default function Layout({ children, modal }) {
  return (
    <div>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}
