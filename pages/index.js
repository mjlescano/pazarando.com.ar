import Layout from '../components/Layout'
import WorkItem from '../components/WorkItem'
import Anchor from '../components/Anchor'

export default () => (
  <Layout>
    <main className='container'>
      <Intro />
      <Anchor id='work' style={{paddingTop: '106px'}}>
        <WorkItem
          heading='UX-UI Case Study'
          title='Tril'
          description="We co-created with our users a new flow. Based in our most engaged trilers' feedback we improved our retention with new users."
          pic='/static/works/Tril-cover.png'
          url='/works/tril' />
        <WorkItem
          heading='UX-UI Case Study'
          title='Piet'
          description='We designed a parallax scroll and use it as a storytelling tool.'
          pic='/static/works/Piet-cover.png'
          url='/works/piet' />
        <WorkItem
          heading='UX-UI Case Study'
          title='GoodPeople'
          description='We worked in the checkout experience looking forward this impact in our general conversion rate.'
          pic='/static/works/Goodpeople-cover.png'
          url='/works/goodpeople' />
        <WorkItem
          heading='UX-UI Case Study'
          title='DEMOS'
          description='We developed a platform where the porteños participated for the first time in the law creation process.'
          pic='/static/works/Demos-cover.png'
          url='/works/demos' />
      </Anchor>
    </main>
  </Layout>
)

const Intro = () => (
  <div style={{ marginBottom: '54px' }}>
    <style jsx>{`
      a {
        font-weight: bold;
      }
    `}</style>
    <h1 className='tabbed'>
      Hola! I’m Paz Arando, <br />a ux-ui designer based in Buenos Aires.
    </h1>
    <h1 className='tabbed'>
      Currently <a href='https://www.mercadolibre.com.ar/' rel='nofollow noopener' target='_blank'>@mercadolibre</a>, before <a href='https://itunes.apple.com/ar/app/tril-things-you-love-from/id988551906' rel='nofollow noopener' target='_blank'>@tril</a>. Also hunting colors<br /> at <a href='https://www.instagram.com/pazarando' rel='nofollow noopener' target='_blank'>@instagram</a>, and writing about how great<br />  internet is at <a href='https://twitter.com/pazarando' rel='nofollow noopener' target='_blank'>@twitter</a> and <a href='https://medium.com/@pazarando' rel='nofollow noopener' target='_blank'>@medium</a>.
    </h1>
    <p className='tabbed'>I’m constantly falling in love with sideprojects you can check them <a href='https://dribbble.com/pazarando' rel='nofollow noopener' target='_blank'>@dribble</a>.</p>
  </div>
)
