import { useNavigate } from 'react-router-dom';
function Footer(){
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between', 
      };
    const navigate = useNavigate();
    return(
        <footer className="w-100 py-4 flex-shrink-0" style={{borderTop:'7px solid white'}}>
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
              <button onClick={() => navigate('/home')} style={{ textAlign: 'left', fontSize: '16px', backgroundColor: 'transparent', border: 'none',color:"rgb(0, 102, 255)"}}>Home</button>
            </li>
            <li>
            <button onClick={() => navigate('/general')} style={{ textAlign: 'left', fontSize: '16px', backgroundColor: 'transparent', border: 'none',color:"rgb(0, 102, 255)"}}>Report of Education in India</button>
            </li>
            <li>
            <button onClick={() => navigate('/user')} style={{ textAlign: 'left', fontSize: '16px', backgroundColor: 'transparent', border: 'none',color:"rgb(0, 102, 255)"}}>Get an Overview of Document</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}
export default Footer;