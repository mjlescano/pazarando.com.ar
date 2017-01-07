import Link from 'next/prefetch'

export default (props) => (
  <footer>
    <style jsx>{`
      footer {
        color: #fff;
        padding: 78px 0;
        background-color: #e2bf10;
      }

      footer :global(a):hover {
        color: #525252;
      }

      .logo {
        display: block;
        margin: 0 auto 40px;
        width: 75px;
      }

      .links {
        text-align: center;
        margin-bottom: 24px;
        font-size: 20px;
      }

      .links :global(a) {
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

      .email {
        text-align: center;
        font-size: 20px;
      }
    `}</style>
    <div className='container'>
      <Link href='/' title='Home'>
        <img src='/static/logo-white.svg' className='logo' />
      </Link>
      <div className='links'>
        <Link
          href='https://dribbble.com/pazarando'
          rel='nofollow noopener'
          target='_blank'
          prefetch={false}>
          Dribble
        </Link>
        <span />
        <Link
          href='https://ar.linkedin.com/in/paz-arando-10a52931'
          rel='nofollow noopener'
          target='_blank'
          prefetch={false}>
          LinkedIn
        </Link>
        <span />
        <Link
          href='https://www.instagram.com/pazarando/'
          rel='nofollow noopener'
          target='_blank'
          prefetch={false}>
          Instagram
        </Link>
      </div>
      <div className='email'>
        <Link href='mailto:paz.arando@gmail.com' prefetch={false}>
          paz.arando@gmail.com
        </Link>
      </div>
    </div>
  </footer>
)
