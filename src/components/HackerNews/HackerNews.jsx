import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews, setQuery } from "../../sagas/news/newsSlice";
import { debounce } from "lodash";

// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const dispatch = useDispatch();

  const { hits, query, loading, errorMessage } = useSelector(
    (state) => state.news
  );
  console.log("hits :>> ", hits);

  useEffect(() => {
    /*  dispatch getNews() thì watcher saga sẽ lắng nghe xem là thằng nào dispatch
          dựa vào type của action => getNews.type để gọi hàm lấy news về
          yield takeLatest(getNews.type, handleGetNews); ( file saga.js)
    */
    dispatch(getNews(query));
  }, [dispatch, query]);

  // set 0.5s sau khi end-user ngừng gõ mới chạy hàm search
  const handleChangeQuery = debounce((e) => {
    dispatch(setQuery(e.target.value)); // có thể dùng query là state nhưng đang dùng redux-saga thì nên dùng redux-saga hết
  }, 500);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={handleChangeQuery}
        />
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits &&
          hits.length > 0 &&
          hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={index} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
