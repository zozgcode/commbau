"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("User not found");
      setLoading(false);
      return;
    }
    if (user.password !== password) {
      setError("Invalid password");
      setLoading(false);
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    router.push("/accounts");
    setLoading(false);
  };

  return (
    <div className="">
      <div className="h-screen bg-white">
        <div className="pt-5">
          <div className="bg-white mx-auto rounded-xl max-w-[500px] p-7">
            <div className="mb-2">
              <Image
                src="https://i.imgur.com/ycLvEXz.png"
                width={100}
                height={100}
                className="w-[80%]"
                alt="logo"
              />
            </div>
            {error && (
              <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center text-[#000000]">
                {error}
              </p>
            )}
            <div className="bg-[#7A7A7A] text-white leading-[45px] pl-[15px] mt-5">
              Log on to NetBank
            </div>
            <form onSubmit={handleLogin} className="bg-[#F4F4F4] pl-[15px] sm:pl-0 py-5 pr-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="w-full sm:w-[30%] text-left sm:text-right">
                    <label
                      htmlFor="Client number"
                      className="text-[#000000] text-[16px]"
                    >
                      Client number
                    </label>
                  </div>
                  <input
                    type="text"
                    value={username}
                    className="p-2 border border-[#969696] text-[#5c5c5c] w-full sm:w-[70%]"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <div className="sw-full sm:w-[30%] text-left sm:text-right">
                    <label
                      htmlFor="password"
                      className="text-[#000000] text-[16px]"
                    >
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    value={password}
                    className="p-2 border border-[#969696] text-[#5c5c5c] w-full sm:w-[70%]"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-end justify-end mt-6">
                <button
                  type="submit"
                  className="p-3 bg-[#fcc30f] text-[18px] w-[150px] font-semibold rounded-[50px] text-[#000000]"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="2.8"
                          height="12"
                          x="1"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff111"
                            attributeName="y"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="5.8"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="10.6"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="15.4"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="20.2"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff112"
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="2.8"
                          height="12"
                          x="1"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff111"
                            attributeName="y"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="0;IconifyId18f313d6c669096ff112.end-0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="5.8"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.1s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="10.6"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.2s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="15.4"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.3s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                        <rect
                          width="2.8"
                          height="12"
                          x="20.2"
                          y="6"
                          fill="currentColor"
                        >
                          <animate
                            id="IconifyId18f313d6c669096ff112"
                            attributeName="y"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="6;1;6"
                          />
                          <animate
                            attributeName="height"
                            begin="IconifyId18f313d6c669096ff111.begin+0.4s"
                            calcMode="spline"
                            dur="0.6s"
                            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
                            values="12;22;12"
                          />
                        </rect>
                      </svg>
                    </span>
                  ) : (
                    "Log on"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
