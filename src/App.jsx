import { useState } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const generatePassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  };

  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  const clearPassword = () => {
    setGeneratedPassword("");
  };

  return (
    <>
    <section className="flex justify-center items-center m-6">
      <div className=" flex justify-center flex-col">
        <div className=" mt-10">
          <h1 className=" text-red-500 font-mono text-4xl">Password Generator</h1>
        </div>

        <div className="mt-10 " >
          <form className=" flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <span className=' text-2xl text-center'>Enter Length of the password</span>
              <input 
                type="number" 
                className=" border border-red-500 p-2 outline-none rounded-lg text-center font-semibold"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              />
            </div>

            <div className="flex justify-center flex-col gap-3">
              
              <div className=" border border-red-500 rounded-md flex justify-center py-2">
                <div className='flex justify-center  w-[200px] h-[20px] items-center'>
                <span className='flex'>{generatedPassword}</span>
                </div> 
               
              </div>

              <button 
                className=" border border-red-500 py-2 rounded-md gap-3 hover:bg-red-600 hover:border hover:border-white hover:text-white hover:transition-all"
                type="button"
                onClick={handleGeneratePassword}
              >
                Generate Password
              </button>

              <div className="flex justify-center">
                <button 
                  className=" bg-red-500 text-white p-2 outline-none rounded-lg text-center font-semibold m-3"
                  type="button"
                  onClick={copyToClipboard}
                  disabled={!generatedPassword}
                >
                  Copy Password
                </button>
                <button 
                  className=" bg-red-500 text-white p-2 outline-none rounded-lg text-center font-semibold m-3"
                  type="button"
                  onClick={clearPassword}
                  disabled={!generatedPassword}
                >
                  Clear Password
                </button>  
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default App;
