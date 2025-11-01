// src/components/Login.jsx
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 w-full bg-white rounded-xl">
      <img
        src={logo}
        alt="NDU Logo"
        className="w-32 h-32 object-contain mb-6"
      />

      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Naxçıvan Dövlət Universiteti Tələbə Məlumat İnformasiya Sistemi
      </h1>

      <form className="w-full max-w-xs space-y-5">
        {/* Kullanıcı Adı - İkonlu */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="İstifadəçi adı"
            className="w-full pl-10 pr-4 py-3 border bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Şifre - İkonlu + Göz Butonu */}
        <div className="relative">
          {/* Sol: Kilit ikonu */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="İstifadəçi Şifrəsi"
            className="w-full pl-10 pr-10 py-3 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Sağ: Göz butonu */}
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
          >
            {showPassword ? (
              // Göz açık (şifre görünür)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Göz kapalı (şifre gizli)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019 10c0-2.757-1.086-5.243-2.86-7.071l-1.473-1.473zM10 16a6 6 0 100-12 6 6 0 000 12zm-1-9a1 1 0 100 2h2a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-200"
        >
          Daxil ol
        </button>
      </form>
    </div>
  );
}
