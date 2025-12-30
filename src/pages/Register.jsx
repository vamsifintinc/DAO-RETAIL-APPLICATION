import MainLayout from "../components/Layouts/MainLayout"
import RegisterRight from "../components/RightSide/RegisterRight"
import { GET_STARTED } from "../constants/pageConstants"

const Register = () => {
  return (
    <MainLayout pageConstants = {GET_STARTED}>
      <RegisterRight />
    </MainLayout>
  )
}

export default Register
