import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.userId = toggleButton.dataset.userId
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener("click", this.handleClick.bind(this))
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault()

    if (this.followState === 'followed') {
        this.unfollow()
    } else {
        this.follow()
    }

    console.log(this.followState)
  }

  async follow() {
    // Your code here
    this.followState = 'following'
    await API.followUser(this.userId)
    this.followState = 'followed'
  }

  async unfollow() {
    // Your code here
    this.followState = 'unfollowing'
    await API.unfollowUser(this.userId)
    this.followState = 'unfollowed'
  }

  render() {
    switch (this.followState) {
      // Your code here
        case 'followed':
            this.toggleButton.disable = false;
            this.toggleButton.innerText = "Unfollow!";
        case 'unfollewed':
            this.toggleButton.disable = false;
            this.toggleButton.innerText = "Follow!";
        case 'following':
            this.toggleButton.disable = true;
            this.toggleButton.innerText = "Following...";
            break;
        case 'unfollowing':
            this.toggleButton.disable = true;
            this.toggleButton.innerText = "Unfollowing...";
            break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}