import { SignUp } from '@clerk/clerk-react';
export default function SignUpPage() {
    return;
    <h1>
        Hello world!
        <SignUp path="/sign-up" routing="path" signInURL="/sign-in" />
    </h1>;
}
