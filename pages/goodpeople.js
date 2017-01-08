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
      <img src='https://satyr.io/940x475' />
      <h1>GoodPeople single page Checkout.</h1>
      <p>We worked with a marketing team in order to improve the checkout rate. The process implied studying metrics, payment and delivery systems integration, testing and design of the interface to offer support during development.</p>
      <img src='https://satyr.io/940x475' />
      <h1>GoodPeople single page Checkout.</h1>
      <p>We worked with a marketing team in order to improve the checkout rate. The process implied studying metrics, payment and delivery systems integration, testing and design of the interface to offer support during development.</p>
    </div>
  </Layout>
)
