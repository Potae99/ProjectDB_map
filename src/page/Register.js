import React from 'react'

function Register() {
  const backgroundImage = {
    backgroundImage: `url(/forest1.jpg)`, // แทนตำแหน่งของรูปภาพที่ต้องการใช้
    backgroundSize: 'cover',
    // ขนาดของภาพ
    // คุณสามารถเพิ่ม style อื่น ๆ ที่ต้องการเพิ่มในภาพพื้นหลังได้ตามต้องการ
  };

  const Gologin = (event) => {
    window.location.href = "/"
  }
  return (
    <div >
      <div style={backgroundImage} class=" min-h-screen min-w-full bg-indigo-100 flex justify-center items-center">
        <div class=" bg-white rounded-lg lg:w-2/5 md:w-1/2 w-2/3" >
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-3xl mb-6 text-black  font-bold font-sans">CREATE ACCOUNT</h1>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="username">Username</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="username" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="email">Email</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="@email" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">Password</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="confirm">Confirm password</label>
              <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" placeholder="confirm password" />
            </div>
            <button onClick={Gologin} type="submit" class="w-full mt-5 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register