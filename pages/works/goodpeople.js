import Title from '../../components/Title'
import Work from '../../components/Work'

export default () => (
  <Work>
    <Title>GoodPeople</Title>
    <div className='container'>
      <h1>The brand | GoodPeople</h1>
      <p>GoodPeople is an online marketplace for the extreme sports lovers. The startup begun in Buenos Aires with a small group of friends selling their own skateboards. The online forum became an e-commerce with a strong community of fans. After their first investors round they started selling action sports gear in the US and bringing more brands to the marketplace.</p>
      <h1>The project | Single page checkout</h1>
      <p>We worked with a marketing team in order to improve the checkout rate. The process implied studying metrics, payment and delivery systems integration, testing and design of the interface to offer support during development.</p>
    </div>
    <img src='/static/works/Goodpeople - 01.png' />
    <div className='container'>
      <h1>Stage 1 | Definition</h1>
      <p>We needed to improve the checkout conversion rate. In order to do this we studied industry benchmarks with <a href='https://www.similarweb.com/' rel='noopener noreferer' <strong>SimilarWeb</strong></a> and the funnels within GoodPeople with <a href='https://analytics.google.com/analytics/web/' rel='noopener noreferer' <strong>Google Analytics</strong></a> and <a href='https://www.kissmetrics.com/' rel='noopener noreferer' <strong>Kiss Metrics</strong></a>.</p>
    </div>
    <img src='/static/works/Goodpeople - 02.png' />
    <div className='container'>
      <h1>Stage 2 | Research</h1>
      <p>We analyze all the necessary integrations (Braintree, MercadoPago, OCA) to figure out their limitations. We split the forms in modules that could be validated -in background- while the user keeps filling the rest of the form.</p>
    </div>
    <img src='/static/works/Goodpeople - 03.png' />
    <div className='container'>
      <h1>Stage 3 | Wireframing</h1>
      <p>Looking to reduce the quantity of clicks and improve the abandon rates, we comprised all the information in on page. We tested different form layouts to understand which one was easier to interact with.</p>
    </div>
    <img src='/static/works/Goodpeople - 04.png' />
    <div className='container'>
      <h1>Stage 4 | Design</h1>
      <p>With the goal to retain the UI simpler we focused on studying behaviour surrounding the options for shopping and the “Buy” button. In order to define its shape, wording and color options were tested with using an <a href='https://www.invisionapp.com/' rel='noopener noreferer' <strong>Invision</strong></a> prototype in <a href='https://www.usertesting.com/' rel='noopener noreferer' <strong>UserTesting.</strong></a></p>
    </div>
    <img src='/static/works/Goodpeople - 05.png' />
    <img src='/static/works/Goodpeople - 06.png' />
    <div className='container'>
      <h1>Learnings | Cybermonday</h1>
      <p>The goal was to have the new checkout implemented for the CyberMonday, and thus measure the impact with a high volume of visits and sales. Even when other changes were introduced in the site, the conversion rate increased a 74% in relation to prior data. </p>
      <p>Definitely the top challenge laid in understanding the integrations and validate the ideas that came up from the paper prototypes of the development team. It was an interesting and fluid job between both teams that puts us all in the same page for the upcoming projects.</p>
    </div>
    <img src='/static/works/Goodpeople - 07.png' />
  </Work>
)
