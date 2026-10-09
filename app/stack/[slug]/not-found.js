export default function NotFound() {
  return (
    <div className="container">
      <div className="page-404">
        <div>
          <div className="code">404</div>
          <h2>Stack not found.</h2>
          <p>The stack you&apos;re looking for doesn&apos;t exist — maybe it&apos;s one we haven&apos;t written yet.</p>
          <a className="cta" href="/" style={{ marginTop: 8 }}>BACK TO HOME <span>→</span></a>
        </div>
      </div>
    </div>
  )
}