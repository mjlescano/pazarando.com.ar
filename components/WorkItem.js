import Link from 'next/link'

const WorkItem = (props) => (
  <div className='work-item'>
    <style jsx>{`
      .work-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 80px;
      }

      .work-item > div {
        max-width: 460px;
        width: 100%;
      }

      .work-item h2 {
        display: inline-block;
        margin-bottom: 23px;
        padding: 13px 27px 13px 0;
        border-bottom: 6px solid #f6cf0d;
        font-size: 22px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.4;
      }

      p {
        margin-bottom: 23px;
      }

      .more {
        text-transform: uppercase;
        color: #e2bf10;
      }

      .more :global(a):after {
        content: ' >>>'
      }
    `}</style>
    <div style={{ padding: '0 20px 20px 0' }}>
      <h2>{props.heading}</h2>
      <h1 className='tabbed'>{props.title}</h1>
      <p className='tabbed'>{props.description}</p>
      <div className='tabbed more'>
        <Link prefetch href={props.url}><a>More</a></Link>
      </div>
    </div>
    <div>
      <Link href={props.url}>
        <a><img src={props.pic} /></a>
      </Link>
    </div>
  </div>
)

export default WorkItem
