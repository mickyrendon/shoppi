import { Layout } from "../../components/Layout"
import { SignUpForm } from "../../components/signUpForm"
export const SignUp = () => {
    return (
      <Layout>
        <h1>Create Account</h1>
        <div className='mt-8 flex flex-col-reverse gap-2 flex-1'>
        {
          <SignUpForm/>
        }
        </div>
      </Layout>
    )
}