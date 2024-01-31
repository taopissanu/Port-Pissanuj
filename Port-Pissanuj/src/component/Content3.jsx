import React from 'react'
import MySVGComponent from './MySVGComponent';

function Content3() {
  return (
    <div class="justify-start p-2">    
    <div class="overflow-hidden bg-gray-700 py-6 sm:py-12 sm:rounded-lg">
    <div class="bg-white px-6  shadow-xl ring-1 ring-gray-900/5 mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mr-0">
        <div class="divide-y divide-gray-300/50">
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
            <div class="font-bold font-mono"><p>Professional Experience</p> </div>
            <ul class="space-y-4">
              <figure class="flex ">
                        
                <figure >
                   <div class="flex sm:py-1"><MySVGComponent />August 2021 - September 2022 | USER CO., LTD. (Gourmet Enterprise) | IT Support</div>
                   <div class="flex sm:py-1"><MySVGComponent />September 2022 – Present | e-Merchant Co., Ltd.| Software Developer</div>    
 
                </figure>
              </figure>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Content3