import { useAuth, signOut } from "../../lib/authContext";
import Link from "next/link";

export default function Header(props: any) {
  const { user, loading } = useAuth();

  return (
    <div>
      {/* Desktop navigation */}
      <div className="sm:flex hidden bottom-0 w-full sm:relative sm:h-full bg-white border-t shadow-lg">
        <div className="flex-1 my-auto text-center">
          <Link href="/">
            <button>Home</button>
          </Link>
        </div>

        <div className="flex justify-around m-auto space-x-2">
          {!user && !loading ? (
            <>
              <Link passHref href="/signup">
                <button className="m-auto">Signup</button>
              </Link>

              <Link passHref href="/signin">
                <button className="m-auto">Signin</button>
              </Link>
            </>
          ) : null}
          {user ? (
            <>
              <Link href="/privatessr">
                <button>PrivateSSR</button>
              </Link>

              <Link href="/private">
                <button>Private</button>
              </Link>

              <button onClick={signOut}>Signout</button>
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden fixed bottom-0 w-full bg-white border-t shadow-lg flex justify-around items-center p-2">
        <Link href="/">
          <button className="text-center">
            <div>🏠</div>
            <div>Home</div>
          </button>
        </Link>

        {!user && !loading ? (
          <>
            <Link passHref href="/signup">
              <button className="text-center">
                <div>📝</div>
                <div>Signup</div>
              </button>
            </Link>

            <Link passHref href="/signin">
              <button className="text-center">
                <div>🔑</div>
                <div>Signin</div>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/privatessr">
              <button className="text-center">
                <div>🔐</div>
                <div>PrivateSSR</div>
              </button>
            </Link>

            <Link href="/private">
              <button className="text-center">
                <div>🔒</div>
                <div>Private</div>
              </button>
            </Link>

            <button onClick={signOut} className="text-center">
              <div>🚪</div>
              <div>Signout</div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
