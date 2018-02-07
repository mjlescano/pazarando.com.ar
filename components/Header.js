import Link from 'next/link'

export default ({ style }) => (
  <header style={style}>
    <style jsx>{`
      header {
        position: relative;
        padding: 20px 0;
        width: 100%;
        background-color: #fff;
      }

      .logo {
        width: 66px;
      }

      nav {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;
      }

      .links {
        font-size: 16px;
        padding-left: 60px;
        border-bottom: .4em solid #f6cf0d;
        text-align: right;
      }

      .links :global(a) {
        font-size: 1.25em;
        line-height: 2em;
        text-transform: uppercase;
      }

      .links :global(span):after {
        font-size: 1.25em;
        padding: 0 .8em;
      }

      .links :global(span):after {
        content: '/';
      }

      @media all and (max-width: 380px) {
        .logo {
          width: 17vw;
        }

        .links :global(a) {
          font-size: 1em;
        }
      }
    `}</style>
    <nav className='container'>
      <Link href='/#home' title='Home'>
        <a><img src='/static/logo.svg' className='logo' /></a>
      </Link>
      <div className='links'>
        <Link href='/#work'><a>Work</a></Link>
        <span />
        <Link href='/#contact'><a>Contact</a></Link>
      </div>
    </nav>
  </header>
)
