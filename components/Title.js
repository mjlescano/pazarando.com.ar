import Head from 'next/head'

export default ({ children }) => (
  <Head>
    <title>Paz Arando{children && ` | ${children}`}</title>
  </Head>
)
