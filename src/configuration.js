const gh_interests_base =
  "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics";

export default {
  github: {
    username: "realbucksavage",
    repositories: {
      ignore: [
        "botnet",
        "eivor-ai",
        "blog4git",
        "pymail-client"
      ]
    }
  },
  interests: {
    enabled: true,
    topics: [
      {
        name: "Linux",
        web_url: "https://github.com/topics/linux",
        image_url: `${gh_interests_base}/linux/linux.png`
      },
      {
        name: "GoLang",
        web_url: "https://github.com/topics/golang",
        image_url: `${gh_interests_base}/go/go.png`
      },
      {
        name: "Python",
        web_url: "https://github.com/topics/python",
        image_url: `${gh_interests_base}/python/python.png`
      },
      {
        name: "ReactJS",
        web_url: "https://github.com/topics/react",
        image_url: `${gh_interests_base}/react/react.png`
      }
    ]
  }
};
