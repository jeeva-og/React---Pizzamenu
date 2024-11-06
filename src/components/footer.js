export default function Footer() {
  const currentTime = new Date().getTime();
  return <footer className="footer">{currentTime}</footer>;
}
