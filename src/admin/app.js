// ./src/admin/app.js

import TweetButton from "./extensions/components/TweetButton"; // Component displaying a tweet button in the Content Manager

export default {
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: TweetButton,
    });
  },
};
