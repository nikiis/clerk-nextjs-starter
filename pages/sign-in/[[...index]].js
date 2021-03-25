import { SignIn } from '@clerk/clerk-react';
export default function SignInPage() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Hello!</h1>
            <SignIn path="/sign-in" routing="path" signUpURL="/sign-up" />
        </div>
    );
}
