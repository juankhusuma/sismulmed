import { app } from "@/lib/firebase"
import { getAuth } from "firebase/auth"
import { useAuthState, useSignInWithGoogle, useSignOut } from "react-firebase-hooks/auth"

export default function Navbar() {
    const auth = getAuth(app)
    const [user, loading] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [signOut] = useSignOut(auth)

    return <nav className="flex h-16 items-center justify-between px-5 py-3 w-full shadow-xl bg-white">
        <div>
            {loading && <p>Loading...</p>}
            {user ?
                <img
                    className="border border-black w-10 rounded-full"
                    src={user.photoURL as string} referrerPolicy="no-referrer" alt="" />
                : <button className="font-bold cursor-pointer text-sm hover:text-gray-700 transition-colors" onClick={async () => await signInWithGoogle()}>Log In</button>
            }
        </div>
        <div>
            {user && <button className="font-bold cursor-pointer text-sm hover:text-gray-700 transition-colors" onClick={async () => await signOut()}>Log Out</button>}
        </div>
    </nav>
}