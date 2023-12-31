import '@styles/globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

var isLoggedIn : boolean = false;
var User = {
  userName : "David"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          <div className="left-navigation-menu">
            <ul>
              <li>
                <Link href="/">
                  <div>
                    <p>Home feed</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={(!isLoggedIn) ? "/login" : `/${User.userName}`}>
                  <div>
                    <p>{(!isLoggedIn) ? "Sign in" : `${User.userName}`}</p>
                  </div>
                </Link>
              </li>
              <li>

              </li>
            </ul>
          </div>
          <div className="feed-menu">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
