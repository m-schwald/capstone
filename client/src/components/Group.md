### there is a group-icon in the nav-bar, that opens this page on click. It displays properties of the group.

```js
import { BrowserRouter as Router } from "react-router-dom";
<Router>
  <Group isStatic openGroup={true} groupId={"groupName"} />
</Router>;
```
