import {useState} from 'react';
function User_Body(){
    const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileRemove = () => {
    // Clear the selected file
    setSelectedFile(null);
    // Clear the file input value (works in modern browsers)
    const fileInput = document.getElementById('File');
    if (fileInput) {
      fileInput.value = '';
    }
  };

    return(
        <div>
     <div className="row">
      <div className="col-md-6 col-md-push-7" style={{ backgroundColor: 'rgb(255, 153, 0)',padding:'5% 5%' }}>
        <div className="booking-form" style={{ backgroundColor: 'rgb(255, 173, 51)' }}>
        <h4 style={{color:'#3e485c'}}> Upload your Document and get it's Analysis! </h4>
        <form>
          <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
            <span className="form-label">Name of the Document</span>
            <input className="form-control" type="text" placeholder="Enter your Document Name" id="title" name="Area" required/>
          </div>
          </div>
          </div>
          <div className="row">
            <div className="col-sm-10">
            <span className="form-label">Mention Area to which Document coressponds to</span>
           </div>
           <div className="col-sm-6">
            <input className="form-control" type="text" placeholder="Enter your Area" id="Area" name="Area" required/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
            <span className="form-label">Upload Your File</span>
            <input
          className="form-control"
          type="file"
          id="File"
          onChange={handleFileChange}
          required/>
        {selectedFile && (
          <div>
            <button onClick={handleFileRemove} style={{backgroundColor:'rgb(253,135,0)',marginTop:'2%'}}>Remove</button>
          </div>
        )} </div>
          </div>
          <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <span className="form-label">Select Criteria</span>
                          <select class="form-control" required>
                          <option>--:--</option>
                          <option>Age</option>
                          <option>Gender</option>
                          <option>Locality</option>
                          <option>Financial Condition</option>
                          </select>
                          <span class="select-arrow"></span>
                          </div>
                    </div>
            </div>
          <div className="form-btn" style={{ paddingLeft: '25%' }}>
            <button className="submit-btn">Get Analysis</button>
          </div>
        </form>
      </div>
    </div>
       

    <div className="col-md-6 col-md-pull-5" style={{ backgroundColor: 'rgb(124, 0, 58)'}}>
      <h2>Why do students Drop-Out of schools/colleges</h2>
      <ul>
        <li style={{padding:'2%'}}>
          <strong>Economic Constraints:</strong> Financial struggle, high fees,
          and family income pressure.
        </li>
        <li style={{padding:'2%'}}>
          <strong>Social and Cultural Factors:</strong> Early marriage, gender
          bias, peer pressure, lack of support.
        </li>
        <li style={{padding:'2%'}}>
          <strong>Lack of Quality Education:</strong> Inadequate
          infrastructure, untrained teachers, outdated methods, disinterest among
          students.
        </li>
      </ul>
      <br />
      <h2>Guidelines to use this Page</h2>
      <ol type="1">
        <li style={{padding:'2%'}}>
          <strong>Name:</strong> Enter the name of the user (e.g., name of School
          Headmaster).
        </li>
        <li style={{padding:'2%'}}>
          <strong>Institution's Name:</strong> Enter the name of the institution
          for which analysis is required.
        </li>
        <li style={{padding:'2%'}}>
          <strong>Upload File:</strong> Upload here the file that contains the
          data of students who have dropped from the institution. This file
          should include each student's age, gender, financial condition of the
          family, and the grade in which education was dropped.
        </li>
        <li style={{padding:'2%'}}>
          <strong>Select Criteria:</strong> This is perhaps the most important
          field. From the dropdown, select the criteria over which you want
          analysis and a policy change suggested.
        </li>
        <li style={{padding:'2%'}}>Click on "<strong>Apply Analysis</strong>" and analysis will be shown on the given parameters.</li>
      </ol>
    </div>
    </div>
    </div>
    )
}
export default User_Body