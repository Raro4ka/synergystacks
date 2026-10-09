export default function NotFound() {
  return (
    <div className="container">
      <div className="page-404">
        <div>
          <div className="code">404</div>
          <h2>Nothing here.</h2>
          <p>The page you&apos;re looking for doesn&apos;t exist. Maybe it&apos;s a stack we haven&apos;t written yet — or a broken link.</p>
          <a className="cta" href="/" style={{ marginTop: 8 }}>BACK TO HOME <span>→</span></a>
        </div>
      </div>
    </div>
  )
}