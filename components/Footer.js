import Link from 'next/link'
import Anchor from './Anchor'

export default (props) => (
  <footer>
    <style jsx>{`
      footer {
        color: #fff;
        margin-top: 83px;
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

      .links :global(a),
      .links :global(span) {
        display: inline-block;
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
    <Anchor id='contact'>
      <div className='container'>
        <Link prefetch href='/' title='Home'>
          <a><img src='/static/logo-white.svg' className='logo' /></a>
        </Link>
        <div className='links'>
          <a
            href='https://dribbble.com/pazarando'
            rel='nofollow noopener'
            target='_blank'>
            Dribble
          </a>
          <span />
          <a
            href='https://ar.linkedin.com/in/paz-arando-10a52931'
            rel='nofollow noopener'
            target='_blank'>
            LinkedIn
          </a>
          <span />
          <a
            href='https://www.instagram.com/pazarando/'
            rel='nofollow noopener'
            target='_blank'>
            Instagram
          </a>
          <span />
          <a
            href='https://twitter.com/pazarando'
            rel='nofollow noopener'
            target='_blank'>
            Twitter
          </a>
        </div>
        <div className='email'>
          <a href='mailto:paz.arando@gmail.com'>
            paz.arando@gmail.com
          </a>
        </div>
      </div>
    </Anchor>
  </footer>
)
