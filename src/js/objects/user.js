const objectUser = {
  avatarUrl: "",
  name: "",
  bio: "",
  location: "",
  userName: "",
  followers: "",
  following: "",
  found: "",
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url ?? null;
    this.name = gitHubUser.name ?? null;
    this.bio = gitHubUser.bio ?? null;
    this.location = gitHubUser.location ?? null;
    this.userName = gitHubUser.login ?? null;
    this.followers = gitHubUser.followers ?? null;
    this.following = gitHubUser.following ?? null;
    this.found = gitHubUser.message != "Not Found";
  },
  setRepositories(repositories) {
    this.repositories = repositories ?? null;
  },
  setEvents(events) {
    this.events = events ?? null;
  }
};

export { objectUser };
