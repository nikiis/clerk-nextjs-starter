import { SignUp } from '@clerk/clerk-react';
export default function SignUpPage() {
    return (
        <div>
            <SignUp path="/sign-up" routing="path" signInURL="/sign-in" />
        </div>
    );
}
