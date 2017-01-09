import Layout from '../components/Layout'

export default () => (
  <Layout>
    <style jsx>{`
      img {
        margin-bottom: 51px;
      }

      p {
        margin-bottom: 51px;
      }

      p + p {
        margin-bottom: 0;
      }
    `}</style>
    <div className='container'>
      <img src='/static/Goodpeople-01.png' />
      <h1>GoodPeople</h1>
      <p>GoodPeople is an online marketplace for the extreme sports lovers. The startup begun in Buenos Aires with a small group of friends selling their own skateboards. The online forum became an ecommerce with a strong community of fans. After their first investors round they started selling action sports gear in the US and bringing more brands to the marketplace.</p>
      <h1>Single page Checkout</h1>
      <p>We worked with a marketing team in order to improve the checkout rate. The process implied studying metrics, payment and delivery systems integration, testing and design of the interface to offer support during development.</p>
      <img src='/static/Goodpeople-02.png' />
      <h1>Definition</h1>
      <p>We needed to improve the checkout conversion rate. In order to do this we studied industry benchmarks with SimilarWeb and the funnels within GoodPeople with Google Analytics and Kissmetrics.</p>
      <img src='/static/Goodpeople-03.png' />
      <h1>Research</h1>    
      <p>During the research stage we analyze all the necessary integrations (Braintree, MercadoPago, OCA) to figure out their limitations. We split the forms in modules that could be validated - in background- while the user keeps filling the rest of the form.</p>
      <img src='/static/Goodpeople-04.png' />
      <h1>Wireframing</h1>      
      <p>Looking to reduce the quantity of clicks and improve the abandon rates, we comprised all the information in on page. We tested different form layouts to understand which one was easier to interact with.</p>
      <img src='/static/Goodpeople-05.png' />
      <img src='/static/Goodpeople-06.png' />
      <h1>UI</h1>      
      <p>With the goal to retain the UI simpler we focused on studying behaviour surrounding the options for shopping and the “Buy” button. In order to define its shape, wording and color options were tested with using an Invision prototype in usertesting.com</p>
      <img src='/static/Goodpeople-06.png' />
      <h1>Laernings</h1>      
      <p>The goal was to have the new checkout implemented for the CyberMonday, and thus measure the impact with a high volume of visits and sales. Even when other changes were introduced in the site, the conversion rate increased a 74% in relation to prior data. <br /> Definitely the top challenge laid in understanding the integrations and validate the ideas that came up from the paper prototypes of the development team. It was an interesting and fluid job between both teams that puts us all in the same page for the upcoming projects.</p>
  </Layout>
)
