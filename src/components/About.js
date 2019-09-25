import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";


const manjula = (
   <>
      <Button animated='horizontal' href="https://github.com/manjulamishra">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/manjula-mishra" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const aaron = (
   <>
      <Button animated='horizontal' href="https://github.com/1aaronscott">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const nick = (
   <>
      <Button animated='horizontal' href="https://github.com/Nburkhal">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/nick-burkhalter-4b0377108/" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const alfredo = (
   <>
      <Button animated='horizontal' href="https://github.com/alqu7095">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/alfredo-quintana-98248a76" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const derek = (
   <>
      <Button animated='horizontal' href="https://github.com/DerekEtman">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/dereketman/" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const dakotah = (
   <>
      <Button animated='horizontal' href="https://github.com/frescocodes">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/dakotah-huey-76439583/" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const brandy = (
   <>
      <Button animated='horizontal' href="https://github.com/BrandyBecker/">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/BrandyBeckerFSW" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const akak = (
   <>
      <Button animated='horizontal' href="https://github.com/Aakak">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="https://www.linkedin.com/in/akak-almaz-46415770/" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const kathryn = (
   <>
      <Button animated='horizontal' href="https://github.com/rhokath">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);

const shawn = (
   <>
      <Button animated='horizontal' href="https://github.com/ShawnM76">
         <Button.Content hidden>GitHub</Button.Content>
         <Button.Content visible>
            <i class="github icon stylesGH" ></i>
         </Button.Content>
      </Button>
      <Button color='linkedin' href="" >
         <Icon name='linkedin stylesLI' /> LinkedIn
   </Button>
   </>
);
//----------------------------------------- cards below -------------------------------------------
const AboutCards = () => (

   // Header Styles
   <>
      <header style={{ backgroundColor: "#F97E03" }}>
         <h1 class="ui huge header">About</h1>
         <p>Info About App</p>
         <hr class="hr"></hr>
         <h2 class="ui large header">Meet our Team</h2>
         <p class="text-content">
            Meet our awesome team of Salty Hackers. We are data miners, machine
           learners, frontend and backend enthusiasts, Web UI lovers, Team Lead
          aka Lambda Students.
        </p>
         <hr class="hr hr-bottom"></hr>
      </header>

      <div className="aboutStyles">
         <Card
            className="aboutCard"
            image="https://avatars2.githubusercontent.com/u/8314540?s=400&v=4"
            header="Manjula Mishra"
            meta="Team Lead"
            description=""
            extra={manjula}
         />


         <Card
            className="aboutCard"
            image="https://ca.slack-edge.com/T4JUEB3ME-UL8CVG7QE-3e8911514771-72"
            header="Aaron Scott"
            meta="Data Engineer"
            description=""
            extra={aaron}
         />


         <Card
            className="aboutCard"
            image="https://avatars3.githubusercontent.com/u/6277592?s=400&v=4"
            header="Nick Burkhalter"
            meta="Data Engineer"
            description=""
            extra={nick}
         />
         <Card
            className="aboutCard"
            image="https://ca.slack-edge.com/T4JUEB3ME-UJZLU7RPX-0133bf5528e4-72"
            header="Alfredo Quintana"
            meta="Machine Learning Engineer"
            description=""
            extra={alfredo}
         />
         <Card
            className="aboutCard"
            image="https://avatars1.githubusercontent.com/u/49086915?s=400&v=4"
            header="Derek Etman"
            meta="Web React II"
            description=""
            extra={derek}
         />
         <Card
            className="aboutCard"
            image="https://ca.slack-edge.com/T4JUEB3ME-ULP6AEAF3-7aa2e18de5a8-72"
            header="Dakotah Huey"
            meta="Web React I"
            description=""
            extra={dakotah}
         />
         <Card
            className="aboutCard"
            image="https://avatars1.githubusercontent.com/u/52930131?s=400&u=b7619fa18bdb25b9beb319c6169e0fc85227e6fa&v=4"
            header="Brandy Becker"
            meta="Web React I"
            description=""
            extra={brandy}
         />
         <Card
            className="aboutCard"
            image="https://avatars0.githubusercontent.com/u/4251464?s=400&v=4"
            header="Akak Almazbekova"
            meta="Web React I"
            description=""
            extra={akak}
         />
         <Card
            className="aboutCard"
            image="https://avatars2.githubusercontent.com/u/46656679?s=400&v=4"
            header="Kathryn Rhoads"
            meta="Web Backend"
            description=""
            extra={kathryn}
         />
         <Card
            className="aboutCard"
            image="https://avatars0.githubusercontent.com/u/47621726?s=400&v=4"
            header="Shawn McManus"
            meta="Web Backend"
            description=""
            extra={shawn}
         />
      </div>
   </>
);

export default AboutCards;

//------------------------------------------------------------------------------------
// code AkAk originally created below vvvvvv
//------------------------------------------------------------------------------------
// import React from "react";

// const About = () => {

//   return (
//     <div className="main-about-container">
//       <div className="team-container">
//         <h1>About</h1>
//         <p>Info about app</p>
//         <h2>Meet our Team</h2>
//         <p class="text-content">
//           Meet our awesome team of Salty Hackers. We are data miners, machine
//           learners, frontend and backend enthusiasts, Web UI lovers, Team Lead
//           aka Lambda Students.
//         </p>
//         <div className="team">
//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UDLR4BNPN-0c9678d6ba84-72"
//               alt="team-member-img"
//             />
//             <h4> Manjula Mishra - Team Lead </h4>
//             <button>
//               <a href="https://github.com/manjulamishra">Github</a>
//             </button>
//           </div>



//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UL8CVG7QE-3e8911514771-72"
//               alt="team-member-img"
//             />
//             <h4> Aaron Scott - Data Engineer </h4>
//             <button>
//               <a href="https://github.com/1aaronscott">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UJEJL8C8J-a79c127e0847-72"
//               alt="team-member-img"
//             />
//             <h4> Nicholas Burkhalter - Data Engineer </h4>
//             <button>
//               <a href="https://github.com/Nburkhal">Github</a>
//             </button>
//           </div>
//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UJZLU7RPX-0133bf5528e4-72"
//               alt="team-member-img"
//             />
//             <h4> Alfredo Quintana - Machine Learning Engineer</h4>
//             <button>
//               <a href="https://github.com/alqu7095">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHDGPKDPA-78665bcefe7c-72"
//               alt="team-member-img"
//             />
//             <h4> Derek Etman - Web React II </h4>
//             <button>
//               <a href="https://github.com/DerekEtman">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULP6AEAF3-7aa2e18de5a8-72"
//               alt="team-member-img"
//             />
//             <h4> Dakotah Huey - Web React I</h4>
//             <button>
//               <a href="https://github.com/frescocodes">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULVJ810SH-c881949bb445-72"
//               alt="team-member-img"
//             />
//             <h4> Brandy Becker - Web React I</h4>
//             <button>
//               <a href="https://github.com/BrandyBecker/">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULK6ULQ0J-b2b2713290b3-72"
//               alt="team-member-img"
//             />
//             <h4> Akak Almazbekova - Web React I</h4>
//             <button>
//               <a href="https://github.com/Aakak">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHZDN5QGZ-73ecc32da8ca-72"
//               alt="team-member-img"
//             />
//             <h4> Kathryn Rhoads - Web Backend </h4>
//             <button>
//               <a href="">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHFU7NM4G-481847adffd7-72"
//               alt="team-member-img"
//             />
//             <h4> Shawn McManus - Web Backend </h4>
//             <button>
//               <a href="https://github.com/ShawnM76">Github</a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UJZLU7RPX-0133bf5528e4-72"
//               alt="team-member-img"
//             />
//             <h4> Alfredo Quintana - Machine Learning Engineer</h4>
//             <button>
//               <a href="https://github.com/alqu7095">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHDGPKDPA-78665bcefe7c-72"
//               alt="team-member-img"
//             />
//             <h4> Derek Etman - Web React II </h4>
//             <button>
//               <a href="https://github.com/DerekEtman">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULP6AEAF3-7aa2e18de5a8-72"
//               alt="team-member-img"
//             />
//             <h4> Dakotah Huey - Web React I</h4>
//             <button>
//               <a href="https://github.com/frescocodes">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULVJ810SH-c881949bb445-72"
//               alt="team-member-img"
//             />
//             <h4> Brandy Becker - Web React I</h4>
//             <button>
//               <a href="https://github.com/BrandyBecker/">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-ULK6ULQ0J-b2b2713290b3-72"
//               alt="team-member-img"
//             />
//             <h4> Akak Almazbekova - Web React I</h4>
//             <button>
//               <a href="https://github.com/Aakak">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHZDN5QGZ-73ecc32da8ca-72"
//               alt="team-member-img"
//             />
//             <h4> Kathryn Rhoads - Web Backend </h4>
//             <button>
//               <a href="">Github</a>
//             </button>
//           </div>

//           <div className="team-members">
//             <img
//               src="https://ca.slack-edge.com/T4JUEB3ME-UHFU7NM4G-481847adffd7-72"
//               alt="team-member-img"
//             />
//             <h4> Shawn McManus - Web Backend </h4>
//             <button>
//               <a href="https://github.com/ShawnM76">Github</a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;