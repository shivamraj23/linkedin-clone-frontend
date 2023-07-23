import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";

const Middlepanel = () => {
  return (
    <div className="middlepanel-container">
      <NewPost></NewPost>
      <Post
        thecontent="Greetings, Gotham City! The night is alive, and so am I – your ever-vigilant protector, Batman. As darkness blankets our city, I'm reminded of the importance of our collective efforts in the fight against crime and corruption.

        In the face of adversity, we must stand tall and resolute. Together, we can bring about real change, making our streets safer and instilling hope in the hearts of the innocent. It's not just about battling villains but also empowering the community, for a stronger Gotham City.

        I urge each and every one of you to be vigilant, to look out for your neighbors, and to report any suspicious activities. Remember, your voice can make a difference. Let's break the chains of fear that bind us and forge a path towards a brighter future."
      ></Post>
      <Post
        thecontent="To my fellow heroes and law enforcement personnel, your dedication and sacrifice do not go unnoticed. We share a common goal, and I stand ready to support you in any way I can. Together, we are an unyielding force against the darkness that threatens our city's peace.

        Finally, a heartfelt thank you to the people of Gotham for your unwavering support. It is your unwavering spirit that fuels my mission. I promise to continue my tireless pursuit of justice, keeping our streets safe for generations to come."
      ></Post>
      <Post
        thecontent="Stay strong, Gotham. Remember, we are stronger than our fears, and together, we shall triumph.

        #DarkKnight #GothamProtector #TogetherWeRise #JusticePrevails"
      ></Post>

      
    </div>
  );
};

export default Middlepanel;
