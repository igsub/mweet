import Image from "next/image"
import Router from "next/router"

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle h-screen p-0">
      <Image src="/Logo blue.svg" alt="Mweeter Logo" height={70} width={70}></Image>
      <span className="font-bold">MWEETER</span>
      <button
        type="button"
        onClick={() => Router.push("/api/auth/login")}
        className="inline-block rounded bg-primary px-6 pb-2 pt-2 mt-2 text-xs font-medium uppercase transition hover:shadow-lg hover:scale-110 duration-300">
        Login
      </button>
    </div>
  )
}

export default Login