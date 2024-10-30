'use client'
 
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArticleT } from "../../config/Types/Articles";
import Card from "@/components/Card/Card";
import axios from "axios";
import Loading from "@/components/Loading/Loading";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";  
 


export default function Home() {
const [Articles, setArticleTs] = useState<ArticleT[]>([]);
const [Load, setLoad] = useState<boolean>(true);

 
  const [visibleItems, setVisibleItems] = useState(9);

  const loadMore = () => {
    // setLoad(true)
    setVisibleItems((prev) => prev + 9);
    // setLoad(false);
  }
  
useEffect(() => {
  AOS.init();
setLoad(true);
axios
  .get("https://dev.to/api/articles")
  .then((res) => {
    if(res.status===200){
      setArticleTs(res.data);
      setLoad(false);
    }
   
  })
  .catch(() => {});
},[])


  return (
    <div className="">
      {Load ? (
        <div className="h-screen w-screen flex justify-center items-center LoadingScreen">
          <Loading />
        </div>
      ) : (
        <main className="flex flex-col main">
          {/* Resources and insights  section*/}
          <section className="flex    flex-col justify-center items-center Resourcescard">
            <p className="Our-blog animate__animated animate__fadeIn ">
              Our blog
            </p>
            <h1 className="Title animate__animated animate__backInDown">
              Resources and insights
            </h1>
            <p className="des animate__animated animate__fadeIn">
              The latest industry news, interviews, technologies, and resources.
            </p>
            <input className="Searchinput" placeholder="Search"></input>
          </section>

          {Articles.length > 0 ? (
            <section className="flex flex-col items-center pb-16">
              <div className="Cardssection mb-8">
                {Articles.slice(0, visibleItems).map(
                  (Article: ArticleT, ind: number) => {
                    return <Card Article={Article} key={Article.id} />;
                  },
                )}
              </div>
              {visibleItems < Articles.length&&(
              <button className="Loadmorebtn" onClick={() => loadMore()}>
                <img src="/Icon.svg" alt="Arrow down" />
                Load more
              </button>)}
            </section>
          ) : (
            <></>
          )}
        </main>
      )}
    </div>
  );
}
