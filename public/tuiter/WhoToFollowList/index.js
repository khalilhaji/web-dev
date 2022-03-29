import who from "./who.js";
import ListItem from "./ListItem.js";

const WhoToFollowList = () => {
  return `
        <ul class="list-group">
            ${who.map((item) => ListItem(item)).join("\n")}
        </ul>
    `;
};
export default WhoToFollowList;
