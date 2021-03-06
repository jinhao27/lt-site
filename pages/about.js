import Head from "next/head";
import Layout from "../components/Layout.js";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Ortexo - About Us</title>
        <meta
          name="description"
          content="Accelerating student success by providing access to new knowledge, insights and opportunities."
        />
      </Head>

      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">About us</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="about-us">
        <div className="page-container container">
          <h1>Who We Are</h1>
            <p style={{lineHeight: '2em'}}>Ortexo is a software-as-a-service product holding company, run by a dedicated group of individuals from all over the world, many of whom are students. Our tagline is “launching innovative technologies”, which is both an homage to our pre-rebranding company name “Launch Tech” and also a concise way to explain exactly what we do: create software that serves the needs of our communities, and help expand our peers’ horizons.
            <br/>
            Ortexo’s mission is to accelerate success by exposing students to new knowledge, opportunities, and innovative software technologies. Our team actively builds and tests products, maintaining a customer-centric mindset, to ensure their effectiveness and overall impact. We hope that what we launch can be a catalyst for growth in many students’ lives.
            </p>
          <h1>Our Team</h1>
          <div className="persons mt-3">
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/calix.png"
                  alt="Ortexo - Calix Huang - Founder and CEO"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Calix Huang</h3>
                  </div>
                  <div className="person-info-links">
                    <a
                      href="https://www.linkedin.com/in/calix-huang/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:calix@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Founder</p>
                <small className="person-description">
                  Calix Huang is a self-taught software engineer who specializes
                  in full-stack development and is employed by multiple SaaS
                  companies. After delivering many influential speeches several
                  major hackathons, his goal is to create his own successful
                  SaaS company.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/kenny.png"
                  alt="Ortexo - Kenny Wu - COO"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Kenny Wu</h3>
                  </div>
                  <div className="person-info-links">
                    <a
                      href="https://www.linkedin.com/in/kennywuconnect/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:kenny@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Chief Operating Officer</p>
                <small className="person-description">
                  Kenny Wu is an operations executive and marketing specialist.
                  He is highly involved with the entrepreneurship community and
                  excels in planning and implementing business operations. On
                  the side, he loves to cook, write articles, and play sports
                  with friends.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/neha.png"
                  alt="Ortexo - Neha Washikar"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Neha Washikar</h3>
                  </div>
                  <div className="person-info-links">
                    <a
                      href="https://www.linkedin.com/in/nehawashikar/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:neha@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Chief Marketing Officer</p>
                <small className="person-description">
                  Neha Washikar is a CS and marketing enthusiast. She is currently the Vice President of Digital Marketing at her school’s DECA chapter, and was the Director of Outreach last year. In her free time, Neha enjoys playing volleyball and painting.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/adelyn.png"
                  alt="Ortexo - Adelyn Chen"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Adelyn Chen</h3>
                  </div>
                  <div className="person-info-links">
                    <a
                      href="https://www.linkedin.com/in/adelynchen/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:adelyn@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Director of Outreach</p>
                <small className="person-description">
                  Adelyn Chen is a student at the Wharton School and works on
                  Ortexo's outreach team. She loves navigating the
                  intersection of business and computer science. Her hobbies are
                  calligraphy, bullet journaling, drinking bubble tea, and
                  watching Korean dramas.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/mitchell.png"
                  alt="Ortexo - Mitchell Artz"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Mitchell Artz</h3>
                  </div>
                  <div className="person-info-links">
                    <a
                      href="https://www.linkedin.com/in/mitchellartz/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:mitchell@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Director of Software Development</p>
                <small className="person-description">
                  Mitchell Artz is a QA tester and security enthusiast,
                  currently studying to get his High School diploma online. He
                  loves testing for security flaws in cloud-based services.
                  Mitchell enjoys playing curling and flying drones.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/malvika.PNG" alt="Ortexo - Malvika Patel" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Malvika Patel</h3>
                  </div>
                  <div className="person-info-links">
                    <a href="https://www.linkedin.com/in/malvika-patel-b325431b2/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:malvika@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Director of Public Relations</p>
                <small className="person-description">
                Malvika Patel is a high school student in Ontario, Canada. She's strongly passionate about computer software and she enjoys learning about revolutionizing computer technologies. In my free time, I enjoy acrylic and oil painting as well as playing badminton.
                </small>
              </div>
            </div>



            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/andrew.png" alt="Ortexo - Andrew Vuong" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Andrew Vuong</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/andrew-vuong-68ba4518a/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Software Engineer</p>
                <small className="person-description">
                  Andrew Vuong, is an incoming freshman in college studying CS and thinking about getting a minor/major in Cognitive Science. He is part of the development team and enjoys developing games and software. In his free time, Andrew enjoys swimming, dragon boat and playing the viola.
                </small>
              </div>
            </div>

            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/ruijia.jpg" alt="Ortexo - Ruijia Xing" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Ruijia Xing</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/ruijia-xing-236752155"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Software Engineer</p>
                <small className="person-description">
                  Ruijia Xing is part of Ortexo's software development team and is currently studying at Carnegie Mellon University. She is interested in artificial intelligence, and she loves to create art, do robotics, and play table tennis in her free time.
                </small>
              </div>
            </div>



            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jinhao.png" alt="Ortexo - Jinhao Xie" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Jinhao Xie</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/jinhaoxie/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Software Engineer</p>
                <small className="person-description">
                  Jinhao Xie is a HS student in Toronto working on developing
                  Ortexo's software products. He enjoys listening to music,
                  playing basketball, and gaming on occasion. He hopes to pursue
                  a degree computer science and eventually work in software/web
                  development.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/angela.png"
                  alt="Ortexo - Angela Chen"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Angela Chen</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/angela-chen-8235521a9/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Angela Chen is the Outreach Coordinator at Project Tech
                  Conferences, a student NPO that runs technology events for
                  students, and hopes to further her own programming knowledge.
                  In her free time, Angela enjoys running, hurdling and
                  listening to music.
                </small>
    </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/elizabeth.png"
                  alt="Ortexo - Elizabeth Field"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Elizabeth Field</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <p className="person-title">Content Writer</p>
                <small className="person-description">
                  Elizabeth Field is a rising senior at Monticello High School
                  in Virginia. She is an inspiring physicist, with passions in
                  mathematical theory, writing/journalism, music, international
                  politics, athletics, community service, research worm holes,
                  and watching Netflix.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/katie.png"
                  alt="Ortexo - Katie Li"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Katie Li</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/katieyli/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Content Writer</p>
                <small className="person-description">
                  Katie Li is a content writer for Ortexo who’s interested
                  in exploring the intersection between writing and computer
                  science. In her free time, she also loves to read, dance, and
                  waste money on boba.
                </small>
              </div>
            </div>

            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/jesse.png"
                  alt="Ortexo - Jesse Cheng"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Jesse Cheng</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a
                      href="https://www.linkedin.com/in/jesse-cheng-271a98103/"
                      target="_blank"
                    >
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Outreach</p>
                <small className="person-description">
                  Jesse Cheng is a HS student, working on Ortexo's outreach team. He enjoys learning about new tech and cares deeply about the environment. In his free time, he loves to do Taekwondo/MMA, play the ukulele, and hang out with friends.
                </small>
              </div>
            </div>
          </div>

          <h1 className="mt-5">Advisory Board</h1>
          <div className="advisors persons mt-3">
            <div className="person advisor" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/jack.png"
                  alt="Ortexo - Jack Chen"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <h3 className="person-name">Jack Chen</h3>
                <p className="person-title">Software Engineer @ Box</p>
              </div>
            </div>
            <div className="person advisor" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/nathaniel.png"
                  alt="Ortexo - Nathaniel Diong"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <h3 className="person-name">Nathaniel Diong</h3>
                <p className="person-title">Founder @ Future Minds Network</p>
              </div>
            </div>
            <div className="person advisor" data-aos="zoom-in">
              <div className="image-cropper">
                <img
                  src="img/people/chinmayi.png"
                  alt="Ortexo - Chinmayi Balusu"
                  className="person-image"
                />
              </div>
              <div className="person-content">
                <h3 className="person-name">Chinmayi Balusu</h3>
                <p className="person-title">
                  Founder + CEO @ Simply Neuroscience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
