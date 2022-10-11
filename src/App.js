import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./store/reducer"
import {getPostsError,getPostsSelector,getPostsLoading} from "./store/selector";

function App() {
const posts = useSelector (getPostsSelector);
const dispatch = useDispatch ();
const loading = useSelector(getPostsLoading);
const error = useSelector(getPostsError);

useEffect(() => {
dispatch(getData())
    }
, [])
    if (loading) {
        return (
            <div>
                Идет загрузка...
            </div>
        )
    }
    if (error) {
        return (
            <div>
                Произошла ошибка
            </div>
        )
    }
  return (
    <div className="App">
      {posts.map((post)=>{
        return(
            <div key={post.id}>
              {post.title}
            </div>
        )
      })}
    </div>
  );
}

export default App;
