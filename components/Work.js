import Layout from '../components/Layout'

export default ({ children }) => (
  <Layout>
    <div className='work'>
      <style jsx>{`
        .work :global(img) {
          display: block;
          width: 100%;
          margin-bottom: 51px;
        }

        .work :global(p) {
          margin-bottom: 51px;
        }

        .work :global(p + p) {
          margin-bottom: 0;
        }
      `}</style>
      { children }
    </div>
  </Layout>
)
