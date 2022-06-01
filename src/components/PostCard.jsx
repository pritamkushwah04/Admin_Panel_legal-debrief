import React from "react";
import dateFormat from "dateformat";
import { Link, useNavigate } from "react-router-dom";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

export default function PostCard({ post, onDeleteClick, type }) {
  const navigate = useNavigate();
  if (!post) return null;
  const { title, meta, tags, slug, thumbnail, createdAt, id } = post;

  return (
    // <Link to={`/${type}/view/${slug}`}>
    <div
      onClick={() => {
        navigate(`/${type}/view/${slug}`);
      }}
      className="md:mb-0 mb-5 flex flex-col rounded overflow-hidden shadow-md bg-white cursor-pointer"
    >
      <img
        className="aspect-video"
        src={thumbnail || "./blank.jpg"}
        alt={title}
      />
      <div className="p-3 flex-1 flex flex-col justify-between">
        <h1 className="font-semibold text-lg text-gray-700">{title}</h1>
        <p className="text-gray-500">{meta.substring(0, 80) + "..."}</p>
        <div className="flex justify-between items-center pt-2">
          <p className="text-xs text-gray-500">
            {dateFormat(createdAt, "mediumDate")}
          </p>
          <div>
            <span className="text-xs text-gray-500">{tags?.join(", ")}</span>
          </div>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <Link
            to={`/${type}/update-post/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-400 text-white hover:bg-blue-600 transition"
          >
            <BsPencilSquare />
          </Link>
          <button
            onClick={(e) => {
              e.stopPropagation(); // need to stop bubbling to parent on click
              onDeleteClick(id, type);
            }}
            className="h-8 w-8 rounded-full flex items-center justify-center bg-red-400 text-white hover:bg-red-600 transition"
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
    // </Link>
  );
}
