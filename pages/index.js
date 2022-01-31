import Image from "next/image";
import Hero from "../components/Hero";
import Featured from "../components/post/Featured";
import Post from "../components/post/Post";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <Featured />

        <div className='md:grid grid-cols-3 pt-12  gap-x-5 '>
          <div className='col-start-1 col-end-2 flex-col flex space-y-10  '>
            <Post
              img={"/images/postImg/21.jpg"}
              title={"I like fishing because it is always the great way of relaxing"}
              category={"BEAUTY"}
            />
            <Post
              img={"/images/postImg/23.jpg"}
              title={"Camping in an abandoned house under the starry night at hill top"}
              category={"BUSINESS"}
            />
            <Post
              img={"/images/postImg/25.jpg"}
              title={"A perfect road map for travelling asian countries"}
              category={"FASION"}
            />
            <Post
              img={"/images/postImg/27.jpg"}
              title={"Listen This Energetic Music From Mix Cloud"}
              category={"FASION"}
            />
          </div>
          <div className='col-start-2 col-end-3 flex-col flex space-y-10 '>
            <Post
              img={"/images/postImg/22.jpg"}
              title={"My Memorable story of trip to grand canyon National Park"}
              category={"FASION"}
            />
            <Post
              img={"/images/postImg/24.jpg"}
              title={"Some amazing similarities between people around the world"}
              category={"LEARN"}
            />
            <Post
              img={"/images/postImg/26.jpg"}
              title={"Mind refreshing song by Rabindranath Tagore"}
              category={"NATURE"}
            />
            <Post
              img={"/images/postImg/28.jpg"}
              title={"Little known facts about deer which makes theme more adorable"}
              category={"FASION"}
            />
          </div>
          <div className='col-start-3 col-end-4'></div>
        </div>
      </main>
    </div>
  );
}
