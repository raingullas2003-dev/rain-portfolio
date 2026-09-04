import Fairy from "../components/Fairy/Fairy";
import Chat from "../components/Chat/Chat";

function Home({
setCurrentPage,
messages,
setMessages
}) {

return (


<section className="page home-page">

  <h1>Rain's Portfolio</h1>

  <Fairy type="landing" />

  <Chat
    messages={messages}
    setMessages={setMessages}
    setCurrentPage={setCurrentPage}
  />

</section>


);

}

export default Home;
