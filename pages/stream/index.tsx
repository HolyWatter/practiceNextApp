import type { NextPage } from "next";
import Layout from "../../components/layout";

const Stream: NextPage = () => {
  return (
    <Layout title="Stream" hasTabBar>
      <div className="py-10 px-4 space-y-4 divide-y-2">
        {[1, 2, 1, 1, 1].map((el, idx) => (
          <div className="pt-4" key={idx}>
            <div className="w-full bg-slate-300 aspect-video shadow-sm rounded-md" />
            <h3 className="text-gray-700 text-lg mt-2">Let's try potato</h3>
          </div>
        ))}
        <button className="fixed bottom-24 right-5 shadow-xl hover:bg-orange-500 cursor-pointer bg-orange-400 rounded-full p-3 text-white colors-transition border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
