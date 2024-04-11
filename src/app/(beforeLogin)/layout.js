export default function Layout({ children, modal }) {
  return (
    <div>
      비포 로그인 레이아웃
      <div>{children}</div>
      <div>{modal}</div>
    </div>
  );
}
