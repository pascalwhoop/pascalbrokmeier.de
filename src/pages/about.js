import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { faIconMapper } from '../functions/icons'
import ContactForm from '../components/Contact'
import moment from 'moment'
import Img from 'gatsby-image'

var DATE_FORMAT = 'MM/YY'
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.renderExperience = this.renderExperience.bind(this)
  }

  componentDidMount() {
    this.calculateAge()
  }

  calculateAge() {
    let ageElem = document.getElementById('age')
    let now = new Date()
    let age = now.getFullYear() - 1992
    ageElem.innerHTML = now.getMonth() < 3 ? --age : age
  }

  render() {
    return (
      <div>
        <Layout>
          <Helmet>
            <title>PB</title>
            <meta name="description" content="About me" />
          </Helmet>

          <div id="main">
            <div className="inner" id="about">
              <h1>About me</h1>
              <div className="top">
                <div className="cv-portrait"></div>
                <div
                  className="text"
                  //should contain a "#age" field that we hook into
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.markdownRemark.html,
                  }}
                ></div>
                {/* picture */}
                <Img {...this.props.data.allImageSharp.edges[0].node.fluid}></Img>
              </div>
              {/* CV Timeline */}
              {this.renderExperience()}
              <ContactForm></ContactForm>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
  renderExperience() {
    let positions = this.props.data.positions.edges
      .map(({ node }) => ({
        ...node.data,
        Start: new Date(node.data.Start),
      }))
      .sort((a, b) => a.Start < b.Start) // descending sort
    let education = this.props.data.education.edges
      .map(({ node }) => ({
        ...node.data,
        Start: new Date(node.data.Start),
      }))
      .sort((a, b) => a.Start < b.Start)

    return (
      <div>
        {positions.map(position => (
          <div>
            <pre>{}</pre>
          </div>
        ))}
        <table border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td colspan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Work experience: 2008 - today</span>
                </h2>
              </td>
            </tr>
            {positions.map(p => (
              <tr>
                <td>
                  <span>
                    {p.Start ? moment(p.Start).format(DATE_FORMAT) : ''}
                  </span>{' '}
                  -
                  <span>
                    {' '}
                    {p.End ? moment(p.End).format(DATE_FORMAT) : 'today'}
                  </span>
                </td>
                <td>
                  <p class="cv-institution">
                    <a href={p.URL} target="_blank">
                      {p.Company_Name}
                    </a>
                  </p>
                  <p class="cv-role">{p.Role}</p>
                  <p class="cv-activities">{p.Description}</p>
                </td>
              </tr>
            ))}
            <tr>
              <td colspan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Education — 2008 - today</span>
                </h2>
              </td>
            </tr>
            {education.map(p => (
              <tr>
                <td>
                  <span>
                    {p.Start ? moment(p.Start).format(DATE_FORMAT) : ''}
                  </span>{' '}
                  -
                  <span>
                    {' '}
                    {p.End ? moment(p.End).format(DATE_FORMAT) : 'today'}
                  </span>
                </td>
                <td>
                  <p class="cv-institution">
                    <a href={p.URL} target="_blank">
                      {p.University_Name}
                    </a>
                  </p>
                  <p class="cv-role">{p.Degree_Title}</p>
                  <p class="cv-activities">{p.Description}</p>
                </td>
              </tr>
            ))}

            <tr>
              <td colspan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Internships and community services</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>04/2017 - 08/2017</span>
                </p>
              </td>
              <td>
                <p class="cv-institution">Erasmus Student Network Germany</p>
                <p class="cv-role">
                  <span>National Board member and Partnership Manager</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>03/2015 - 08/2017</span>
                </p>
              </td>
              <td>
                <p class="cv-institution">Erasmus Student Network Köln</p>
                <p>
                  <span>
                    Supporting international students in Cologne, organising
                    trips, get togethers and supporting them with university and
                    other issues. (volunteer &amp; non-profit)
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Summer 2011 (10 weeks)</span>
                </p>
              </td>
              <td>
                <p class="cv-institution">Opitz Consulting GmbH</p>
                <p>
                  <span>
                    Internal IT department support. Focus on Powershell
                    scripting
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p></p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h2>
                  <a>
                    <span></span>
                  </a>
                  <span>Skills, speeches and publications</span>
                </h2>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Languages</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    English - advanced written &amp; spoken (Level C1+),
                    language exchange in 2008/2009, 2015, 2016
                  </span>
                </p>
                <p>
                  <span>German - native speaker</span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Certificates</span>
                </p>
              </td>
              <td>
                <p>
                  <span>Oracle ADF Implementation Specialist - March 2012</span>
                </p>
                <p>
                  <span>
                    C1+ Council of Europe English Certificate - Jan 2015
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Scholarships</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    Deutschlandstipendium (Germany): Sept. 2014 - 08/2017
                  </span>
                </p>
                <p>
                  <span>
                    PROMOS Exchange Scholarship: March 2016 - July 2016
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Speeches</span>
                </p>
              </td>
              <td>
                <p>
                  <span>
                    RuhrJUG Community Meeting - Dec. 2015 - IoT Cloud Comparison
                  </span>
                </p>
                <p>
                  <span>
                    OOP Conference (Munich) - Jan. 2015 - Influences of the IoT
                    on software development
                  </span>
                </p>
                <p>
                  <span>
                    DOAG Conference (Nuremberg) - Nov. 2014 - Internet of Things
                    Prototype
                  </span>
                </p>
                <p>
                  <span>
                    OOP Conference (Munich) - Jan. 2013 - ADF Mobile review
                  </span>
                </p>
                <p>
                  <span>
                    DOAG community meet-up (Munich) - Sept. 2012 - ADF Mobile
                    review{' '}
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Publications</span>
                </p>
              </td>
              <td>
                <p>
                  <a href="https://peerj.com/preprints/2989/" target="_blank">
                    Project level effects of gender on contribution evaluation
                    on GitHub (2017)
                  </a>
                </p>

                <p>
                  <span>
                    <a
                      target="_blank"
                      href="/assets/attachments/java-aktuell.pdf"
                    >
                      Java Aktuell (Germany) - April 2015 - First one home, play
                      some funky tunes (2015)
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a
                      target="_blank"
                      href="https://github.com/pascalwhoop/masterthesis/releases/tag/v1.0"
                    >
                      Masterthesis: Observation-based Reinforcement Learning
                      Within Competitive Simulations (2018)
                    </a>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>Technologies</span>
                </p>
              </td>
              <td>
                <p>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                </p>
                <p>
                  Angular, CSS3, Git(Hub), HTML5, Ionic, JavaScript, MacOS,
                  Python, TypeScript, Unix
                </p>
                <p>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle-thin" aria-hidden="true"></i>
                </p>
                <p>
                  Amazon AWS, Atom, BPM, Django, Docker, GRPC, IntelliJ, Java,
                  Keras, Kubernetes, LaTeX, MongoDB, NoSQL, Protobuf, React,
                  Redux, Scrum, vim
                </p>
                <p>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle-thin" aria-hidden="true"></i>
                  <i class="fa fa-circle-thin" aria-hidden="true"></i>
                </p>
                <p>
                  .NET, Ansible, Azure, C#, Firebase, JavaEE, Kafka, Kotlin,
                  Objective-C, R, Scala, Spark, Spring, Tensorflow
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contact

//uses fragment from Contact component
export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { id: { eq: "aboutme-snippet" } }) {
      id
      html
    }
    allDataYaml {
      edges {
        node {
          owner {
            name
            location
          }
        }
      }
    }
    positions: allAirtable(filter: { table: { eq: "Positions" } }) {
      edges {
        node {
          data {
            Projects
            URL
            Role
            Description
            End
            Start
            Company_Name
          }
        }
      }
    }
    education: allAirtable(filter: { table: { eq: "Education" } }) {
      edges {
        node {
          data {
            University_Name
            Degree_Title
            Description
            Start
            End
          }
        }
      }
    }
    allImageSharp(
      filter: { sizes: { originalName: { eq: "portrait_pascal_2.jpg" } } }
    ) {
      edges {
        node {
          fluid {
            src
                      ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
