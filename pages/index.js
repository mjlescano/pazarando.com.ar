import Layout from '../components/Layout'
import WorkItem from '../components/WorkItem'
import Anchor from '../components/Anchor'

export default () => (
  <Layout>
    <main className='container'>
      <Intro />
      <Anchor id='work'>
        <WorkItem
          heading='UX-UI Case Study'
          title='GoodPeople single page Checkout.'
          description='We worked with a marketing team in order to improve the checkout rate.'
          pic='https://satyr.io/460x323'
          url='/goodpeople' />
        <WorkItem
          heading='UX-UI Case Study'
          title='GoodPeople single page Checkout.'
          description='We worked with a marketing team in order to improve the checkout rate.'
          pic='https://satyr.io/460x323'
          url='/goodpeople' />
        <WorkItem
          heading='UX-UI Case Study'
          title='GoodPeople single page Checkout.'
          description='We worked with a marketing team in order to improve the checkout rate.'
          pic='https://satyr.io/460x323'
          url='/goodpeople' />
        <WorkItem
          heading='UX-UI Case Study'
          title='GoodPeople single page Checkout.'
          description='We worked with a marketing team in order to improve the checkout rate.'
          pic='https://satyr.io/460x323'
          url='/goodpeople' />
      </Anchor>
    </main>
  </Layout>
)

const Intro = () => (
  <div style={{marginBottom: '160px'}}>
    <style jsx>{`
      a {
        font-weight: bold;
      }
    `}</style>
    <h1 className='tabbed'>
      Hola! I’m Paz Arando, <br />a ux-ui designer based in <strong>Buenos Aires</strong>.
    </h1>
    <h1 className='tabbed'>
      Currently living the startup life at <a href='https://itunes.apple.com/ar/app/tril-things-you-love-from/id988551906' rel='nofollow noopener' target='_blank'>@tril</a>. But also hunting colors<br /> at <a href='https://www.instagram.com/pazarando/' rel='nofollow noopener' target='_blank'>@instagram</a>, and writing about how great<br />  internet is at <a href='https://twitter.com/pazarando' rel='nofollow noopener' target='_blank'>@twitter</a>.
    </h1>
    <p className='tabbed'>I’m also easily falling in love with sideproyects you can check them <a href='https://dribbble.com/pazarando' rel='nofollow noopener' target='_blank'>@dribble</a>.</p>
  </div>
)
