### detailed view of the user profile

```js
import { BrowserRouter as Router } from "react-router-dom";

<Router>
  <Profile
    isStatic
    openProfile={true}
    user={{
      _id: "6061844e76b0a8d849265634",
      userName: "Annemarie Schmidt",
      image:
        "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nzl8fGdpcmwlMjBzcG9ydHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      phone: "06629-838390",
      email: "annemarie@mail.com",
      adress: "Alte Straße 12, 71381 Inzlingen",
      interests: "Volleyball, Zelten, Kaffe trinken",
      motto: "Immer runter vom Ofen. ",
      groups: "Motorradfreunde Niederrimsingen, Anne Will",
    }}
  />
</Router>;
```
