import React from 'react'
import MySVGComponent from './MySVGComponent';

function Content() {
  return (
    <div class="justify-start p-2">
      <div class="overflow-hidden bg-gray-700 py-6 sm:py-12 sm:rounded-lg">
        <div class="bg-white px-6  shadow-xl ring-1 ring-gray-900/5 mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mr-0">
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                <div class="font-bold font-mono"><p>Technical Experience</p> </div>
                <ul class="space-y-4">
                  <li class="flex ">
                    <p class="ml-10 space-y-3">
                      <div className="flex items-center">
                        <MySVGComponent />
                        <div className="ml-2">
                          <p className="mb-1">Programming | Java, Kotlin, SQL, HTML, CSS, C# </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MySVGComponent />
                        <div className="ml-2">
                          <p className="mb-1">Operating | Systems Windows, Linux</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MySVGComponent />
                        <div className="ml-2">
                          <p className="mb-1">Tools & Utilities | Proxmox Virtual, Postman, GIT</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MySVGComponent />
                        <div className="ml-2">
                          <p className="mb-1">Databases | MySQL, Microsoft SQL</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MySVGComponent />
                        <div className="ml-2">
                          <p className="mb-1">Methodology | Agile</p>
                        </div>
                      </div>
                   

                    </p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Content