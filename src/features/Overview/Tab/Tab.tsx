import { useState } from 'react'

import tw from 'twin.macro'

import { Tab } from '@headlessui/react'

import Analytics from '../Analytics'
// import Configuration from '../Configuration'
import Results from '../Results'

enum View {
  RESULTS = 'results',
  ANALYTICS = 'analytics',
  // CONFIGURATION = 'configuration',
}

const TabView = () => {
  const [view, setView] = useState(View.RESULTS)

  return (
    <div css={tw`w-full h-full px-2 mt-10 sm:px-0 flex flex-col`}>
      <Tab.Group>
        <div css={tw`flex justify-center w-full`}>
          <Tab.List css={tw`flex space-x-2 rounded-xl bg-gray-100 p-1 w-full md:max-w-xl`}>
            <Tab
              onClick={() => setView(View.RESULTS)}
              css={[
                tw`w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:(ring-0 outline-none)`,
                tw`text-gray-700 hover:(bg-brand/40 text-white)`,
                view === View.RESULTS &&
                  tw`bg-gradient-to-b from-brand/80 to-brand text-white shadow hover:bg-brand/90`,
              ]}
            >
              Results
            </Tab>
            <Tab
              onClick={() => setView(View.ANALYTICS)}
              css={[
                tw`w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:(ring-0 outline-none)`,
                tw`text-gray-700 hover:(bg-brand/40 text-white)`,
                view === View.ANALYTICS &&
                  tw`bg-gradient-to-b from-brand/80 to-brand text-white  shadow hover:bg-brand/90`,
              ]}
            >
              Analytics
            </Tab>
            {/* <Tab
              onClick={() => setView(View.CONFIGURATION)}
              css={[
                tw`w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:(ring-0 outline-none)`,
                tw`text-gray-700 hover:(bg-brand/40 text-white)`,
                view === View.CONFIGURATION &&
                  tw`bg-gradient-to-b from-brand/80 to-brand text-white  shadow hover:bg-brand/90`,
              ]}
            >
              Configuration
            </Tab> */}
          </Tab.List>
        </div>
      </Tab.Group>

      <div css={tw`flex-1 overflow-y-auto overflow-x-hidden mt-5`}>
        {view === View.RESULTS && <Results />}
        {view === View.ANALYTICS && <Analytics />}
        {/* {view === View.CONFIGURATION && <Configuration />} */}
      </div>
    </div>
  )
}

export default TabView
