import React from "react";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={item._id}
          >
            <img
              src={item.image}
              alt="thumbnail"
              className="aspect-square object-cover rounded-lg w-1/5"
            />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4 ">
        {tags.map((tag, index) => (
          <Link
            key={index}
            className="inline-block text-xs text-white font-roboto rounded-md px-3 py-1.5 bg-primary md:text-sm"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
