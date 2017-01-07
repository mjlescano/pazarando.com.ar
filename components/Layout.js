import Head from 'next/head'
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
      @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

      body {
        padding-top: 106px;
        font-family: 'Nunito', sans-serif;
        color: #525252;
      }

      .container {
        margin-left: auto;
        margin-right: auto;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 960px;
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
    `}</style>
    <Header />
    { props.children }
    <Footer />
  </div>
)
