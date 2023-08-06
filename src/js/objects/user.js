const objectUser = {
  avatarUrl: "",
  name: "",
  bio: "",
  location: "",
  userName: "",
  found: "",
  repositories: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url ?? null;
    this.name = gitHubUser.name ?? null;
    this.bio = gitHubUser.bio ?? null;
    this.location = gitHubUser.location ?? null;
    this.userName = gitHubUser.login ?? null;
    this.found = gitHubUser.message != "Not Found";
  },
  setRepositories(repositories) {
    this.repositories = repositories ?? null;
  },
};

export { objectUser };
