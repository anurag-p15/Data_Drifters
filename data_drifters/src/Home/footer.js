function Footer(){
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between', 
      };
    return(
        <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      <div className="row gy-4 gx-5" style={containerStyle}>
        <div className="col-lg-4 col-md-6">
          <h5 className="h1 text-white">EduPulse</h5>
          <p className="small text-muted mb-0">
            &copy; Copyrights. All rights reserved.{' '}
          </p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className="text-white mb-3">Quick links</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Report Of Education In India</a>
            </li>
            <li>
              <a href="#">Get an Overview of your Document</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}
export default Footer;