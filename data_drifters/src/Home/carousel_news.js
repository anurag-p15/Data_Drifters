import { Carousel, Container } from 'react-bootstrap';
function Cara_News(){
return(
<div className="row" style={{paddingBottom:"5%",borderBottom:"7px white solid"}}>
<div>
<h4 style={{ marginBottom: '2%',margin:"5% 2%"  }}>
<b>Wiping Out Illiteracy Throughout India</b>
</h4>
</div>
<Container fluid >
<Carousel id="demo" fade={true} pause={false} interval={2000}>
<Carousel.Item>   
<div className="emp-info" style={{backgroundColor:"rgb(130, 100, 30)"}}>
<div>
  <p style={{textAlign:"Center"}}>Comprehensive National Education Assessment</p>
</div>
<div style={{margin: "2% 10%"}}>
<p>
At the EduPulse, we are dedicated to advancing the cause of education as a powerful instrument of societal growth and individual empowerment. Our mission is to conduct comprehensive surveys and provide evidence-based policies that guide government initiatives to enhance education across the nation.
We firmly believe that education is the cornerstone of progress and opportunity. It is our unwavering commitment to ensure that every citizen, regardless of their background, has access to a world-class education system that unlocks their potential.
Our surveys are more than just data collection; they are a window into the heart of our education landscape. They reveal the challenges, disparities, and strengths within our system, guiding us to craft policies that create lasting change
</p>
</div>
</div>
</Carousel.Item>
<Carousel.Item>
<div className="emp-info" style={{backgroundColor:"rgb(84, 0, 60)"}}>
<div>
  <p style={{textAlign:"Center"}}>Providing Insights about various Factors</p>
</div>
<div style={{margin: "2% 10%"}}>
<p>
Our research is dedicated to providing valuable insights into the multifaceted factors shaping our society. We delve deep into variables such as caste, financial status, and other critical factors that influence the educational landscape.

By exploring these dimensions, we aim to shed light on disparities, highlight opportunities, and craft informed policies that foster inclusivity and equity within our education system.

Through our research, we unveil the intricacies of these factors and their impact on educational outcomes, guiding us toward more effective strategies for positive change.

We believe that knowledge is the first step toward transformation. It's our commitment to empower policymakers, educators, and communities with the insights needed to create a fair and inclusive educational environment for all. Together, we can build a brighter future, free from the shackles of inequality, and ensure that every individual has the opportunity to realize their full potential.
</p>
</div>
</div>
</Carousel.Item>
<Carousel.Item>
<div className="emp-info" style={{backgroundColor:"rgb(140, 140, 140)"}}>
<div>
  <p style={{textAlign:"Center"}}>Get Insights for your own data</p>
</div>
<div style={{margin: "2% 10%"}}>
<p>
Unveil Dropout Insights with Ease and AI-Powered Policies!
At EduPulse, we understand the urgency of addressing student dropout rates in education.
 We offer a user-friendly solution that empowers you to gain crucial insights from your dropout data, while our AI model generates policy suggestions to tackle the issue effectively.
 Just upload your Excel sheet or CSV file, select the type of analysis you need and get a detialed report for same.
</p>
</div>
</div>
</Carousel.Item>
</Carousel>
</Container>

<div class="row" style={{marginTop:"5%"}}>
<h4>Latest News from Organization</h4>
<div className="news">
        <div className="news-date">19 September, 2023</div>
        <h2 className="news-title"><a href="#"> Report of New Education Policy</a></h2>
        <p className="news-details">The release of the New Education Policy Report marks a pivotal moment in Indian education system. This extensive report provides a detailed overview of the policy's objectives, strategies, and anticipated impacts. It promises to revolutionize education, fostering innovation, equity, and excellence for learners across the nation and how it will 
        help in States and nation on a whole to identify new talent.</p>
      </div>
</div>
<div className="news">
        <div className="news-date">13 April, 2023</div>
        <h2 className="news-title"><a href="#"> Report of Education Survey 22-23</a></h2>
        <p className="news-details">The formal Education Survey Report for the academic year 2022-2023 has been released, presenting a comprehensive analysis of the current educational landscape. This report serves as a critical resource, providing in-depth insights into educational trends, challenges, and prospects, which will inform strategic decisions and policy initiatives for the advancement of education in the coming years. </p>
      </div>
<div className="news">
        <div className="news-date">1st April, 2023</div>
        <h2 className="news-title"><a href="#">Establishment Of EduPulse</a></h2>
        <p className="news-details">EduPulse, an Organizationfocusing on providing insightful reports on school dropout surveys conducted across India. Our mission is to identify and understand the multifaceted factors leading to student dropout rates, enabling evidence-based solutions for a more inclusive education system. Join us as we work towards creating a brighter future for students across the nation through data-driven insights. </p>
      </div>
</div>)
}
export default Cara_News
