function Mission(){
        return (
    <div style={{backgroundColor: '#2a2a2a',paddingBottom:'5%'}}>
      <div className="row" style={{ marginBottom: '5%'}}>
        <div className="box">
          <div style={{color: 'white', marginLeft: '5%', textAlign: 'center', marginTop: '10%' }}>
            <p>In line with our philosophy, EduPulse is committed to fostering collaboration and knowledge-sharing with local authorities, government
                 agencies, and educational institutions. We aim to facilitate a collective effort in addressing the multifaceted challenges within the
                  education sector, utilizing robust analysis to provide actionable insights. Together, we aspire to implement effective strategies 
                  and policies that pave the way for a more inclusive, equitable, and prosperous educational landscape for our nation's future
                   generations.
            </p>
          </div>
        </div>
        {/* Box 1 */}
        <div className="box" style={{ marginLeft: '5%',marginTop: '2%' }}>
          <div className="title">
            <h4>Identifying Root Causes </h4>
          </div>
          <div className="info">
            <ul style={{ listStyleType: 'disc' }}>
              <li>Find root causes of student drop-outs in India.</li>
              <li>Confirm these causes with on-field check.</li>
              <li>Asking local people and getting their reviews.</li>
            </ul>
          </div>
        </div>
        {/* Box 2 */}
        <div className="box" style={{marginTop: '2%'}}>
          <div className="title">
            <h4>Inform Evidence-Based Solutions</h4>
          </div>
          <div className="info">
            <ul style={{ listStyleType: 'disc' }}>
              <li>Provide data driven analytics and insights based on specific region.</li>
              <li>Offer evidence-based solutions and recommendations to educational institutions, policymakers, and organizations working to 
                reduce dropout rates.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: '5%' }}>
        {/* Box 3 */}
        <div className="box" style={{ marginLeft: '5%' }}>
          <div className="title">
            <h4>Promote Inclusivity</h4>
          </div>
          <div className="info">
            <ul style={{ listStyleType: 'disc' }}>
              <li>To foster an inclusive education system where every student has an equal opportunity to thrive.</li>
              <li>Advocating for policies and practices that ensure equal access to education for all students regardless of social barriers and locations. </li>
            </ul>
          </div>
        </div>
        {/* Box 4 */}
        <div className="box">
          <div className="title">
            <h4>Stakeholders and Government</h4>
          </div>
          <div className="info">
            <ul style={{ listStyleType: 'disc' }}>
              <li>Providing Stakeholders and Government insights of various data and inspring them to make decisions</li>
              <li>To support students by various policies made with Stakeholders and Government</li>
            </ul>
          </div>
        </div>
        {/* Box 5 */}
        <div className="box">
          <div className="title">
            <h4>Create a Brighter Future</h4>
          </div>
          <div className="info">
            <ul style={{ listStyleType: 'disc' }}>
              <li>Aim and work tirelessly to provide insights and suggestions to reduce the drop-out of students</li>
              <li>Work with various Government and NGO's in tackling these issues.</li>
              <li>Making sure that every child is educated.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission