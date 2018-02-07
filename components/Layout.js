import Head from 'next/head'
import { StickyContainer, Sticky } from 'react-sticky'
import Title from './Title'
import Header from './Header'
import Footer from './Footer'
import Anchor from './Anchor'

export default ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Title />
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito:300,700');

      * {
        box-sizing: border-box;
      }

      html, body, h1, h2, h3, h4, h5, h6, p, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-weight: normal;
      }

      body {
        padding-top: 47px;
        font-family: 'Nunito', sans-serif;
        line-height: 1;
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

      @media all and (min-width: 996px) {
        .tabbed {
          padding-left: 83px;
        }
      }

      img {
        max-width: 100%;
      }

      a {
        color: inherit;
        font-family: inherit;
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
    <Anchor id='home' />
    <StickyContainer>
      <div style={{ paddingBottom: '47px' }}>
        <Sticky>
          {({ style }) => <Header style={style} />}
        </Sticky>
      </div>
      { children }
      <Footer />
    </StickyContainer>
  </div>
)
