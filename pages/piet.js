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
      <img src='/static/Piet-01.png' />
      <h1>Piet</h1>
      <p>Piet is a clothing brand characterized for being atemporal, sophisticated and functional, starting from simple lines and neutral colours. It’s site intends a visual shock, keeping the attention to product details.</p>
      <p>In collaboration with Matías Lescano we worked in the analysis of the future users, conceptualization of brand, prototyping and development of the e-commerce website.</p>
      <img src='/static/Piet-02.png' />
      <h1>Moodboard</h1>
      <p>We looked for reference outside fashion industry (museums, artists, music bands) and inspired by that we put together a moodboard to figure out how the brand identity was going to be introduced and their story told.</p>
      <img src='/static/Piet-03.png' />
      <h1>User Persona</h1>    
      <p>We define users personas so we could understand who was going to interact with the site. This helped us defining users needs regarding the buying experience like: delivery and payments. But also stock and languages needed from our client side.</p>
      <img src='/static/Piet-04.png' />
      <img src='/static/Piet-05.png' />
      <h1>Wireframing</h1>      
      <p>We wanted to focus the site navigation in the brand’s storytelling. So we seek alternatives that let the users discover the brand’s universe. Finally, the initial scroll and parallax end up defining the site’s the structure.</p>
      <img src='/static/Piet-06.png' />
      <h1>Photoshooting</h1>      
      <p>Once defined the site’s structure we did a photoshooting. This allow us to take all the photos we needed for the parallax scroll we imagined in the wireframes stage. This also helped us in the product page with the product images.</p>
      <img src='/static/Piet-07.png' />
      <h1>UI</h1>      
      <p>It was very important to be able to bring the Sketch grid to css, in order to do so we use Zeplin which allowed us the check the distances and export the assets with better precision.</p>
      <img src='/static/Piet-08.png' />
      <h1>Learnings</h1>      
      <p>In the technical side, implementing the backend for e-commerce of Spree allowed us to assign more time to the frontend development. This way we didn’t sacrifice a good customer experience for our customer in the product and orders management flows.</p>
  </Layout>
)
