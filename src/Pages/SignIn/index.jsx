import { Layout } from "../../components/Layout"
import { LoginForm } from "../../components/UserRegister"

export const SignIn = () => {
    return (
      <Layout>
        <h1>¡Welcome!</h1>
        <div className='mt-8 flex flex-col-reverse gap-2 flex-1'>
        {
          <LoginForm/>
        }
        </div>
      </Layout>
    )
  }
  