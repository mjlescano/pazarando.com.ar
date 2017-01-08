import Head from 'next/head'
import { StickyContainer, Sticky } from 'react-sticky'
import CssReset from './CssReset'
import Header from './Header'
import Footer from './Footer'

export default (props) => (
  <div>
    <Head>
      <title>Paz Arando</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <CssReset />
    </Head>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,700');

      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Nunito', sans-serif;
        color: #525252;
        text-rendering: geometricPrecision;
      }

      .container {
        margin-left: auto;
        margin-right: auto;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 960px;
      }

      .tabbed {
        padding-left: 83px;
      }

      img {
        max-width: 100%;
      }

      a {
        color: inherit;
        font-family: inherit;
        font-weight: bold;
        text-decoration: none;
      }

      a:hover,
      a.active {
        color: #f6cf0d;
      }

      h1 {
        font-size: 30px;
        line-height: 1.4;
      }

      p {
        font-size: 20px;
        line-height: 1.3;
      }

      h1 + p {
        margin-top: 10px;
      }

      strong {
        font-weight: bold;
      }
    `}</style>
    <StickyContainer>
      <div style={{padding: '67px 0'}}>
        <Sticky>
          <Header />
        </Sticky>
      </div>
      { props.children }
      <Footer />
    </StickyContainer>
  </div>
)
