import React from 'react'
import TwoDIvComponents from './TwoDIvComponents'

const AboutUs = () => {
  return (
    <>
    
        <TwoDIvComponents
         first={(<>
            <div className='imageDiv' style={{backgroundImage: 'url(teachers/caro4.png)'}}>
                
            </div>
         </>)} 
        second={(<>
            <div className='p-5'>
                <h3>About Us</h3>
                <p>Hope Academy is a private Special Education school approved by the Connecticut State Department of Education that serves students in grades 1-12 who have not met with success in a traditional academic setting. In addition to our general program, we also offer Transition Services for students between the ages of 18 to 21 who require supports to prepare them for post-secondary education opportunities, career opportunities, and independent living. All students at Hope Academy have access to small class sizes, specialized instruction and individualized academic interventions, intensive clinical services, and embedded therapeutic supports. In addition to maintaining a rigorous academic program focused on college and career readiness, we also provide explicit instruction in social-emotional learning, self-regulation, and executive functioning skills. We service students with a wide range of abilities and needs. Hope Academy welcomes inquiries and referrals from parents, school districts, and community agencies. Our highly qualified team is dedicated to working collaboratively to meet the unique needs of each student we serve.</p>
            </div>
        </>)} 
        />
    </>
  )
}

export default AboutUs