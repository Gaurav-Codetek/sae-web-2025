import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ArticleSkeleton = () => {
  const location = useLocation();
  const [respData, setRespData] = useState([]);
  const [moreNewsletter, setMoreNewsletter] = useState([]);
  const [subscribeStatus, setSubscribeStatus] = useState("Subscribe");
  const [input, setInput] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const resp = await axios(
          `${process.env.REACT_APP_BASE_URL}/getData?title=${encodeURIComponent(title)}`,
          {
            headers: {
              "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
            },
          }
        );
        setRespData(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContent();
    onLoad();
  }, []);

  function removeObjectByTitle(array, titleToRemove) {
    return array.filter((item) => item.title !== titleToRemove).reverse();
  }

  const onLoad = async () => {
    try {
      const resp = await axios(`${process.env.REACT_APP_BASE_URL}/getAllData`, {
        headers: {
          "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
        },
      });
      const data = resp.data.data;
      const updatedData = removeObjectByTitle(data, title);
      setMoreNewsletter(updatedData);
    } catch (err) {
      console.log(err);
    }
  };

  function convertTagsToArray(tagsString) {
    if (!tagsString || typeof tagsString !== "string") {
      return [];
    }
    return tagsString.split(",").map((tag) => tag.trim());
  }

  async function onSubscribe() {
    setSubscribeStatus("Subscribing...");
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addSub`,
        {
          submail: input,
        },
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
          },
        }
      );
      const data = resp.data.status_code;
      if (data === 200) {
        setSubscribeStatus("Subscribed");
      } else {
        alert("not subscribed due to network issue! Try again!");
        setSubscribeStatus("Subscribe");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function onClickArticle(article){
    const parsedTitle = article.trim();
    window.open(`/techblog/?=${parsedTitle}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative z-0">
      {/* Background grid with gradient overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Article Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          {respData.data?.title}
        </h1>

        {/* Tags Container */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {convertTagsToArray(respData.data?.tag || "").map((tag, index) => (
            <span
              key={index}
              className="bg-blue-900/20 text-blue-400 px-4 py-1.5 rounded-full text-sm border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-gray-400">Newsletter AI</span>
          <span className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
            Brief In
          </span>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {respData.data?.content?.length > 0 ? (
            respData.data?.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {section.subtitle}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {section.paragraph}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No content available. Please try again.
            </p>
          )}
        </div>

        {/* More Newsletters Section */}
        <div className="mt-16 border-t border-blue-900/30 pt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">More newsletter</h2>
          <div className="space-y-4">
            {moreNewsletter.map((item, index) => (
              <div
                key={index}
                className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4 hover:bg-blue-900/20 transition-colors"
              >
                <h3 onClick={()=>onClickArticle(item.title)} className="text-lg cursor-pointer text-blue-400">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-16">
          <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full flex-1 bg-white/10 border border-blue-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
              />
              <button
                onClick={onSubscribe}
                className=" w-[30%] bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition-all active:scale-95"
              >
                {subscribeStatus}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;