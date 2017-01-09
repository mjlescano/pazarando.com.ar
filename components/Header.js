import Link from 'next/prefetch'

export default (props) => (
  <header>
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
        padding-left: 60px;
        border-bottom: 6px solid #f6cf0d;
        text-align: right;
      }

      .links :global(a) {
        font-size: 20px;
        line-height: 2em;
        text-transform: uppercase;
      }

      .links :global(span):after {
        font-size: 20px;
        padding: 0 .8em;
      }

      .links :global(span):after {
        content: '/';
      }
    `}</style>
    <nav className='container'>
      <Link href='/#home' title='Home'>
        <img src='/static/logo.svg' className='logo' />
      </Link>
      <div className='links'>
        <Link href='/#work'>Work</Link>
        <span />
        <Link href='/#contact'>Contact</Link>
      </div>
    </nav>
  </header>
)
