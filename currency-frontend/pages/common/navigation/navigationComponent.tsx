import { useRouter } from 'next/router';
import { DASHBOARD_PAGE, EXCHANGE_RATES_PAGE, HOME_PAGE } from '../../constants/pagePaths';

export default function Navigation() {
  return (
    <div className='p-15'>
      <Link href={HOME_PAGE}>Home</Link>
      <Link href={DASHBOARD_PAGE}>Dashboard</Link>
      <Link href={EXCHANGE_RATES_PAGE}>Exchange Rates</Link>
    </div>
  )
}

const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  )
}