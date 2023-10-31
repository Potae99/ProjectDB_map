import React from 'react'

function Register() {

  const Gologin = (event) => {
    window.location.href = "/"
  }
  return (
    <div class="h-screen bg-indigo-100 flex justify-center items-center">
      <div class=" bg-white rounded-lg lg:w-2/5 md:w-1/2 w-2/3" >
        <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Form register</h1>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="username" />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="@email" />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="password" />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Confirm password</label>
            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="confirm password" />
          </div>
          </form>
          <button onClick={Gologin} class=" w-3/4   mt-6 ml-24 bg-black rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
          <button onClick={Gologin} class="w-3/4 mt-6 ml-24 mb-3 bg-indigo-500 rounded-lg px-4 py-2 text-lg text-black tracking-wide font-semibold font-sans">Login</button>
      </div>
    </div>
  )
}

export default Register