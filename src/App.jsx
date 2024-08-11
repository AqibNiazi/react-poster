import React, { useState } from "react";
import PostList from "@components/PostList";
import MainHeader from "@components/MainHeader";
const App = () => {
  const [showModel, setShowModel] = useState(false);
  const onShowModal = () => {
    setShowModel(true);
  };
  const onHideModal = () => {
    setShowModel(false);
  };
  return (
    <>
      <MainHeader onCreatePost={onShowModal} />
      <main>
        <PostList isPosting={showModel} onStopPosting={onHideModal} />
      </main>
    </>
  );
};

export default App;
