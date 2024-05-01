import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
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
    this.followState = 'followed'
  }

  async unfollow() {
    // Your code here
    this.followState = 'unfollowed'
  }

  render() {
    switch (this.followState) {
      // Your code here
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